import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PromptveilLogo } from './Logo';
import {
  Terminal,
  Puzzle,
  BookOpen,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Terminal },
    { name: 'Scanner', path: '/scanner', icon: Terminal },
    { name: 'Extension', path: '/extension', icon: Puzzle },
    { name: 'Docs', path: '/docs', icon: BookOpen },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo (New Split Shield) */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <PromptveilLogo className="w-10 h-10 transition-transform group-hover:scale-105 drop-shadow-sm" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl leading-none tracking-tight text-slate-900 dark:text-white">
                Promptveil
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                AI Injection Guard
              </span>
            </div>
          </Link>

          {/* ALL Buttons Grouped Together on Far Right */}
          <div className="flex items-center gap-2 lg:gap-2.5 shrink-0 flex-nowrap">

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-sm sm:text-base font-semibold whitespace-nowrap transition-colors ${active
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/80'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors shrink-0"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Sign in & Sign up Buttons */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <Link
                to="/signin"
                className="px-3.5 py-1.5 rounded-xl text-sm sm:text-base font-semibold border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 whitespace-nowrap"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 rounded-xl text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors border border-transparent shadow-none shrink-0 whitespace-nowrap"
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold ${active
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <Link
              to="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2.5 rounded-xl text-base"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-xl text-base"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
