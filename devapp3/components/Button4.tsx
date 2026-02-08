// components/Button4.tsx
import Link from 'next/link';

export default function Button4() {
  return (
    <Link href="/button4" target="_blank">
      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-green-600 font-bold py-12 px-8 rounded-lg text-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-4 border-white/20 hover:scale-110 transform">
        Master 1
      </button>
    </Link>
  );
}