import React from "react";
import { Link } from "wouter";
import { Sparkles } from "lucide-react";

const links = {
  Produto: ["Recursos", "Preços", "Changelog", "Status"],
  Empresa: ["Blog", "Sobre", "Carreiras", "Contato"],
  Integrar: ["API", "Obsidian", "Notion", "Documentação"],
  Legal: ["Privacidade", "Termos", "Cookies"],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #6851FF 0%, #9B7AFF 100%)" }}>
                N
              </div>
              <span className="font-display font-bold text-white text-lg">Notura</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-[180px]">
              Pense melhor, lembre de tudo.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "gh"].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-sm font-semibold text-white mb-4">{cat}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 Notura. Todos os direitos reservados. Feito com ♥ no Brasil.
          </p>
          <div className="flex items-center gap-2 text-sm" style={{ color: "#6851FF" }}>
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Notura — Pense melhor, lembre de tudo.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
