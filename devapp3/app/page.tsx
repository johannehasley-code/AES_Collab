// app/page.tsx
import Button1 from '@/components/Button1';
import Button2 from '@/components/Button2';
import Button3 from '@/components/Button3';
import Button4 from '@/components/Button4';
import Button5 from '@/components/Button5';
import Button6 from '@/components/Button6';
import DocumentCard from '@/components/DoxumentCard';
import Master1CoursesPage from '@/app/Master1/page';

export default function Home() {

      
  const documents = [
    {
      id: 'javascript-guide',
      title: 'Guide JavaScript Complet',
      description: 'Maîtrisez JavaScript de A à Z avec ce guide exhaustif incluant ES6+, async/await, et plus encore.',
      price: 12,
      category: 'Programmation',
      icon: '💻',
    },
    {
      id: 'react-mastery',
      title: 'React Mastery 2024',
      description: 'Devenez expert React avec hooks, context, Redux et les meilleures pratiques modernes.',
      price: 15,
      category: 'Développement Web',
      icon: '⚛️',
    },
    {
      id: 'python-data-science',
      title: 'Python pour Data Science',
      description: 'Analysez vos données avec Python, pandas, numpy et créez des visualisations impressionnantes.',
      price: 18,
      category: 'Data Science',
      icon: '🐍',
    },
    {
      id: 'ux-design-principles',
      title: 'Principes UX Design',
      description: 'Créez des expériences utilisateur exceptionnelles basées sur la psychologie et le design thinking.',
      price: 10,
      category: 'Design',
      icon: '🎨',
    },
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Avancé',
      description: 'SEO, SEM, réseaux sociaux, email marketing - toutes les stratégies qui fonctionnent en 2024.',
      price: 14,
      category: 'Marketing',
      icon: '📈',
    },
    {
      id: 'ai-fundamentals',
      title: 'Intelligence Artificielle',
      description: 'Comprenez l\'IA, le machine learning et le deep learning avec des exemples pratiques.',
      price: 20,
      category: 'IA & ML',
      icon: '🤖',
    },
    {
      id: 'blockchain-crypto',
      title: 'Blockchain & Crypto',
      description: 'Découvrez la technologie blockchain, les smart contracts et l\'écosystème crypto.',
      price: 16,
      category: 'Technologie',
      icon: '⛓️',
    },
    {
      id: 'mobile-dev-flutter',
      title: 'Développement Mobile Flutter',
      description: 'Créez des apps iOS et Android magnifiques avec un seul code source en Flutter.',
      price: 17,
      category: 'Mobile',
      icon: '📱',
    },
    {
      id: 'devops-kubernetes',
      title: 'DevOps & Kubernetes',
      description: 'Automatisez vos déploiements, gérez vos conteneurs et scalez vos applications.',
      price: 19,
      category: 'DevOps',
      icon: '🚀',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersécurité Essentielle',
      description: 'Protégez vos systèmes contre les menaces avec les techniques de sécurité modernes.',
      price: 22,
      category: 'Sécurité',
      icon: '🔒',
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Architect',
      description: 'Concevez et déployez des architectures cloud scalables et sécurisées sur AWS.',
      price: 21,
      category: 'Cloud',
      icon: '☁️',
    },
    {
      id: 'sql-databases',
      title: 'SQL & Bases de Données',
      description: 'Maîtrisez SQL, les bases de données relationnelles et l\'optimisation de requêtes.',
      price: 13,
      category: 'Databases',
      icon: '🗄️',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section avec les 6 boutons */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Cours et supports pédagogiques
            </h1>
            <p className="text-xl text-white/90">
              Accédez à des ressources premium pour booster votre carrière
            </p>
          </div>

          {/* Grille de 6 boutons */}
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {/* Première ligne - 3 boutons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button1 />
              <Button2 />
              <Button3 />
            </div>

            {/* Deuxième ligne - 3 boutons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button4 />
              <Button5 />
              <Button6 />
            </div>
          </div>
        </div>
      </section>

      {/* Section Bibliothèque de Documents */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              📚 Bibliothèque de Documents Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consultez gratuitement en ligne ou téléchargez pour un accès hors connexion
            </p>
          </div>

          {/* Grille des documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              💡 Tous les documents sont consultables gratuitement !
            </h3>
            <p className="text-gray-700 text-lg">
              Le téléchargement nécessite un paiement unique pour un accès permanent
            </p>
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Plateforme d'Apprentissage. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}