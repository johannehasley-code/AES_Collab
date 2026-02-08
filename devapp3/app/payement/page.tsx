// app/payment/[documentId]/page.tsx
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import PaymentModal from '@/components/PaymentModal';
import Link from 'next/link';

// Base de données des documents
const documentsDatabase: Record<string, any> = {
  'javascript-guide': {
    title: 'Guide JavaScript Complet',
    description: 'Maîtrisez JavaScript de A à Z',
    price: 12,
    category: 'Programmation',
    icon: '💻',
    content: `
# Guide JavaScript Complet

## Introduction
JavaScript est le langage de programmation le plus utilisé au monde pour le développement web.

## Chapitre 1: Les Fondamentaux
Découvrez les bases de JavaScript : variables, types de données, opérateurs.

### Variables
- let : pour les variables réassignables
- const : pour les constantes
- var : ancien système (à éviter)

## Chapitre 2: Fonctions
Les fonctions sont au cœur de JavaScript.

### Fonctions fléchées
const add = (a, b) => a + b;

## Chapitre 3: Objets et Arrays
Manipulez des structures de données complexes.

## Chapitre 4: Async/Await
Maîtrisez la programmation asynchrone moderne.
    `,
  },
  'react-mastery': {
    title: 'React Mastery 2024',
    description: 'Devenez expert React',
    price: 15,
    category: 'Développement Web',
    icon: '⚛️',
    content: `
# React Mastery 2024

## Introduction à React
React est la bibliothèque JavaScript la plus populaire pour créer des interfaces utilisateur.

## Chapitre 1: Composants
Tout est composant dans React.

### Composants Fonctionnels
Les composants fonctionnels sont la norme moderne.

## Chapitre 2: Hooks
useState, useEffect, useContext, et plus.

## Chapitre 3: State Management
Redux, Context API, Zustand.

## Chapitre 4: Performance
React.memo, useMemo, useCallback.
    `,
  },
  'python-data-science': {
    title: 'Python pour Data Science',
    description: 'Analysez vos données avec Python',
    price: 18,
    category: 'Data Science',
    icon: '🐍',
    content: `
# Python pour Data Science

## Introduction
Python est le langage préféré des data scientists.

## Chapitre 1: NumPy
Calculs numériques ultra-rapides.

## Chapitre 2: Pandas
Manipulation de données tabulaires.

## Chapitre 3: Matplotlib & Seaborn
Visualisation de données.

## Chapitre 4: Machine Learning
Scikit-learn pour vos premiers modèles.
    `,
  },
  'ux-design-principles': {
    title: 'Principes UX Design',
    description: 'Créez des expériences exceptionnelles',
    price: 10,
    category: 'Design',
    icon: '🎨',
    content: `
# Principes UX Design

## Introduction
L'UX Design crée des expériences mémorables.

## Chapitre 1: Recherche Utilisateur
Comprenez vos utilisateurs.

## Chapitre 2: Wireframing
Esquissez vos idées.

## Chapitre 3: Prototyping
Testez avant de développer.

## Chapitre 4: Tests Utilisateurs
Validez vos designs.
    `,
  },
  'marketing-digital': {
    title: 'Marketing Digital Avancé',
    description: 'Stratégies qui fonctionnent',
    price: 14,
    category: 'Marketing',
    icon: '📈',
    content: `
# Marketing Digital Avancé

## Introduction
Le marketing digital transforme les businesses.

## Chapitre 1: SEO
Soyez trouvé sur Google.

## Chapitre 2: Content Marketing
Le contenu est roi.

## Chapitre 3: Social Media
Instagram, TikTok, LinkedIn.

## Chapitre 4: Email Marketing
ROI maximal avec l'email.
    `,
  },
  'ai-fundamentals': {
    title: 'Intelligence Artificielle',
    description: 'Comprenez l\'IA',
    price: 20,
    category: 'IA & ML',
    icon: '🤖',
    content: `
# Intelligence Artificielle

## Introduction
L'IA révolutionne notre monde.

## Chapitre 1: Machine Learning
Apprenez comment les machines apprennent.

## Chapitre 2: Deep Learning
Réseaux de neurones profonds.

## Chapitre 3: NLP
Traitement du langage naturel.

## Chapitre 4: Computer Vision
Analyse d'images et vidéos.
    `,
  },
  'blockchain-crypto': {
    title: 'Blockchain & Crypto',
    description: 'Technologie blockchain',
    price: 16,
    category: 'Technologie',
    icon: '⛓️',
    content: `
# Blockchain & Crypto

## Introduction
La blockchain décentralise le pouvoir.

## Chapitre 1: Bitcoin
La première cryptomonnaie.

## Chapitre 2: Ethereum
Smart contracts et DApps.

## Chapitre 3: DeFi
Finance décentralisée.

## Chapitre 4: NFTs
Actifs numériques uniques.
    `,
  },
  'mobile-dev-flutter': {
    title: 'Développement Mobile Flutter',
    description: 'Apps iOS et Android',
    price: 17,
    category: 'Mobile',
    icon: '📱',
    content: `
# Développement Mobile Flutter

## Introduction
Flutter permet de créer des apps natives.

## Chapitre 1: Widgets
Tout est widget dans Flutter.

## Chapitre 2: State Management
Provider, Riverpod, BLoC.

## Chapitre 3: Navigation
Routes et navigation.

## Chapitre 4: API Integration
Consommer des APIs REST.
    `,
  },
  'devops-kubernetes': {
    title: 'DevOps & Kubernetes',
    description: 'Automatisez vos déploiements',
    price: 19,
    category: 'DevOps',
    icon: '🚀',
    content: `
# DevOps & Kubernetes

## Introduction
DevOps accélère le développement.

## Chapitre 1: Docker
Conteneurisation d'applications.

## Chapitre 2: Kubernetes
Orchestration de conteneurs.

## Chapitre 3: CI/CD
Intégration et déploiement continus.

## Chapitre 4: Monitoring
Prometheus et Grafana.
    `,
  },
  'cybersecurity': {
    title: 'Cybersécurité Essentielle',
    description: 'Protégez vos systèmes',
    price: 22,
    category: 'Sécurité',
    icon: '🔒',
    content: `
# Cybersécurité Essentielle

## Introduction
La sécurité est primordiale.

## Chapitre 1: Cryptographie
Chiffrement et hashing.

## Chapitre 2: Authentication
OAuth, JWT, 2FA.

## Chapitre 3: Vulnerabilités
OWASP Top 10.

## Chapitre 4: Penetration Testing
Testez vos défenses.
    `,
  },
  'aws-cloud': {
    title: 'AWS Cloud Architect',
    description: 'Architectures cloud AWS',
    price: 21,
    category: 'Cloud',
    icon: '☁️',
    content: `
# AWS Cloud Architect

## Introduction
AWS est le leader du cloud.

## Chapitre 1: EC2
Serveurs virtuels élastiques.

## Chapitre 2: S3
Stockage d'objets scalable.

## Chapitre 3: Lambda
Computing serverless.

## Chapitre 4: Architecture
Best practices AWS.
    `,
  },
  'sql-databases': {
    title: 'SQL & Bases de Données',
    description: 'Maîtrisez SQL',
    price: 13,
    category: 'Databases',
    icon: '🗄️',
    content: `
# SQL & Bases de Données

## Introduction
Les bases de données stockent vos données.

## Chapitre 1: Requêtes SQL
SELECT, INSERT, UPDATE, DELETE.

## Chapitre 2: Jointures
INNER, LEFT, RIGHT, FULL JOIN.

## Chapitre 3: Indexation
Optimisez vos performances.

## Chapitre 4: Transactions
ACID et isolation.
    `,
  },
};

export default function PaymentPage() {
  const params = useParams();
  const documentId = params.documentId as string;
  const document = documentsDatabase[documentId];

  const [showPayment, setShowPayment] = useState(false);

  if (!document) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 p-8 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-12 border border-white/30 text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-white mb-4">Document introuvable</h1>
          <p className="text-white/90 mb-6">Ce document n'existe pas ou a été supprimé.</p>
          <Link 
            href="/" 
            className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  const handleDownload = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    alert(`✅ Paiement réussi ! Téléchargement de "${document.title}" en cours...`);
    setShowPayment(false);
  };

  const renderContent = () => {
    return document.content.split('\n').map((line: string, index: number) => {
      const trimmed = line.trim();
      
      if (trimmed === '') {
        return <div key={index} className="h-4"></div>;
      }
      
      if (trimmed.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            {trimmed.substring(2)}
          </h1>
        );
      }
      
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-800 mt-6 mb-3">
            {trimmed.substring(3)}
          </h2>
        );
      }
      
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-700 mt-4 mb-2">
            {trimmed.substring(4)}
          </h3>
        );
      }
      
      return (
        <p key={index} className="text-gray-700 mb-3 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 mb-6">
          <Link 
            href="/" 
            className="text-white/90 hover:text-white mb-6 inline-flex items-center gap-2 text-lg font-medium transition"
          >
            <span>←</span> Retour à l'accueil
          </Link>
          
          <div className="flex items-start gap-6 mb-4">
            <div className="text-6xl">{document.icon}</div>
            <div className="flex-1">
              <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                {document.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {document.title}
              </h1>
              <p className="text-xl text-white/90">
                {document.description}
              </p>
            </div>
          </div>
        </div>

        {/* Visualiseur de document */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>📄</span> Aperçu du document
            </h2>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg text-sm font-bold border border-green-400/30">
              ✓ Lecture gratuite
            </span>
          </div>
          
          {/* Zone de visualisation */}
          <div className="bg-white rounded-xl p-8 md:p-12 mb-6 shadow-xl min-h-[500px]">
            <div className="prose prose-lg max-w-none">
              {renderContent()}
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-500 mt-8">
              <p className="text-gray-700 font-medium flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span>
                  Vous consultez ce document gratuitement en ligne. 
                  Pour le télécharger et y accéder hors connexion à tout moment, 
                  cliquez sur le bouton de téléchargement ci-dessous.
                </span>
              </p>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📥</span>
              <span>Télécharger ({document.price}€)</span>
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white/20 backdrop-blur hover:bg-white/30 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg border border-white/30 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">👁️</span>
              <span>Continuer la lecture</span>
            </button>
          </div>
        </div>

        {/* Informations */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>ℹ️</span> Informations sur le document
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="text-white font-bold">Lecture en ligne</p>
                  <p className="text-white/80">Gratuite et illimitée</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="text-white font-bold">Téléchargement</p>
                  <p className="text-white/80">{document.price}€ - Paiement unique</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="text-white font-bold">Format</p>
                  <p className="text-white/80">PDF haute qualité</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="text-white font-bold">Sécurité</p>
                  <p className="text-white/80">Paiement 100% sécurisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de paiement */}
      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
          amount={document.price}
          documentTitle={document.title}
        />
      )}
    </main>
  );
}