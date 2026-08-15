import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Flight Bookings (Tigidhada Duulimaadka)",
      description: "Waxaan kugu caawineynaa helida tigidhada duulimaadyada dalka gudihiisa iyo kuwa dibadda oo leh qiimaha ugu wanaagsan.",
      icon: "✈️",
    },
    {
      title: "Tourist & Business Visas (Fiisooyinka)",
      description: "Maareynta iyo dalabka fiisooyinka dalxiiska iyo ganacsiga ee wadamada kala duwan sida UAE, Turkey, Kenya, iyo kuwo kale.",
      icon: "🛂",
    },
    {
      title: "Hajj & Umrah Packages (Xajka iyo Umrada)",
      description: "Adeegyo dhammaystiran oo ku saabsan safarrada barakaysan ee Xajka iyo Umrada oo ay la socdaan huteello iyo gaadiid.",
      icon: "🕌",
    },
    {
      title: "Hotel Reservations (Balanqaadka Huteellada)",
      description: "Ka ballanso huteellada ugu wanaagsan caalamka iyadoo lagu doonayo qiimo ku habboon miisaaniyaddaada.",
      icon: "🏨",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-black mb-4">
            Adeegyadayada <span className="text-brand-gold">Balcad Travel</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Waxaan kuu meelmarinaynaa dhammaan adeegyada aad u baahan tahay si safarkaagu u noqdo mid fudud oo ammaan ah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-gold flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-brand-black mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </div>
              <Link 
                href="/request" 
                className="inline-block bg-brand-black text-brand-gold hover:bg-brand-gold hover:text-black font-semibold text-center py-2.5 px-4 rounded-md transition duration-300"
              >
                Codso Adeeggan
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

