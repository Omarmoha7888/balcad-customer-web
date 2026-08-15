export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400 py-8 border-t border-brand-gold/20 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-brand-gold font-semibold text-lg mb-2">Balcad Travel Agency</p>
        <p className="text-sm">Adeegyo safar oo hufan oo lagu kalsoonaan karo.</p>
        <p className="text-xs mt-4 text-gray-500">
          © {new Date().getFullYear()} Balcad Travel Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

