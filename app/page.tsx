export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* 1. Bagian Navigasi Sederhana */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-xl font-bold text-blue-600">SistemSPP</div>
        <div>
          <button className="mr-4 hover:text-blue-600">Masuk</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Daftar</button>
        </div>
      </nav>

      {/* 2. Bagian Hero (Utama) */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Kelola SPP Sekolah & Pesantren Tanpa Pusing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Tinggalkan pencatatan manual. Otomatisasi tagihan, pantau pembayaran, dan amankan data siswa dalam satu platform open-source yang mudah digunakan oleh siapa saja.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Mulai Gratis
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
            Lihat Cara Kerja
          </button>
        </div>
      </section>

      {/* 3. Bagian Fitur */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Kenapa Memilih Sistem Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Card Fitur 1 */}
          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Anti Gaptek</h3>
            <p className="text-gray-600">Antarmuka dirancang khusus untuk staf yang tidak terbiasa dengan teknologi rumit.</p>
          </div>

          {/* Card Fitur 2 */}
          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Rekap Otomatis</h3>
            <p className="text-gray-600">Laporan siapa yang belum bayar bulan ini langsung terlihat dalam satu klik.</p>
          </div>

          {/* Card Fitur 3 */}
          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Aman & Terpusat</h3>
            <p className="text-gray-600">Tidak ada lagi buku catatan hilang. Semua data tersimpan aman di server.</p>
          </div>

        </div>
      </section>

      {/* 4. Bagian Footer */}
      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>&copy; 2026 SistemSPP Open Source. Dibangun untuk memajukan pendidikan.</p>
      </footer>

    </main>
  );
}