// components/DocumentCard.tsx
import Link from 'next/link';

interface Document {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  icon: string;
}

interface DocumentCardProps {
  document: Document;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Link href={`/payment/${document.id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-2 transform h-full flex flex-col">
        {/* En-tête avec icône */}
        <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          <span className="text-7xl relative z-10 block transform group-hover:scale-110 transition-transform duration-300">
            {document.icon}
          </span>
        </div>

        {/* Contenu */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Catégorie */}
          <span className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3 w-fit">
            {document.category}
          </span>

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition line-clamp-2 min-h-[3.5rem]">
            {document.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {document.description}
          </p>

          {/* Prix et CTA */}
          <div className="mt-auto">
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500 mb-1">Téléchargement</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {document.price}€
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold group-hover:from-green-600 group-hover:to-green-700 transition shadow-md group-hover:shadow-lg">
                Consulter →
              </div>
            </div>

            {/* Badge gratuit */}
            <div className="mt-3 text-center bg-green-50 py-2 rounded-lg">
              <span className="text-xs text-green-700 font-bold flex items-center justify-center gap-1">
                <span>✓</span> Lecture en ligne gratuite
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}