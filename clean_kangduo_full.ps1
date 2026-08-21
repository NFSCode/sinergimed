Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;
using System.Collections.Generic;

public class UltraCleanKangduo
{
    public static void Process(string srcPath, string patientCartPath, string destPath)
    {
        using (Bitmap src = new Bitmap(srcPath))
        {
            int w = src.Width;
            int h = src.Height;
            Bitmap dest = new Bitmap(w, h, PixelFormat.Format32bppArgb);

            BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            BitmapData destData = dest.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

            int srcStride = srcData.Stride;
            int destStride = destData.Stride;
            byte[] srcBytes = new byte[Math.Abs(srcStride) * h];
            byte[] destBytes = new byte[Math.Abs(destStride) * h];

            Marshal.Copy(srcData.Scan0, srcBytes, 0, srcBytes.Length);

            bool[,] isBg = new bool[w, h];
            bool[,] visited = new bool[w, h];
            Queue<Point> q = new Queue<Point>();

            Func<int, int, bool> isBgPixel = (x, y) =>
            {
                int idx = y * srcStride + x * 4;
                byte b = srcBytes[idx];
                byte g = srcBytes[idx + 1];
                byte r = srcBytes[idx + 2];

                int minC = Math.Min(r, Math.Min(g, b));
                int maxC = Math.Max(r, Math.Max(g, b));

                // Any neutral pixel above 175 is checkerboard
                if ((maxC - minC) <= 12 && minC >= 172)
                {
                    return true;
                }
                return false;
            };

            // Seed from outer borders
            for (int x = 0; x < w; x++)
            {
                if (isBgPixel(x, 0)) { q.Enqueue(new Point(x, 0)); visited[x, 0] = true; }
                if (isBgPixel(x, h - 1)) { q.Enqueue(new Point(x, h - 1)); visited[x, h - 1] = true; }
            }
            for (int y = 0; y < h; y++)
            {
                if (!visited[0, y] && isBgPixel(0, y)) { q.Enqueue(new Point(0, y)); visited[0, y] = true; }
                if (!visited[w - 1, y] && isBgPixel(w - 1, y)) { q.Enqueue(new Point(w - 1, y)); visited[w - 1, y] = true; }
            }

            int[] dx = new int[] { 1, -1, 0, 0, 1, 1, -1, -1 };
            int[] dy = new int[] { 0, 0, 1, -1, 1, -1, 1, -1 };

            while (q.Count > 0)
            {
                Point p = q.Dequeue();
                isBg[p.X, p.Y] = true;

                for (int i = 0; i < 8; i++)
                {
                    int nx = p.X + dx[i];
                    int ny = p.Y + dy[i];

                    if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[nx, ny])
                    {
                        visited[nx, ny] = true;
                        if (isBgPixel(nx, ny))
                        {
                            q.Enqueue(new Point(nx, ny));
                        }
                    }
                }
            }

            // Also check internal pockets
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    if (!visited[x, y] && isBgPixel(x, y))
                    {
                        List<Point> pocket = new List<Point>();
                        Queue<Point> pq = new Queue<Point>();
                        pq.Enqueue(new Point(x, y));
                        visited[x, y] = true;

                        while (pq.Count > 0)
                        {
                            Point cp = pq.Dequeue();
                            pocket.Add(cp);

                            for (int i = 0; i < 4; i++)
                            {
                                int nx = cp.X + dx[i];
                                int ny = cp.Y + dy[i];
                                if (nx >= 0 && nx < w && ny >= 0 && ny < h && !visited[nx, ny])
                                {
                                    if (isBgPixel(nx, ny))
                                    {
                                        visited[nx, ny] = true;
                                        pq.Enqueue(new Point(nx, ny));
                                    }
                                }
                            }
                        }

                        if (pocket.Count > 15)
                        {
                            foreach (var pt in pocket)
                            {
                                isBg[pt.X, pt.Y] = true;
                            }
                        }
                    }
                }
            }

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int srcIdx = y * srcStride + x * 4;
                    int destIdx = y * destStride + x * 4;

                    byte b = srcBytes[srcIdx];
                    byte g = srcBytes[srcIdx + 1];
                    byte r = srcBytes[srcIdx + 2];

                    if (isBg[x, y])
                    {
                        destBytes[destIdx] = 0;
                        destBytes[destIdx + 1] = 0;
                        destBytes[destIdx + 2] = 0;
                        destBytes[destIdx + 3] = 0;
                    }
                    else
                    {
                        destBytes[destIdx] = b;
                        destBytes[destIdx + 1] = g;
                        destBytes[destIdx + 2] = r;
                        destBytes[destIdx + 3] = 255;
                    }
                }
            }

            Marshal.Copy(destBytes, 0, destData.Scan0, destBytes.Length);
            src.UnlockBits(srcData);
            dest.UnlockBits(destData);

            // Overlay the perfect transparent Patient Cart on left (x=38, y=76, w=320, h=412)
            using (Bitmap pcBmp = new Bitmap(patientCartPath))
            {
                using (Graphics gDest = Graphics.FromImage(dest))
                {
                    gDest.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
                    gDest.PixelOffsetMode = System.Drawing.Drawing2D.PixelOffsetMode.HighQuality;
                    gDest.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
                    Rectangle pcRect = new Rectangle(38, 76, 320, 412);
                    gDest.DrawImage(pcBmp, pcRect);
                }
            }

            dest.Save(destPath, ImageFormat.Png);
            dest.Dispose();
            Console.WriteLine("Saved ultra-clean Kangduo full system: " + destPath);
        }
    }
}
"@ -ReferencedAssemblies System.Drawing

$src = "C:\Users\naufa\.gemini\antigravity-ide\brain\3404702c-27dd-47ad-9743-b0d8ad63c0a7\.user_uploaded\media_1787285379385.png"
$pc = "C:\Users\naufa\.gemini\antigravity-ide\brain\3404702c-27dd-47ad-9743-b0d8ad63c0a7\.user_uploaded\media_1787284813848.png"
$dest = "c:\Users\naufa\OneDrive\Documents\Synergy Med\assets\synergymed_kangduo_sr2000.png"
[UltraCleanKangduo]::Process($src, $pc, $dest)
