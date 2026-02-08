"use client";
import { BookOpen, GraduationCap, Menu, X, Home, FileText, Info, Library } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "#documents", label: "Documents", icon: FileText },
    { href: "#about", label: "À propos", icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
                AES Connect
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Plateforme éducative</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Library Badge */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
              <Library className="w-4 h-4" />
              <span className="text-sm font-semibold">Bibliothèque</span>
            </div>

            {/* User Profile */}
            <div className="hidden md:flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-800">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Étudiant</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                JD
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </a>
                );
              })}
              
              {/* Mobile Library Badge */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Bibliothèque</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Accédez à tous vos documents</p>
                </div>
              </div>

              {/* Mobile User Profile */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Étudiant · AES Connect</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;