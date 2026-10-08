export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-xl font-bold text-blue-600">SECAR</div>
        <div>
          <button className="mr-4 hover:text-blue-600">Log in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign in</button>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Kelola data sekolah dengan lebih mudah, Kelola dimanapun anda berada
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Kurangi pecatatan manual. Pantau tagihan dan pembayaran, Pantau anak anda yang berkembang
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Mulai Sekarang
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300">
            Lihat Cara Pakainya
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Kenapa harus pilih sistem kami </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">4 Fitur Dalam 1 Website</h3>
            <p className="text-gray-600">Praktis digunakan, Fitur utama yang sangat unggul SIS(Student Information System), LMS(Learning Management System), Billing, Communication Hub</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Permudah Rekap Billing Dan Riwayat</h3>
            <p className="text-gray-600">Laporan siapa yang belum bayar bulan ini langsung terlihat dalam satu klik.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Interaktif Web</h3>
            <p className="text-gray-600">Sangat mudah di oprasikan dan cepat tanpa error!!</p>
          </div>

        </div>
      </section>

      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>Links</p>
        <ol>
          <li>Product</li>
          <li></li>
        </ol>
        <p>&copy; 2026 SECAR ( Sekolah Cerdas )</p>
      </footer>

    </main>
  );
}