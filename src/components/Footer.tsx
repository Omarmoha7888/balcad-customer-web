import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400 py-8 px-6 border-t border-brand-gold/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Balcad Travel Agency. Dhamaan xaqqa waa la dhowray.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-brand-gold">Naga Soho</Link>
          <Link href="/services" className="hover:text-brand-gold">Adeegyada</Link>
          <Link href="/contact" className="hover:text-brand-gold">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

