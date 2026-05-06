import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scroll = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-violet-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{ background: "linear-gradient(135deg, #6851FF 0%, #9B7AFF 100%)" }}>
            N
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-gray-900">
            Notura
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <button className="flex items-center gap-1 hover:text-violet-700 transition-colors" onClick={() => scroll("#features")}>
            Produto <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="hover:text-violet-700 transition-colors" onClick={() => scroll("#features")}>Recursos</button>
          <button className="hover:text-violet-700 transition-colors" onClick={() => scroll("#faq")}>Preços</button>
          <button className="hover:text-violet-700 transition-colors" onClick={() => scroll("#usecases")}>Blog</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-violet-700 transition-colors px-3 py-2">
            Entrar
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scroll("#cta")}
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full shadow-lg transition-all"
            style={{ background: "linear-gradient(135deg, #6851FF 0%, #8B6FFF 100%)", boxShadow: "0 4px 14px rgba(104,81,255,0.35)" }}
          >
            Criar conta
          </motion.button>
        </div>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-violet-100 overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-2 text-sm font-medium">
              {[["Produto", "#features"], ["Recursos", "#features"], ["Preços", "#faq"], ["Blog", "#usecases"]].map(([label, id]) => (
                <button key={id} onClick={() => scroll(id)} className="text-left text-gray-600 py-2.5 border-b border-gray-100">
                  {label}
                </button>
              ))}
              <button
                onClick={() => scroll("#cta")}
                className="mt-3 w-full text-white font-semibold py-3 rounded-full"
                style={{ background: "linear-gradient(135deg, #6851FF 0%, #8B6FFF 100%)" }}
              >
                Criar conta grátis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
