import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-brand-black border-b border-brand-gold/30 text-white px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo-da Shirkadda */}
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/images/logo.png" 
          alt="Balcad Travel Logo" 
          width={45} 
          height={45} 
          className="object-contain"
        />
        <span className="text-xl font-bold text-brand-gold tracking-wide">
          BALCAD <span className="text-white">TRAVEL</span>
        </span>
      </Link>

      {/* Menuyada */}
      <div className="space-x-6 hidden md:flex font-medium">
        <Link href="/" className="hover:text-brand-gold transition">Home</Link>
        <Link href="/services" className="hover:text-brand-gold transition">Adeegyada</Link>
        <Link href="/about" className="hover:text-brand-gold transition">Naga Soho</Link>
        <Link href="/contact" className="hover:text-brand-gold transition">Nala Soo Xiriir</Link>
      </div>

      {/* Button-ka Codsiga */}
      <Link href="/request" className="bg-brand-gold hover:bg-white hover:text-black text-black font-semibold px-4 py-2 rounded-md transition duration-300">
        Codso Adeeg
      </Link>
    </nav>
  );
}

