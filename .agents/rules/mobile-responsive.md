# Mobile-First & Mobile Responsiveness Rule

Setiap perubahan UI, fitur baru, layout, ataupun styling yang dibuat HARUS sepenuhnya responsif di perangkat HP / Mobile (smartphone screen sizes seperti 320px, 375px, 390px, 414px, 480px, dsb).

## Pedoman Wajib:
1. **Prioritas Mobile (Mobile-First / High Mobile Usability):**
   - Pastikan navigasi, tombol, form, modal, kartu, dan tabel nyaman digunakan di layar sentuh ponsel (touch targets minimal 44x44px).
   - Hindari overflow horizontal (`overflow-x: hidden` jika diperlukan, pastikan elemen tidak meluap keluar layar).
   - Pastikan teks terbaca jelas di layar kecil tanpa perlu zoom manual.

2. **Media Queries & CSS Responsive:**
   - Gunakan media query (misalnya `@media (max-width: 768px)` dan `@media (max-width: 480px)`).
   - Gunakan unit fleksibel seperti `rem`, `vw`, `%`, `clamp()`, `minmax()`, flexbox wrap, dan CSS grid autofit/autofill.

3. **Perilaku Komponen di HP:**
   - Sidebar/menu harus berubah menjadi collapsible / drawer / hamburger / bottom navigation.
   - Tabel data harus memiliki scrolling horizontal yang rapi atau berubah menjadi format card/list view di layar sempit.
   - Modal popup & dialog harus pas dengan tinggi/lebar viewport mobile (`max-height: 90vh`, scrollable content).
