import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Link2, Mic } from "lucide-react";

const AVATARS = [
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=22",
  "https://i.pravatar.cc/100?img=33",
  "https://i.pravatar.cc/100?img=44",
  "https://i.pravatar.cc/100?img=55",
];

const NOTE_CARDS = [
  {
    icon: "💡",
    title: "Ideia de produto",
    text: "Criar feature de busca semântica com embedding...",
    tag: "IA conectou 3 notas relacionadas",
    delay: 0.8,
    rotate: -3,
    x: "-15%",
    y: "10%",
  },
  {
    icon: "📋",
    title: "Reunião com cliente",
    text: "Decisões: lançar v2 em agosto, revisar preços...",
    tag: "Resumo automático gerado",
    delay: 1,
    rotate: 2,
    x: "55%",
    y: "5%",
  },
  {
    icon: "🎯",
    title: "OKR Q3",
    text: "Meta: 10k usuários ativos até setembro...",
    tag: "Vinculado a 7 tarefas",
    delay: 1.2,
    rotate: -1,
    x: "20%",
    y: "65%",
  },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(160deg, #F5F3FF 0%, #EDE9FE 45%, #FAF5FF 100%)" }}
    >
      {/* Blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none" style={{ background: "#6851FF" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: "#BA2BF2" }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh] py-16">

          {/* Left: Copy */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-sm font-medium"
              style={{ background: "rgba(104,81,255,0.08)", borderColor: "rgba(104,81,255,0.2)", color: "#6851FF" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              IA para gestão de conhecimento
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.05] text-gray-900 mb-6"
            >
              Capture ideias.{" "}
              <span style={{ color: "#6851FF" }}>A IA organiza</span>{" "}
              tudo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed"
            >
              Notura transforma anotações brutas em conhecimento estruturado — automaticamente, sem esforço.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(104,81,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#cta")}
                className="flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all"
                style={{ background: "linear-gradient(135deg, #6851FF 0%, #8B6FFF 100%)", boxShadow: "0 4px 16px rgba(104,81,255,0.35)" }}
              >
                Começar grátis <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#how")}
                className="flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-full text-base border-2 bg-white/60 backdrop-blur-sm transition-all"
                style={{ borderColor: "rgba(104,81,255,0.3)", color: "#6851FF" }}
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Ver demonstração
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">
                <span className="font-bold text-gray-900">+12.000 usuários</span>{" "}
                organizando melhor suas ideias
              </p>
            </motion.div>
          </div>

          {/* Right: Animated mockup */}
          <div className="relative hidden lg:flex items-center justify-center h-[480px]">
            {/* Central pane */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 bg-white rounded-2xl shadow-[0_20px_60px_rgba(104,81,255,0.15)] border border-violet-100 p-5 z-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: "#6851FF" }}>N</div>
                <span className="font-display font-bold text-sm text-gray-900">Notura</span>
                <div className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "rgba(104,81,255,0.1)", color: "#6851FF" }}>IA ativa</div>
              </div>
              <div className="space-y-2 mb-4">
                {["Reuniões de produto", "Pesquisa de mercado", "Ideias criativas"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl" style={{ background: i === 0 ? "rgba(104,81,255,0.06)" : "transparent" }}>
                    <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center text-xs">
                      {["📋", "🔍", "✨"][i]}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                    {i === 0 && <div className="ml-auto w-2 h-2 rounded-full animate-pulse" style={{ background: "#6851FF" }} />}
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl border border-violet-100" style={{ background: "rgba(104,81,255,0.03)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: "#6851FF" }} />
                  <span className="text-[11px] font-semibold" style={{ color: "#6851FF" }}>IA conectou 3 notas</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">Suas notas sobre "produto" e "mercado" se relacionam com o plano de lançamento Q3.</p>
              </div>
            </motion.div>

            {/* Floating note cards */}
            {NOTE_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: card.delay },
                  scale: { duration: 0.5, delay: card.delay },
                  y: {
                    delay: card.delay + 0.5,
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  position: "absolute",
                  left: card.x,
                  top: card.y,
                  rotate: card.rotate,
                }}
                className="w-48 bg-white rounded-xl p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-violet-100/80"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{card.icon}</span>
                  <span className="text-xs font-bold text-gray-800">{card.title}</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">{card.text}</p>
                <div className="px-2 py-1 rounded-full text-[10px] font-medium inline-flex items-center gap-1"
                  style={{ background: "rgba(104,81,255,0.08)", color: "#6851FF" }}>
                  <Sparkles className="w-2.5 h-2.5" />
                  {card.tag}
                </div>
              </motion.div>
            ))}

            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 1.4, duration: 1.2, ease: "easeInOut" }}
                d="M 120 140 Q 200 200 260 260"
                stroke="#6851FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ delay: 1.7, duration: 1, ease: "easeInOut" }}
                d="M 380 120 Q 340 180 300 240"
                stroke="#BA2BF2"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
    </section>
  );
}
