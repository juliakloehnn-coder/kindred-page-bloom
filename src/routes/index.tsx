import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  Briefcase,
  Users,
  Building2,
  Gavel,
  FileText,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import justiceImg from "@/assets/justice.jpg";
import duoImg from "@/assets/duo.jpg";
import juliaImg from "@/assets/julia.jpg";
import ketlinImg from "@/assets/ketlin.jpg";
import logoAsset from "@/assets/logo-horizontal.png.asset.json";
import monogramAsset from "@/assets/kb-monogram.png.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Quem Somos", href: "#quem" },
  { label: "Áreas", href: "#areas" },
  { label: "Contato", href: "#contato" },
];

const areas = [
  { icon: Scale, title: "Direito Civil", desc: "Contratos, responsabilidade civil, obrigações e direitos reais." },
  { icon: Briefcase, title: "Direito Empresarial", desc: "Consultoria societária, contratos e governança corporativa." },
  { icon: Users, title: "Direito de Família", desc: "Divórcios, inventários, sucessões e planejamento patrimonial." },
  { icon: Building2, title: "Direito Imobiliário", desc: "Negociações, regularização, locações e usucapião." },
  { icon: Gavel, title: "Direito Criminal", desc: "Defesa criminal, acompanhamento de inquéritos e atuação em processos penais." },
  { icon: FileText, title: "Direito Trabalhista", desc: "Assessoria preventiva e atuação em demandas judiciais." },
];

const valores = [
  { n: "01", t: "Ética", d: "Conduta íntegra em cada decisão e relação profissional." },
  { n: "02", t: "Excelência", d: "Aprofundamento técnico e busca constante por resultados sólidos." },
  { n: "03", t: "Discrição", d: "Sigilo absoluto sobre cada caso e cliente atendido." },
  { n: "04", t: "Compromisso", d: "Dedicação integral aos interesses de quem nos confia sua causa." },
];

function Logo({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <a href="#home" className="flex items-center gap-4">
        <img
          src={monogramAsset.url}
          alt=""
          aria-hidden
          className="h-12 w-auto"
        />
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[19px] font-normal tracking-[0.06em] text-white">
            KLOEHN &amp; BELUSSO
          </span>
          <span className="mt-1.5 text-[9px] font-light tracking-[0.5em] text-gold">
            ADVOCACIA
          </span>
        </span>
        <span className="sr-only">Kloehn & Belusso Advocacia</span>
      </a>
    );
  }
  return (
    <img
      src={logoAsset.url}
      alt="Kloehn & Belusso Advocacia"
      className="h-12 w-auto md:h-14"
    />
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Logo light />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] font-normal text-white transition hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden border px-5 py-2.5 text-[10px] font-light tracking-[0.32em] transition hover:bg-gold hover:text-navy lg:inline-block"
          style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
        >
          FALE CONOSCO
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 lg:grid-cols-2 lg:py-32">
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <div className="mx-auto mb-6 h-px w-16 bg-gold lg:mx-0" />
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            KLOEHN &<br />BELUSSO
          </h1>
          <p className="mt-4 text-xs tracking-[0.5em] text-gold">ADVOCACIA</p>
          <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground lg:mx-0">
            Soluções jurídicas sob medida, guiadas por ética, excelência e compromisso com cada cliente.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#areas"
              className="border border-navy bg-navy px-8 py-4 text-xs tracking-[0.25em] text-navy-foreground transition hover:bg-transparent hover:text-navy"
            >
              ÁREAS DE ATUAÇÃO
            </a>
            <a
              href="#contato"
              className="border border-navy px-8 py-4 text-xs tracking-[0.25em] text-navy transition hover:bg-navy hover:text-navy-foreground"
            >
              CONTATO
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={justiceImg}
            alt="Estátua da Justiça com livros jurídicos"
            width={1400}
            height={1400}
            className="mx-auto w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <img
          src={duoImg}
          alt="Sócias do escritório Kloehn & Belusso Advocacia"
          width={900}
          height={1000}
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <div className="mb-6 h-px w-16 bg-gold" />
          <p className="mb-4 text-xs tracking-[0.4em] text-gold">SOBRE NÓS</p>
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Compromisso que gera{" "}
            <span className="italic text-gold">confiança</span>.
          </h2>
          <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground">
            <p>
              Unimos conhecimento técnico, experiência e empatia para oferecer um atendimento jurídico próximo, transparente e eficiente.
            </p>
            <p>
              Mais do que resolver questões, nosso propósito é proteger direitos e construir soluções.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuemSomos() {
  const socias = [
    { img: juliaImg, name: "Julia Kloehn Lazzari", oab: "OAB/SC 73.172" },
    { img: ketlinImg, name: "Ketlin Schveitzer Belusso", oab: "OAB/SC 74.187" },
  ];
  return (
    <section id="quem" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-[0.4em] text-gold">QUEM SOMOS</p>
          <div className="mx-auto h-px w-16 bg-gold" />
        </div>
        <div className="grid gap-14 md:grid-cols-2 md:gap-8">
          {socias.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <img
                src={s.img}
                alt={s.name}
                width={900}
                height={1100}
                loading="lazy"
                className="h-80 w-64 flex-shrink-0 object-cover"
              />
              <div className="pt-4 text-center sm:text-left">
                <h3 className="font-serif text-3xl leading-tight text-navy">
                  {s.name.split(" ").map((w, i) => (
                    <span key={i}>{w}<br /></span>
                  ))}
                </h3>
                <p className="mt-4 text-sm tracking-widest text-gold">{s.oab}</p>
                <div className="mt-4 h-px w-16 bg-gold sm:mx-0 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <p className="mb-6 text-xs tracking-[0.4em] text-gold">ÁREAS DE ATUAÇÃO</p>
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
            Atuação multidisciplinar,<br />soluções sob medida.
          </h2>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="border-b border-r border-border bg-card p-10 transition hover:bg-muted">
              <a.icon className="h-8 w-8 stroke-[1.25] text-gold" />
              <h3 className="mt-6 font-serif text-2xl text-navy">{a.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {a.desc}
              </p>
              <div className="mt-6 h-px w-10 bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Valores() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 h-px w-16 bg-gold" />
        <p className="mb-4 text-xs tracking-[0.4em] text-gold">NOSSOS VALORES</p>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
          Pilares que sustentam cada parecer e cada decisão.
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v) => (
            <div key={v.t} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-widest text-gold">{v.n}</span>
                <h3 className="font-serif text-3xl text-navy">{v.t}</h3>
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`
    );
    window.location.href = `mailto:contato@kloehnbelusso.adv.br?subject=Contato pelo site&body=${body}`;
  };

  return (
    <section id="contato" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-6 h-px w-16 bg-gold" />
          <p className="mb-4 text-xs tracking-[0.4em] text-gold">CONTATO</p>
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Vamos conversar sobre o seu caso.
          </h2>
          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 stroke-[1.25] text-gold" />
              <div>
                <p className="text-xs tracking-[0.3em] text-gold">TELEFONE</p>
                <a href="tel:+554799964-3469" className="mt-1 block text-lg text-navy hover:text-gold">
                  +55 47 99964-3469
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 stroke-[1.25] text-gold" />
              <div>
                <p className="text-xs tracking-[0.3em] text-gold">E-MAIL</p>
                <a href="mailto:contato@kloehnbelusso.adv.br" className="mt-1 block text-lg text-navy hover:text-gold">
                  contato@kloehnbelusso.adv.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="border border-border bg-card p-8 sm:p-10">
          {(["nome", "email", "telefone"] as const).map((f) => (
            <label key={f} className="mb-8 block">
              <span className="text-xs tracking-[0.3em] text-gold">
                {f === "email" ? "E-MAIL" : f.toUpperCase()}
              </span>
              <input
                required
                type={f === "email" ? "email" : "text"}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="mt-2 block w-full border-b border-border bg-transparent py-2 text-navy outline-none focus:border-gold"
              />
            </label>
          ))}
          <label className="mb-8 block">
            <span className="text-xs tracking-[0.3em] text-gold">MENSAGEM</span>
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-2 block w-full resize-none border-b border-border bg-transparent py-2 text-navy outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gold py-4 text-xs tracking-[0.3em] text-navy transition hover:bg-navy hover:text-navy-foreground"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-12 text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo light />
        <p className="text-xs tracking-wide text-navy-foreground/70">
          © 2026 Kloehn & Belusso Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function WhatsApp() {
  return (
    <a
      href="https://wa.me/5547999643469"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <QuemSomos />
        <Areas />
        <Valores />
        <Contato />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
