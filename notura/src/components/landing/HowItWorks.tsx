import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Cpu, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Você captura",
    desc: "Anote qualquer coisa: textos, links, áudios, imagens. De qualquer dispositivo, em qualquer momento.",
    dark: false,
    accent: "#6851FF",
  },
  {
    number: "02",
    icon: Cpu,
    title: "A IA processa",
    desc: "Notura categoriza, conecta e resume automaticamente. Sem esforço da sua parte.",
    dark: true,
    accent: "#fff",
  },
  {
    number: "03",
    icon: Search,
    title: "Você acessa",
    desc: "Encontre qualquer ideia em segundos, em qualquer dispositivo. Busca semântica inclusa.",
    dark: false,
    accent: "#6851FF",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(104,81,255,0.08)", color: "#6851FF" }}>
            Como funciona
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simples assim. <span style={{ color: "#6851FF" }}>Três passos.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Do caos de anotações ao conhecimento estruturado — automaticamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative p-8 rounded-3xl transition-transform hover:-translate-y-1 ${
                  step.dark ? "text-white" : "bg-white border border-violet-100"
                }`}
                style={step.dark ? { background: "linear-gradient(135deg, #6851FF 0%, #8B5CF6 100%)" } : {}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: step.dark ? "rgba(255,255,255,0.15)" : "rgba(104,81,255,0.08)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.dark ? "#fff" : "#6851FF" }} />
                  </div>
                  <span
                    className="text-5xl font-black opacity-20 font-display"
                    style={{ color: step.dark ? "#fff" : "#6851FF" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className={`font-display text-xl font-bold mb-3 ${step.dark ? "text-white" : "text-gray-900"}`}>
                  {step.title}
                </h3>
                <p className={`leading-relaxed text-sm ${step.dark ? "text-white/75" : "text-gray-500"}`}>
                  {step.desc}
                </p>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-violet-100 items-center justify-center shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="#6851FF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
