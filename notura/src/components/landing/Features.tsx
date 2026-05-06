import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Network, Search, Languages, RefreshCw, Download } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Organização automática",
    desc: "Sem pastas, sem tags manuais. A IA entende o contexto de cada nota e organiza tudo por você.",
    color: "#6851FF",
    bg: "rgba(104,81,255,0.08)",
  },
  {
    icon: Network,
    title: "Conexões inteligentes",
    desc: "Descubra relações entre notas que você não sabia que existiam. A IA mapeia seu conhecimento.",
    color: "#BA2BF2",
    bg: "rgba(186,43,242,0.08)",
  },
  {
    icon: Search,
    title: "Busca semântica",
    desc: "Encontre pelo significado, não pela palavra exata. Pergunte em linguagem natural.",
    color: "#6851FF",
    bg: "rgba(104,81,255,0.08)",
  },
  {
    icon: Languages,
    title: "Tradução automática",
    desc: "Capture em qualquer idioma, acesse em português. A IA traduz preservando o contexto.",
    color: "#E43790",
    bg: "rgba(228,55,144,0.08)",
  },
  {
    icon: RefreshCw,
    title: "Sincronização em tempo real",
    desc: "Todos os dispositivos, sempre atualizados. Comece no celular, continue no desktop.",
    color: "#6851FF",
    bg: "rgba(104,81,255,0.08)",
  },
  {
    icon: Download,
    title: "Exportação flexível",
    desc: "Markdown, PDF, Notion, Obsidian e mais. Seus dados sempre portáteis e acessíveis.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 md:py-32" style={{ background: "#F5F3FF" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(104,81,255,0.1)", color: "#6851FF" }}>
            Recursos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para{" "}
            <span style={{ color: "#6851FF" }}>pensar melhor</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ferramentas de IA que trabalham em segundo plano para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-7 bg-white rounded-2xl border border-violet-100/80 shadow-[0_1px_3px_rgba(104,81,255,0.08)] hover:shadow-[0_8px_24px_rgba(104,81,255,0.12)] transition-shadow cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: f.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
