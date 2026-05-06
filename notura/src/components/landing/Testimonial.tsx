import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users } from "lucide-react";

export function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos usuários adoram.{" "}
            <span style={{ color: "#6851FF" }}>Experimente você também!</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            Mais de 12.000 pessoas já transformaram a forma como capturam e organizam conhecimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl border border-violet-100 shadow-[0_4px_40px_rgba(104,81,255,0.1)]" style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)" }}>
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg" style={{ background: "linear-gradient(135deg, #6851FF 0%, #8B5CF6 100%)" }}>
              <Users className="w-4 h-4" />
              +12.000 usuários ativos
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="font-display text-xl md:text-2xl font-medium text-gray-800 leading-relaxed text-center mb-8">
              "Notura mudou completamente como eu processo informação. Antes eu perdia horas procurando anotações. Agora a IA faz isso por mim."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Rafael M."
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900 font-display">Rafael M.</p>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>

            {/* Mini testimonials grid */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              {[
                { avatar: "https://i.pravatar.cc/100?img=20", text: "Incrível para estudos!" },
                { avatar: "https://i.pravatar.cc/100?img=31", text: "Nunca perco uma ideia." },
                { avatar: "https://i.pravatar.cc/100?img=42", text: "Produtividade 3x maior." },
              ].map((t, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-3.5 border border-violet-100 text-center">
                  <img src={t.avatar} alt="" className="w-8 h-8 rounded-full mx-auto mb-2 object-cover" />
                  <p className="text-xs font-medium text-gray-600">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
