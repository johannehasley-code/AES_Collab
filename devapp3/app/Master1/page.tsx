// app/master1-courses/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import PaymentModal from '@/components/PayementModal';

interface Course {
  id: string;
  title: string;
  description: string;
  professor: string;
  semester: string;
  pages: number;
  price: number;
  subject: string;
  pdfUrl: string;
}

export default function Master1CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  const courses: Course[] = [
    {
      id: 'algo-avancee',
      title: 'Algorithmique Avancée',
      description: 'Structures de données avancées, algorithmes de tri, graphes, programmation dynamique',
      professor: 'Dr. Martin Dupont',
      semester: 'Semestre 1',
      pages: 120,
      price: 8,
      subject: 'Informatique',
      pdfUrl: '/courses/algo-avancee.pdf',
    },
    {
      id: 'bases-donnees',
      title: 'Bases de Données Relationnelles',
      description: 'SQL avancé, normalisation, transactions, optimisation de requêtes, NoSQL',
      professor: 'Prof. Sophie Bernard',
      semester: 'Semestre 1',
      pages: 95,
      price: 7,
      subject: 'Informatique',
      pdfUrl: '/courses/bases-donnees.pdf',
    },
    {
      id: 'reseaux-informatiques',
      title: 'Réseaux Informatiques',
      description: 'Modèle OSI, TCP/IP, routage, protocoles, sécurité réseau',
      professor: 'Dr. Ahmed Karim',
      semester: 'Semestre 1',
      pages: 110,
      price: 8,
      subject: 'Réseaux',
      pdfUrl: '/courses/reseaux.pdf',
    },
    {
      id: 'dev-web-avance',
      title: 'Développement Web Avancé',
      description: 'React, Node.js, APIs REST, authentification, déploiement',
      professor: 'Prof. Claire Moreau',
      semester: 'Semestre 1',
      pages: 135,
      price: 9,
      subject: 'Développement',
      pdfUrl: '/courses/dev-web.pdf',
    },
    {
      id: 'ia-machine-learning',
      title: 'Intelligence Artificielle & ML',
      description: 'Apprentissage supervisé, non-supervisé, réseaux de neurones, deep learning',
      professor: 'Dr. Jean-Pierre Laurent',
      semester: 'Semestre 2',
      pages: 150,
      price: 10,
      subject: 'IA',
      pdfUrl: '/courses/ia-ml.pdf',
    },
    {
      id: 'genie-logiciel',
      title: 'Génie Logiciel',
      description: 'Méthodologies Agile, UML, tests, CI/CD, architecture logicielle',
      professor: 'Prof. Nathalie Roux',
      semester: 'Semestre 2',
      pages: 105,
      price: 7,
      subject: 'Développement',
      pdfUrl: '/courses/genie-logiciel.pdf',
    },
    {
      id: 'systemes-exploitation',
      title: 'Systèmes d\'Exploitation',
      description: 'Processus, threads, mémoire, système de fichiers, Linux',
      professor: 'Dr. Thomas Petit',
      semester: 'Semestre 2',
      pages: 125,
      price: 8,
      subject: 'Systèmes',
      pdfUrl: '/courses/systemes.pdf',
    },
    {
      id: 'securite-info',
      title: 'Sécurité Informatique',
      description: 'Cryptographie, sécurité web, pentest, vulnérabilités, OWASP',
      professor: 'Prof. Vincent Durand',
      semester: 'Semestre 2',
      pages: 115,
      price: 9,
      subject: 'Sécurité',
      pdfUrl: '/courses/securite.pdf',
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      description: 'AWS, Azure, Docker, Kubernetes, serverless, microservices',
      professor: 'Dr. Isabelle Blanc',
      semester: 'Semestre 2',
      pages: 140,
      price: 10,
      subject: 'Cloud',
      pdfUrl: '/courses/cloud.pdf',
    },
    {
      id: 'big-data',
      title: 'Big Data & Analytics',
      description: 'Hadoop, Spark, traitement distribué, data warehousing',
      professor: 'Prof. Marc Fontaine',
      semester: 'Semestre 2',
      pages: 130,
      price: 9,
      subject: 'Data',
      pdfUrl: '/courses/big-data.pdf',
    },
    {
      id: 'mobile-dev',
      title: 'Développement Mobile',
      description: 'Android, iOS, Flutter, React Native, design mobile',
      professor: 'Dr. Laura Martinez',
      semester: 'Semestre 2',
      pages: 120,
      price: 8,
      subject: 'Mobile',
      pdfUrl: '/courses/mobile.pdf',
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Cryptomonnaies',
      description: 'Bitcoin, Ethereum, smart contracts, DeFi, NFTs',
      professor: 'Prof. Antoine Rousseau',
      semester: 'Semestre 2',
      pages: 100,
      price: 8,
      subject: 'Blockchain',
      pdfUrl: '/courses/blockchain.pdf',
    },
  ];

  const handleDownload = (course: Course) => {
    setSelectedCourse(course);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    if (selectedCourse) {
      alert(`✅ Téléchargement du cours "${selectedCourse.title}" en cours...`);
      setShowPayment(false);
      setSelectedCourse(null);
    }
  };

  const handleViewOnline = (course: Course) => {
    alert(`📖 Ouverture du cours "${course.title}" en mode lecture...`);
  };

  const subjectColors: Record<string, string> = {
    'Informatique': 'bg-blue-100 text-blue-700',
    'Réseaux': 'bg-purple-100 text-purple-700',
    'Développement': 'bg-green-100 text-green-700',
    'IA': 'bg-red-100 text-red-700',
    'Systèmes': 'bg-orange-100 text-orange-700',
    'Sécurité': 'bg-pink-100 text-pink-700',
    'Cloud': 'bg-cyan-100 text-cyan-700',
    'Data': 'bg-indigo-100 text-indigo-700',
    'Mobile': 'bg-teal-100 text-teal-700',
    'Blockchain': 'bg-yellow-100 text-yellow-700',
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700">
      {/* Header */}
      <section className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link 
            href="/" 
            className="text-white/90 hover:text-white mb-4 inline-flex items-center gap-2 text-lg font-medium transition"
          >
            <span>←</span> Retour à l'accueil
          </Link>
          
          <div className="mt-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Supports de Cours
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Accédez à tous les supports de cours PDF de votre Niveau. 
              
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">{courses.length}</div>
              <div className="text-white/90 font-medium">Cours disponibles</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <div className="text-white/90 font-medium">Semestres</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90 font-medium">Lecture gratuite</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">PDF</div>
              <div className="text-white/90 font-medium">Haute qualité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cours Grid */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Semestre 1 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">Semestre 1</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.filter(c => c.semester === 'Semestre 1').map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 transform"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>
                    <div className="text-5xl mb-2 relative z-10 transform group-hover:scale-110 transition">
                      📄
                    </div>
                    <div className="text-white font-bold text-sm relative z-10">
                      {course.pages} pages
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${subjectColors[course.subject]}`}>
                        {course.subject}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4">
                      👨‍🏫 {course.professor}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewOnline(course)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm"
                      >
                        📖 Consulter en ligne
                      </button>
                      <button
                        onClick={() => handleDownload(course)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-center gap-2"
                      >
                        <span>📥 Télécharger</span>
                        <span className="text-xs">({course.price}€)</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semestre 2 */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg">Semestre 2</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.filter(c => c.semester === 'Semestre 2').map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 transform"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>
                    <div className="text-5xl mb-2 relative z-10 transform group-hover:scale-110 transition">
                      📄
                    </div>
                    <div className="text-white font-bold text-sm relative z-10">
                      {course.pages} pages
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${subjectColors[course.subject]}`}>
                        {course.subject}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4">
                      👨‍🏫 {course.professor}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewOnline(course)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm"
                      >
                        📖 Consulter en ligne
                      </button>
                      <button
                        onClick={() => handleDownload(course)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-center gap-2"
                      >
                        <span>📥 Télécharger</span>
                        <span className="text-xs">({course.price}€)</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            💡 Comment ça marche ?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl mb-3">👀</div>
              <h4 className="font-bold mb-2">1. Consultez gratuitement</h4>
              <p className="text-sm text-white/90">
                Lisez tous les cours en ligne sans payer
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💳</div>
              <h4 className="font-bold mb-2">2. Payez si besoin</h4>
              <p className="text-sm text-white/90">
                Téléchargez uniquement ce dont vous avez besoin
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold mb-2">3. Étudiez partout</h4>
              <p className="text-sm text-white/90">
                Accédez à vos PDF hors connexion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedCourse && (
        <PaymentModal
          onClose={() => {
            setShowPayment(false);
            setSelectedCourse(null);
          }}
          onSuccess={handlePaymentSuccess}
          amount={selectedCourse.price}
          documentTitle={selectedCourse.title}
        />
      )}
    </main>
  );
}