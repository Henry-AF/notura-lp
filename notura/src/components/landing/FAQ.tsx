import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Notura é gratuito?",
    a: "Sim! O plano gratuito inclui todas as features essenciais para você começar. Planos pagos desbloqueiam IA avançada, armazenamento ilimitado e integrações premium.",
  },
  {
    q: "Meus dados são seguros?",
    a: "Com certeza. Usamos criptografia end-to-end e armazenamento na sua região. Seus dados nunca são usados para treinar modelos de IA sem sua permissão explícita.",
  },
  {
    q: "Como começar?",
    a: "Crie sua conta em 30 segundos, sem cartão de crédito. Você começa a capturar notas imediatamente — a IA entra em ação automaticamente.",
  },
  {
    q: "Funciona offline?",
    a: "Sim! O app móvel funciona completamente offline. Suas notas são salvas localmente e sincronizadas automaticamente quando você reconectar.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-violet-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-violet-50/50 transition-colors"
      >
        <span className="font-display text-base font-semibold text-gray-900 pr-4">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: isOpen ? "#6851FF" : "rgba(104,81,255,0.08)" }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: isOpen ? "#fff" : "#6851FF" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-violet-50 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(104,81,255,0.08)", color: "#6851FF" }}>
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas <span style={{ color: "#6851FF" }}>frequentes</span>
          </h2>
          <p className="text-lg text-gray-500">Tem alguma dúvida? A gente responde.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
