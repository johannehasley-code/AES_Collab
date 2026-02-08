// components/Button6.tsx
import Link from 'next/link';

export default function Button6() {
  return (
    <Link href="/button6" target="_blank">
      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-yellow-500 font-bold py-12 px-8 rounded-lg text-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-4 border-white/20 hover:scale-110 transform">
        Doctorat
      </button>
    </Link>
  );
}