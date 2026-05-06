import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Star,
  Clock,
  Zap,
  CheckCircle2,
  Bot,
  Sparkles,
  TrendingUp,
  Target,
  Mic,
  FileText,
  MessageSquare,
  Calendar as CalendarIcon,
  Play,
  Workflow,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function NoturaLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? "gap-2.5" : "gap-3"}`}>
      <div
        className={`flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#5743f6_0%,#6f4cff_100%)] text-white shadow-[0_10px_30px_rgba(91,68,255,0.22)] ${compact ? "h-9 w-9" : "h-11 w-11"}`}
      >
        <svg
          viewBox="0 0 44 44"
          aria-hidden="true"
          className={compact ? "h-5 w-5" : "h-6 w-6"}
          fill="none"
        >
          <rect x="0" y="0" width="44" height="44" rx="14" fill="transparent" />
          <rect x="9" y="22" width="3.2" height="9" rx="1.6" fill="white" fillOpacity="0.92" />
          <rect x="14.8" y="16" width="3.2" height="15" rx="1.6" fill="white" />
          <rect x="20.6" y="11" width="3.2" height="20" rx="1.6" fill="white" fillOpacity="0.88" />
          <rect x="26.4" y="16" width="3.2" height="15" rx="1.6" fill="white" />
          <rect x="32.2" y="22" width="3.2" height="9" rx="1.6" fill="white" fillOpacity="0.92" />
        </svg>
      </div>
      <span
        className={`font-display font-bold tracking-tight text-foreground ${compact ? "text-[1.375rem] leading-none" : "text-[1.65rem] leading-none"}`}
      >
        Notura
      </span>
    </div>
  );
}

const socialProofItems = [
  {
    quote:
      "Antes eu passava quase 1 hora revisando gravações. Agora o resumo chega no WhatsApp antes de eu sair da call.",
    name: "Mariana Costa",
    role: "Gerente de Produto",
    company: "Conta Azul",
  },
  {
    quote:
      "A maior mudança foi operacional: ninguém mais esquece decisão, dono ou prazo depois da reunião.",
    name: "Lucas Ferreira",
    role: "Head de Operações",
    company: "Layer Up",
  },
  {
    quote:
      "A Notura tirou o trabalho invisível da rotina do time. A reunião termina e a execução já começa.",
    name: "Fernanda Lima",
    role: "Diretora Comercial",
    company: "PipeDash",
  },
];

const faqItems = [
  {
    question: "Minha reunião fica salva? Quem tem acesso ao áudio?",
    answer:
      "A Notura processa o conteúdo com controles de acesso e fluxo orientado a privacidade. O resumo final é entregue no WhatsApp e o acesso operacional fica restrito aos responsáveis autorizados.",
  },
  {
    question: "Funciona com Google Meet, Zoom, Teams e ligações normais?",
    answer:
      "Sim. O fluxo foi desenhado para equipes que usam as principais plataformas de reunião do mercado, incluindo Google Meet, Zoom e Microsoft Teams.",
  },
  {
    question: "O resumo é enviado automaticamente ou preciso acionar?",
    answer:
      "O envio é automático. A reunião termina, a IA organiza decisões e próximos passos, e o resumo estruturado segue direto para o WhatsApp configurado.",
  },
  {
    question: "Como o WhatsApp recebe o resumo? Precisa instalar algo?",
    answer:
      "Não precisa instalar um app extra para ler o resumo. A experiência é centrada em receber a mensagem pronta no WhatsApp, com tarefas e decisões já organizadas.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. Todos os planos podem ser cancelados quando quiser e o plano pago ainda conta com garantia de 7 dias para reduzir risco na primeira compra.",
  },
];

function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const updateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentVal = from + (to - from) * ease;
      setValue(currentVal);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setValue(to);
      }
    };
    animationFrame = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, from, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimento", href: "#depoimento" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="page-shell flex items-center justify-between h-16 md:h-[4.5rem]">
        <Link href="/" className="shrink-0">
          <NoturaLogo compact />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Entrar
          </Link>
          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-9 px-5 text-sm"
            onClick={() => scrollTo("#cta")}
          >
            Receber meu primeiro resumo grátis
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="page-shell pb-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="rounded-full bg-primary text-white mt-2"
                onClick={() => scrollTo("#cta")}
              >
                Receber meu primeiro resumo grátis
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center pt-28 pb-18 md:pt-44 md:pb-28 min-h-[calc(100svh-4rem)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="page-shell relative z-10 flex flex-col items-center text-center"
      >
        <Badge
          variant="outline"
          className="mb-8 rounded-full px-4 py-1.5 border-primary/30 text-primary bg-primary/5 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Mais de 1.200 reuniões resumidas esta semana
        </Badge>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-medium text-foreground">4.9</span>
            <span>87 avaliações</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4 text-primary" />
            Resumo enviado em segundos no WhatsApp
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-5xl">
          Nunca mais perca o que foi decidido na reunião.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          A Notura escuta sua reunião, identifica as decisões e manda os pontos
          principais direto no WhatsApp, sem você precisar fazer nada.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <Button
            size="lg"
            className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 text-base font-semibold group"
            onClick={() => {
              const el = document.querySelector("#cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Receber meu primeiro resumo grátis
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-border"
            onClick={() => {
              const el = document.querySelector("#como-funciona");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play className="mr-2 w-4 h-4" fill="currentColor" />
            Ver em ação
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Grátis para começar · Sem cartão de crédito · Funciona com Zoom, Google Meet e Teams
        </p>

        <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Sem cartão de crédito
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Setup em 5 minutos
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Cancele quando quiser
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 hidden lg:flex items-center gap-3 p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border shadow-2xl"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Resumo gerado</p>
          <p className="text-xs text-muted-foreground">Há 2 minutos</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 hidden lg:flex items-center gap-3 p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border shadow-2xl"
      >
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">5 tarefas criadas</p>
          <p className="text-xs text-muted-foreground">Enviadas p/ WhatsApp</p>
        </div>
      </motion.div>
    </section>
  );
}

function ComparisonSection() {
  const semNotura = [
    { time: "09:00", title: "Reunião de Alinhamento", duration: "1h 30m", desc: "Anotações espalhadas em 3 docs diferentes" },
    { time: "10:30", title: "Escrever Ata", duration: "45m", desc: "Tentando lembrar o que foi decidido" },
    { time: "14:00", title: "Reunião com Cliente", duration: "1h", desc: "Foco dividido entre ouvir e anotar" },
    { time: "15:00", title: "Follow-up", duration: "30m", desc: "Enviando mensagens manuais cobrando status" },
  ];
  const comNotura = [
    { time: "09:00", title: "Reunião de Alinhamento", duration: "45m", desc: "Foco total na conversa", type: "meeting" },
    { time: "09:45", title: "Resumo + Tarefas geradas", duration: "Instantâneo", desc: "Enviado direto pro WhatsApp do time", type: "ai" },
    { time: "10:00", title: "Trabalho Profundo", duration: "2h 30m", desc: "Executando o que realmente importa", type: "work" },
    { time: "14:00", title: "Reunião com Cliente", duration: "45m", desc: "Com transcrição e tradução em tempo real", type: "meeting" },
    { time: "14:45", title: "Insights p/ CRM", duration: "Instantâneo", desc: "Dados estruturados pela IA", type: "ai" },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="page-shell">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-border text-muted-foreground">
            Antes vs. Depois
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            O fim do caos operacional
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Veja como uma semana típica se transforma quando a inteligência
            artificial cuida do trabalho invisível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 opacity-70">
              <div className="w-3 h-3 rounded-full bg-zinc-400" />
              <h3 className="text-xl font-bold text-zinc-500">Sem Notura</h3>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800" />
              {semNotura.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 relative z-10 grayscale opacity-80"
                >
                  <div className="w-10 text-xs font-medium text-zinc-500 pt-3">
                    {item.time}
                  </div>
                  <Card className="flex-1 p-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 border-transparent shadow-none">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <span className="text-xs opacity-70">{item.duration}</span>
                    </div>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xl font-bold text-foreground">Com Notura</h3>
            </div>
            <div className="space-y-4 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-primary/20" />
              {comNotura.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 relative z-10"
                >
                  <div className="w-10 text-xs font-medium text-muted-foreground pt-3">
                    {item.time}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 p-4 rounded-xl border shadow-sm transition-all ${
                      item.type === "ai"
                        ? "bg-primary/10 border-primary/20 ring-1 ring-primary/10"
                        : item.type === "work"
                        ? "bg-blue-500/10 border-blue-500/20"
                        : "bg-background border-border"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4
                        className={`font-semibold ${
                          item.type === "ai"
                            ? "text-primary"
                            : item.type === "work"
                            ? "text-blue-500"
                            : "text-foreground"
                        }`}
                      >
                        {item.type === "ai" && (
                          <Sparkles className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                        )}
                        {item.title}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0 h-5"
                      >
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    { label: "Tempo gasto em ata", value: 73, prefix: "−", suffix: "%", color: "text-green-500", icon: Clock },
    { label: "Velocidade de execução", value: 4.2, prefix: "+", suffix: "x", decimals: 1, color: "text-blue-500", icon: Zap },
    { label: "Horas livres na semana", value: 12, prefix: "+", suffix: "h", color: "text-primary", icon: TrendingUp },
    { label: "Decisões registradas", value: 98, prefix: "", suffix: "%", color: "text-indigo-500", icon: Target },
  ];

  return (
    <section id="resultados" className="py-20 bg-background relative z-10">
      <div className="page-shell">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
            Números que falam por si
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center justify-center border-border/50 bg-secondary/20 hover:bg-secondary/50 transition-colors">
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-background shadow-sm border border-border/50 ${metric.color}`}
                >
                  <metric.icon className="w-6 h-6" />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-display font-bold tracking-tight mb-2 ${metric.color}`}
                >
                  <CountUp
                    to={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoopSection() {
  const steps = [
    { icon: Mic, label: "Reunião" },
    { icon: Bot, label: "IA Organiza" },
    { icon: FileText, label: "Tarefas" },
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: CheckCircle2, label: "Execução" },
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="page-shell text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
          O Fluxo Contínuo de Valor
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto">
          Do áudio bruto à execução real, em menos de 60 segundos.
        </p>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2 hidden md:block rounded-full" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-green-500 -translate-y-1/2 hidden md:block rounded-full"
            initial={{ right: "100%" }}
            whileInView={{ right: "0%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.4 + 0.2, duration: 0.5, type: "spring" }}
                className="flex flex-col items-center bg-background px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border-2 border-border shadow-xl flex items-center justify-center mb-4 relative group"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon
                    className={`w-8 h-8 md:w-10 md:h-10 ${
                      i === steps.length - 1 ? "text-green-500" : "text-primary"
                    }`}
                  />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    whileInView={{ scale: 1.5, opacity: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.4 + 0.5, duration: 1 }}
                    className="absolute inset-0 rounded-2xl border-2 border-primary"
                  />
                </motion.div>
                <span className="font-semibold md:text-lg">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />

      <div className="page-shell relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            De ruído a clareza
          </h2>
          <p className="text-lg text-zinc-400">
            A mágica acontece na extração do que importa. Alterne para ver a
            transformação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-zinc-900 p-1 rounded-full flex relative">
              <motion.div
                className="absolute inset-y-1 w-[calc(50%-0.25rem)] bg-primary rounded-full"
                animate={{ left: isAfter ? "50%" : "0.25rem" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setIsAfter(false)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  !isAfter ? "text-white" : "text-zinc-400"
                }`}
              >
                Transcrição Bruta
              </button>
              <button
                onClick={() => setIsAfter(true)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isAfter ? "text-white" : "text-zinc-400"
                }`}
              >
                Resultado Notura
              </button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[340px] rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
            <AnimatePresence mode="wait">
              {!isAfter ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-8 flex items-center justify-center"
                >
                  <p className="text-zinc-500 font-mono text-sm leading-relaxed max-w-2xl blur-[1px] hover:blur-none transition-all">
                    "...então acho que a gente devia focar no onboarding,
                    porque o João falou ontem que a taxa de drop tá meio alta,
                    né? Mas aí tem a questão da API de pagamentos que a Maria
                    tava vendo. Ah, João, você consegue terminar aquele doc
                    até sexta? A Maria disse que a API tá quase lá, mas
                    precisa de revisão. E o banner da home, a gente muda pra
                    azul ou deixa roxo mesmo? Enfim, vamos marcar outra call
                    na quarta pra ver tudo isso. Alguém anotou o lance do
                    banco de dados? Ah, depois eu vejo na gravação..."
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-5 md:p-8 bg-zinc-900/50 flex flex-col justify-center"
                >
                  <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] max-w-4xl mx-auto w-full items-start">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5" /> Decisões Principais
                        </h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Foco prioritário no fluxo de onboarding
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Nova reunião de alinhamento marcada para quarta-feira
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                          <Workflow className="w-5 h-5" /> Tarefas enviadas para o WhatsApp
                        </h4>
                        <ul className="space-y-3 text-sm">
                          <li className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center gap-3">
                            <span>Finalizar documentação do onboarding</span>
                            <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                              João • Sex
                            </Badge>
                          </li>
                          <li className="bg-zinc-800 p-3 rounded-lg flex justify-between items-center gap-3">
                            <span>Revisão final da API de pagamentos</span>
                            <Badge variant="outline" className="text-zinc-400 border-zinc-700">
                              Maria
                            </Badge>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Card className="overflow-hidden border-green-900/70 bg-[#0b141a] text-white shadow-2xl">
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#111b21] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400 font-semibold">
                            N
                          </div>
                          <div>
                            <p className="font-semibold">Notura</p>
                            <p className="text-xs text-zinc-400">online agora</p>
                          </div>
                        </div>
                        <span className="text-xs text-zinc-400">09:47</span>
                      </div>
                      <div className="space-y-3 bg-[linear-gradient(180deg,#0f1c22_0%,#081318_100%)] p-4 text-sm">
                        <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#005c4b] px-4 py-3 text-left shadow-lg">
                          <p className="mb-2 font-semibold">Resumo da reunião de alinhamento</p>
                          <p>1. Prioridade no onboarding para reduzir drop.</p>
                          <p>2. Revisão da API de pagamentos segue com Maria.</p>
                          <p>3. Próxima call marcada para quarta-feira.</p>
                        </div>
                        <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#005c4b] px-4 py-3 text-left shadow-lg">
                          <p className="mb-2 font-semibold">Próximos passos</p>
                          <p>• João finaliza o doc até sexta.</p>
                          <p>• Maria envia revisão final da API.</p>
                          <p>• Time recebe tarefas no próprio WhatsApp.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarVisualSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-background">
      <div className="page-shell">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-none rounded-full px-4 py-1.5">
              Gestão de Tempo
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Sua agenda, finalmente respirando.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quando você elimina o tempo gasto organizando informações e
              cobrando tarefas, blocos inteiros da sua agenda são liberados
              para o que realmente importa: pensar, criar e liderar.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="opacity-70 line-through">
                  Reuniões para alinhar a última reunião
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="opacity-70 line-through">
                  1 hora escrevendo ata
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Trabalho profundo sem interrupções</span>
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Tempo livre para estratégia</span>
              </li>
            </ul>
          </motion.div>

          <div className="relative">
            <Card className="p-4 md:p-6 bg-secondary/50 border-border/50 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-sm font-medium opacity-50 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" /> Semana Atual
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 h-[300px]">
                {[...Array(5)].map((_, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-2 relative">
                    <div className="text-center text-xs font-medium text-muted-foreground mb-2">
                      {["Seg", "Ter", "Qua", "Qui", "Sex"][colIndex]}
                    </div>
                    <motion.div
                      className="absolute top-8 left-0 right-0 bg-red-500/20 border border-red-500/30 rounded-md z-10"
                      initial={{ height: "120px" }}
                      whileInView={{ height: "40px" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1, ease: "circOut" }}
                    />
                    <motion.div
                      className="absolute top-[160px] left-0 right-0 bg-orange-500/20 border border-orange-500/30 rounded-md z-10"
                      initial={{ height: "80px" }}
                      whileInView={{ height: "0px", opacity: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.2, ease: "circOut" }}
                    />
                    <motion.div
                      className="absolute top-[80px] left-0 right-0 bg-blue-500/20 border border-blue-500/30 rounded-md z-0 flex items-center justify-center overflow-hidden"
                      initial={{ height: "0px", opacity: 0 }}
                      whileInView={{ height: "120px", opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.5, ease: "circOut" }}
                    >
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 rotate-90 md:rotate-0 whitespace-nowrap">
                        Trabalho Profundo
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-primary/10 border border-primary/20 rounded-md z-0 flex items-center justify-center"
                      initial={{ height: "0px", opacity: 0 }}
                      whileInView={{ height: "80px", opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: colIndex * 0.1 + 0.8, ease: "circOut" }}
                    >
                      <span className="text-[10px] font-semibold text-primary">
                        Tempo Livre
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section id="depoimento" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="page-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12 text-center">
            <div className="mb-5 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/70">
              Prova social
            </p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl font-medium leading-tight">
              Times reais usando a Notura para encurtar o caminho entre reunião e execução.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {socialProofItems.map((item) => (
              <Card key={item.name} className="border-white/15 bg-white/10 p-6 text-left text-white shadow-xl backdrop-blur-sm">
                <div className="mb-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <p className="mb-6 text-base leading-7 text-white/90">"{item.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/70">{item.role}, {item.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      monthly: "R$ 0",
      yearly: "R$ 0",
      description: "Para testar o fluxo completo antes de subir o time inteiro.",
      features: [
        "3 reuniões grátis",
        "Envio para o WhatsApp",
        "Suporte por e-mail",
        "Controle de tarefas pelo app",
        "Sem chatbot com IA",
      ],
      cta: "Começar grátis",
      featured: false,
      accent: "default",
      periodLabel: "/mês",
    },
    {
      name: "Starter",
      monthly: "R$ 49",
      yearly: "R$ 39",
      description: "Para validar o fluxo da primeira reunião ao resumo no WhatsApp.",
      features: ["30 resumos por mês", "Envio automático para WhatsApp", "Suporte por email"],
      cta: "Ativar minha conta grátis",
      featured: false,
      accent: "default",
      periodLabel: "/mês",
    },
    {
      name: "Pro",
      monthly: "R$ 99",
      yearly: "R$ 69",
      description: "Plano recomendado para times que querem transformar reunião em execução real.",
      features: [
        "Resumos ilimitados",
        "Suporte por WhatsApp",
        "Controle de tarefas pelo app",
        "Com chatbot de IA",
      ],
      cta: "Quero meu resumo no WhatsApp",
      featured: true,
      accent: "primary",
      periodLabel: "/mês",
    },
    {
      name: "Enterprise",
      monthly: "Consultar",
      yearly: "Consultar",
      description: "Para operações maiores com mais governança e acompanhamento próximo.",
      features: [
        "Usuários ilimitados",
        "Onboarding assistido",
        "Prioridade no suporte",
        "Integrações personalizadas",
      ],
      cta: "Falar com vendas",
      featured: false,
      accent: "enterprise",
      periodLabel: "",
    },
  ];

  return (
    <section id="precos" className="py-24 md:py-32 bg-secondary/30">
      <div className="page-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5">
            Pricing e garantia
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Vale a pena pagar quando o retorno chega já na próxima reunião.
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o ritmo do time e reduza risco com uma garantia clara desde a primeira compra.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-background p-1 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billing === "monthly" ? "bg-primary text-white" : "text-muted-foreground"}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billing === "yearly" ? "bg-primary text-white" : "text-muted-foreground"}`}
            >
              Anual — economize 30%
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl p-6 shadow-sm ${
                plan.featured
                  ? "border-primary shadow-primary/10 ring-1 ring-primary/20 bg-background"
                  : plan.accent === "enterprise"
                    ? "border-cyan-400/60 bg-[linear-gradient(180deg,rgba(236,254,255,0.9)_0%,rgba(248,250,252,0.98)_100%)] shadow-[0_18px_50px_rgba(34,211,238,0.14)] ring-1 ring-cyan-400/30"
                    : "border-border/70 bg-background/80"
              }`}
            >
              {(plan.featured || plan.accent === "enterprise") && (
                <Badge className={`mb-5 w-fit rounded-full ${plan.featured ? "bg-primary text-white" : "bg-cyan-500 text-white"}`}>
                  {plan.featured ? "Mais popular" : "Atendimento consultivo"}
                </Badge>
              )}
              <div className="mb-5">
                <h3 className="text-2xl font-display font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold tracking-tight">
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                {plan.periodLabel ? (
                  <span className="ml-2 text-sm text-muted-foreground">{plan.periodLabel}</span>
                ) : null}
              </div>
              <ul className="mb-8 space-y-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${plan.accent === "enterprise" ? "text-cyan-500" : "text-primary"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-auto w-full rounded-full ${plan.accent === "enterprise" ? "border-cyan-300 text-cyan-700 bg-cyan-50" : ""}`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                {plan.periodLabel
                  ? `Cobrado ${billing === "monthly" ? "mensalmente" : "anualmente"} · Cancele quando quiser · Suporte direto no WhatsApp`
                  : "Escopo personalizado · Integração assistida · Condições sob consulta"}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mx-auto mt-8 max-w-4xl rounded-3xl border-primary/20 bg-primary/5 p-6 md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Garantia de 7 dias.</p>
                <p className="text-sm text-muted-foreground">
                  Se não gostar, devolvemos 100% do valor pago, sem perguntas e sem burocracia.
                </p>
              </div>
            </div>
            <Badge variant="outline" className="w-fit rounded-full px-3 py-1">
              Risco baixo para testar
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-28 bg-background">
      <div className="page-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5">
            FAQ e objeções
          </Badge>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            As dúvidas que mais travam a decisão de compra.
          </h2>
          <p className="text-lg text-muted-foreground">
            Clareza sobre privacidade, compatibilidade e operação reduz atrito antes do cadastro.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-3xl border-border/70 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="rounded-3xl border-border/70 p-6 md:p-8 bg-secondary/30">
            <Badge className="mb-5 rounded-full bg-green-500 text-white">Atendimento humano</Badge>
            <h3 className="text-2xl font-display font-bold tracking-tight mb-4">
              Ainda tem dúvidas? Fale com a gente no WhatsApp.
            </h3>
            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              Capture visitantes quase prontos para converter com um canal direto, rápido e familiar.
            </p>
            <Button asChild className="w-full rounded-full bg-primary text-white">
              <a href="#cta">
                Falar no WhatsApp
              </a>
            </Button>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Resposta rápida para objeções comerciais
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Suporte para ativação inicial do time
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-32 relative">
      <div className="page-shell">
        <Card className="max-w-5xl mx-auto bg-zinc-950 text-white border-zinc-800 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="p-12 md:p-20 text-center relative z-10 flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Sua próxima reunião merece um resumo. Comece hoje.
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
              Junte-se a equipes que querem sair da reunião com decisões registradas, tarefas distribuídas e menos trabalho invisível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 bg-white text-black hover:bg-zinc-200 text-lg font-bold shadow-2xl"
              >
                Quero meu resumo no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 border-zinc-700 text-white hover:bg-zinc-800 text-lg font-medium bg-transparent"
              >
                Falar com vendas
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-400">
              Vagas com preço de lançamento disponíveis por tempo limitado.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Não requer cartão de crédito · Setup em 2 minutos · Cancele quando quiser.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="page-shell">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-xs">
            <Link href="/" className="mb-4 inline-flex">
              <NoturaLogo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A IA que transforma reuniões em ação. Resumos automáticos direto
              no WhatsApp da sua equipe.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> Operação SaaS com foco em produtividade</p>
              <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Fluxo orientado a privacidade e LGPD</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Produto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Homepage</Link></li>
                <li><a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a></li>
                <li><a href="#resultados" className="hover:text-foreground transition-colors">Resultados</a></li>
                <li><a href="#precos" className="hover:text-foreground transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#depoimento" className="hover:text-foreground transition-colors">Clientes</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#cta" className="hover:text-foreground transition-colors">Falar com vendas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#faq" className="hover:text-foreground transition-colors">Privacidade e LGPD</a></li>
                <li><a href="#precos" className="hover:text-foreground transition-colors">Garantia de 7 dias</a></li>
                <li><a href="#cta" className="hover:text-foreground transition-colors">Contato comercial</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">
            © 2026 Notura. Produto em operação no Brasil.
          </p>
          <p className="text-sm text-muted-foreground">
            Suporte comercial e onboarding direto no WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Produtividade() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <ComparisonSection />
        <MetricsSection />
        <LoopSection />
        <BeforeAfterSection />
        <CalendarVisualSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
