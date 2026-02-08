// components/PaymentModal.tsx
'use client';

import { useState } from 'react';

interface PaymentModalProps {
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
  documentTitle?: string;
}

export default function PaymentModal({ 
  onClose, 
  onSuccess, 
  amount,
  documentTitle = 'Document'
}: PaymentModalProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulation du traitement du paiement
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-slide-up">
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none transition"
            aria-label="Fermer"
          >
            ×
          </button>

          {/* En-tête */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">💳</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Paiement sécurisé
            </h2>
            <p className="text-gray-600 mb-2">
              {documentTitle}
            </p>
            <p className="text-sm text-gray-500">
              Montant : <strong className="text-purple-600 text-2xl">{amount.toFixed(2)} €</strong>
            </p>
          </div>

          {/* Formulaire de paiement */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Numéro de carte */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Numéro de carte
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-gray-900 text-lg transition"
              />
            </div>

            {/* Nom sur la carte */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Nom sur la carte
              </label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value.toUpperCase())}
                placeholder="JEAN DUPONT"
                required
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-gray-900 uppercase text-lg transition"
              />
            </div>

            {/* Date d'expiration et CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Expiration
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-gray-900 text-lg transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="123"
                  maxLength={4}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none text-gray-900 text-lg transition"
                />
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
                disabled={processing}
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={processing}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Traitement...
                  </span>
                ) : (
                  `Payer ${amount.toFixed(2)} €`
                )}
              </button>
            </div>
          </form>

          {/* Sécurité */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 text-gray-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium">
                Paiement 100% sécurisé par cryptage SSL
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}