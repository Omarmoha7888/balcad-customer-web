import Link from "next/link";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-gold flex flex-col justify-between">
      <div>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-brand-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <Link 
        href="/contact" 
        className="inline-block text-brand-black font-semibold hover:text-brand-gold text-sm transition duration-300"
      >
        Faahfaahin Dheeraad Ah &rarr;
      </Link>
    </div>
  );
}

