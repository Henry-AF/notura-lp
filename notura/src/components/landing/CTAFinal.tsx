import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-24 md:py-32" style={{ background: "#F5F3FF" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "linear-gradient(135deg, #6851FF 0%, #8B5CF6 50%, #BA2BF2 100%)" }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-[60px]" style={{ background: "#fff", transform: "translate(-30%, -30%)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-[80px]" style={{ background: "#E43790", transform: "translate(20%, 30%)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Comece hoje, grátis
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Pronto para transformar
              <br />suas anotações?
            </h2>

            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              Junte-se a milhares de pessoas que já pensam melhor com Notura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl"
                style={{ color: "#6851FF" }}
              >
                Criar conta grátis <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-full border-2 border-white/40 text-white transition-all"
              >
                Falar com o time
              </motion.button>
            </div>

            <p className="mt-6 text-white/50 text-sm">
              Sem cartão de crédito · Setup em 30 segundos · Cancele quando quiser
            </p>

            {/* Social proof */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[11, 22, 33, 44, 55].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="" className="w-8 h-8 rounded-full border-2 border-white/40 object-cover" />
                ))}
              </div>
              <p className="text-white/70 text-sm font-medium">
                +12.000 usuários confiam na Notura
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
