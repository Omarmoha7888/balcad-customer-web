import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="bg-brand-black text-white py-20 px-6 text-center border-b-4 border-brand-gold">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Kusoo Dhowaw <span className="text-brand-gold">Balcad Travel Agency</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Waxaan kugu caawinaynaa Ballansada Duulimaadyada, Fiisooyinka, Huteellada, iyo Adeegyada Xajka & Umrada.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/request" className="bg-brand-gold text-black font-bold px-6 py-3 rounded-md hover:bg-white transition duration-300">
                Codso Adeeg Hada
              </Link>
              <Link href="/services" className="border border-brand-gold text-brand-gold font-bold px-6 py-3 rounded-md hover:bg-brand-gold hover:text-black transition duration-300">
                Eeg Adeegyada
              </Link>
            </div>
          </div>
        </section>

        {/* Qaybta Kooban ee Adeegyada */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-brand-black mb-10">Adeegyadayada Ugu Waaweyn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-bold mb-2 text-brand-black">Flight Bookings</h3>
              <p className="text-gray-600">Muuqaalka & qiimaha ugu wanaagsan ee tigidhada duulimaadyada dalka iyo dabaddaba.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-bold mb-2 text-brand-black">Visa Processing</h3>
              <p className="text-gray-600">Kala bixinta iyo maareynta codsiyada fiisooyinka dalxiiska iyo ganacsiga.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-bold mb-2 text-brand-black">Hajj & Umrah</h3>
              <p className="text-gray-600">U diyaargarowga iyo maareynta safarrada barakaysan ee Xajka iyo Umrada.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

