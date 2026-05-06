import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const cases = [
  {
    emoji: "💼",
    title: "Reuniões de trabalho",
    desc: "Capture decisões e tarefas automaticamente. Nunca mais perca o que foi combinado.",
    gradient: "linear-gradient(135deg, #6851FF 0%, #9B7AFF 100%)",
  },
  {
    emoji: "📚",
    title: "Estudos e pesquisa",
    desc: "Organize materiais, artigos e insights em uma base de conhecimento pesquisável.",
    gradient: "linear-gradient(135deg, #BA2BF2 0%, #D47AFF 100%)",
  },
  {
    emoji: "🗓️",
    title: "Planejamento pessoal",
    desc: "Objetivos, projetos e tarefas conectados e organizados pela IA.",
    gradient: "linear-gradient(135deg, #E43790 0%, #F47AB5 100%)",
  },
  {
    emoji: "🎨",
    title: "Projetos criativos",
    desc: "Brainstorms, referências e ideias criativas que se conectam automaticamente.",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
  },
  {
    emoji: "🎓",
    title: "Aulas e cursos",
    desc: "Transcreva aulas, gere resumos e crie flashcards automaticamente.",
    gradient: "linear-gradient(135deg, #6851FF 0%, #BA2BF2 100%)",
  },
  {
    emoji: "📖",
    title: "Leitura e curadoria",
    desc: "Salve artigos, highlights de livros e links — organizados e conectados.",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #E43790 100%)",
  },
];

export function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="usecases" className="py-24 md:py-32" style={{ background: "#F5F3FF" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(104,81,255,0.1)", color: "#6851FF" }}>
            Casos de uso
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Para cada <span style={{ color: "#6851FF" }}>tipo de mente</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            Notura se adapta ao seu jeito de pensar e trabalhar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl border border-violet-100 overflow-hidden shadow-[0_1px_3px_rgba(104,81,255,0.06)] hover:shadow-[0_12px_32px_rgba(104,81,255,0.14)] transition-shadow"
            >
              {/* Gradient image area */}
              <div
                className="h-36 flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: c.gradient }}
              >
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 drop-shadow-lg"
                >
                  {c.emoji}
                </motion.span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{c.desc}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: "#6851FF" }}>
                    Explorar <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors">
                    <Play className="w-3.5 h-3.5" fill="currentColor" /> Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
