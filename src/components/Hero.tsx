import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-brand-black text-white py-20 px-6 text-center border-b border-brand-gold/30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Kala Safar <span className="text-brand-gold">Balcad Travel Agency</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Waxaan kuu meelmarinaynaa tigidhada duulimaadka, fiisooyinka, iyo huteellada ugu wanaagsan dalka iyo dibadda.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/services" 
            className="bg-brand-gold text-black font-bold px-6 py-3 rounded-md hover:bg-white transition duration-300"
          >
            Adeegyadayada
          </Link>
          <Link 
            href="/contact" 
            className="border border-brand-gold text-brand-gold font-bold px-6 py-3 rounded-md hover:bg-brand-gold hover:text-black transition duration-300"
          >
            Nala Soo Xiriir
          </Link>
        </div>
      </div>
    </section>
  );
}

