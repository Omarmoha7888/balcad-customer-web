import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-brand-black border-b border-brand-gold/30 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Balcad Travel" width={40} height={40} className="object-contain" />
          <span className="text-xl font-bold text-white">Balcad <span className="text-brand-gold">Travel</span></span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-200">
          <Link href="/" className="hover:text-brand-gold transition">Poga Sare</Link>
          <Link href="/services" className="hover:text-brand-gold transition">Adeegyada</Link>
          <Link href="/about" className="hover:text-brand-gold transition">Naga Soho</Link>
          <Link href="/contact" className="hover:text-brand-gold transition">Nala Soo Xiriir</Link>
        </div>
      </div>
    </nav>
  );
}

