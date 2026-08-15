import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-black mb-4">
            Nala Soo <span className="text-brand-gold">Xiriir</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Waqti kasta oo aad u baahatid caawinaad, kooxda Balcad Travel Agency waa kuu diyaar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
              <h3 className="text-lg font-bold text-brand-black mb-1">📍 Xafiiska Wuxuu Ku Yaallaa</h3>
              <p className="text-gray-600">Balcad, Somalia</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
              <h3 className="text-lg font-bold text-brand-black mb-1">📞 Nambarrada Telefoonka</h3>
              <p className="text-gray-600">+252 61 XXXXXXX / +252 61 XXXXXXX</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
              <h3 className="text-lg font-bold text-brand-black mb-1">✉️ Email-ka Rasmi ah</h3>
              <p className="text-gray-600">info@balcadtravel.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-gold">
              <h3 className="text-lg font-bold text-brand-black mb-1">⏰ Saacadaha Shaqada</h3>
              <p className="text-gray-600">Sabti - Khamiis: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-black mb-6 border-b pb-2">Noo Soo Dir Soolan</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Magacaa Buuxa *</label>
                <input required type="text" placeholder="Magacaa" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Taleefanka / WhatsApp *</label>
                <input required type="tel" placeholder="+252 61..." className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Farriintaada *</label>
                <textarea required rows={4} placeholder="Sida aan kugu caawin karno..." className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-gold hover:bg-brand-black hover:text-white text-black font-bold py-3 rounded-md transition duration-300">
                Dir Farriinta
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

