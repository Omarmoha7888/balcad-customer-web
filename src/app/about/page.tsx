import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-6 max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-black mb-4">
            Naga Soho <span className="text-brand-gold">Balcad Travel</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Astaanta kalsoonida iyo adeegga hufan ee safarrada dalka iyo dibadda.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-black mb-4">Sida Aan U Shaqayno</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Balcad Travel Agency waa hay'ad safar oo doonaysa inay macaamiisheeda u fududeyso dhammaan hawlaha safarka sida ballansashada tigidhada duulimaadka, fiisooyinka, iyo huteellada.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Waxaan mar walba u taagannahay inaan macaamiishayada siinno qiimaha ugu wanaagsan, ammaan, iyo kalsooni buuxda oo dhanka safarka ah.
            </p>
          </div>
          <div className="flex justify-center p-6 bg-brand-black rounded-lg border-2 border-brand-gold">
            <Image 
              src="/images/logo.png" 
              alt="Balcad Travel Agency" 
              width={200} 
              height={200} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-gold">
            <h3 className="text-xl font-bold text-brand-black mb-2">🎯 Hiigsigea (Vision)</h3>
            <p className="text-gray-600">
              Inaan noqonno hay'adda safarka ee ugu horreysa dalka, ee lagu kalsoonaan karo hababka casriga ah iyo adeegga hufan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-gold">
            <h3 className="text-xl font-bold text-brand-black mb-2">🚀 Dhibcahayaga (Mission)</h3>
            <p className="text-gray-600">
              Inaan macaamiishayada ka caawinno safarro ammaan ah oo raaxo leh iyadoo loo marayo maareyn dhakhso badan oo hufan.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-brand-black text-white p-8 rounded-xl border border-brand-gold/30">
          <h3 className="text-2xl font-bold mb-3">Diyaar Ma U Tahay Inaad Safarto?</h3>
          <p className="text-gray-300 mb-6">Nala soo xiriir ama foomka codsiga buuxi si aan hawshaada isla markiiba u bilaawno.</p>
          <Link href="/request" className="bg-brand-gold text-black font-bold px-6 py-3 rounded-md hover:bg-white transition">
            Codso Adeeg Hada
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

