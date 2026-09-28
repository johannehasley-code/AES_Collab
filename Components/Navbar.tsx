"use client";
import { BookOpen, GraduationCap, Menu, X, Home, FileText, Info, Library, Shield } from "lucide-react";
import { useState } from "react";
import  Link from "next/link";

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
              const className = "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200";
              return item.href.startsWith("#") ? (
                <a key={item.label} href={item.href} className={className}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={className}>
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Library Badge */}
            <a
              href="#documents"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-colors"
            >
              <Library className="w-4 h-4" />
              <span className="text-sm font-semibold">Bibliothèque</span>
            </a>

            {/* Admin Link */}
            <Link
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Admin</span>
            </Link>

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
                const className = "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors";
                return item.href.startsWith("#") ? (
                  <a key={item.label} href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Library Badge */}
              <a
                href="#documents"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Bibliothèque</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Accédez à tous vos documents</p>
                </div>
              </a>

              {/* Mobile Admin Link */}
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="w-5 h-5" />
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;