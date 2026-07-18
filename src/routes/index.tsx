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
  Instagram,
} from "lucide-react";
import sobreImg from "@/assets/advogadas-sobre.jpeg.asset.json";
import juliaNovaImg from "@/assets/julia-santos-kloehn.jpg.asset.json";
import ketlinImg from "@/assets/ketlin-schveitzer-belusso.jpg.asset.json";
import heroJusticeBg from "@/assets/hero-justice-transparent.png";
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

function SectionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`mb-10 text-center lg:mb-14 ${className}`}>
      <p className="mb-3 text-sm font-medium tracking-[0.4em] text-gold">{label}</p>
      <div className="mx-auto h-px w-16 bg-gold" />
    </div>
  );
}

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-14 lg:py-5">
        <Logo light />
        <div className="hidden items-center gap-8 lg:flex lg:gap-12">
          <nav className="flex items-center gap-8 lg:gap-12">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[16px] font-medium text-white transition hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="border px-6 py-3 text-[12px] font-normal tracking-[0.28em] transition hover:bg-gold hover:text-navy"
            style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
          >
            FALE CONOSCO
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* base cream layer guarantees the same background color everywhere */}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-cream" />
      <img
        src={heroJusticeBg}
        alt=""
        aria-hidden="true"
        width={1400}
        height={1400}
        className="pointer-events-none absolute -right-16 bottom-0 z-0 h-[95%] w-auto max-w-[70%] object-contain object-bottom opacity-90 blur-[2px] contrast-105 saturate-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-r from-cream via-cream/80 via-50% to-cream/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-cream via-cream/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-cream via-cream/70 to-transparent"
      />

      <div className="relative z-20 mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[80vh] lg:py-24">
        <img
          src={monogramAsset.url}
          alt=""
          aria-hidden="true"
          className="mb-6 h-24 w-auto md:h-28"
        />
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
          KLOEHN & BELUSSO
        </h1>
        <p className="mt-4 text-sm font-medium tracking-[0.5em] text-gold">ADVOCACIA</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#areas"
            className="bg-gold px-7 py-3.5 text-sm font-medium tracking-[0.25em] text-navy transition hover:bg-navy hover:text-navy-foreground"
          >
            ÁREAS DE ATUAÇÃO
          </a>
          <a
            href="#contato"
            className="border border-border bg-cream px-7 py-3.5 text-sm font-medium tracking-[0.25em] text-navy transition hover:bg-navy hover:text-navy-foreground"
          >
            CONTATO
          </a>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <SectionContainer>
        <SectionTitle label="SOBRE NÓS" />
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[16rem] overflow-hidden sm:max-w-[18rem] lg:mx-0 lg:aspect-[3/4] lg:max-w-[22rem]">
            <img
              src={sobreImg.url}
              alt="Sócias do escritório Kloehn & Belusso Advocacia"
              width={600}
              height={750}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%] sm:object-[center_20%] lg:object-[center_10%]"
            />
          </div>
          <div className="pt-2 lg:pt-8">
            <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
              Compromisso que gera{" "}
              <span className="italic text-gold">confiança</span>.
            </h2>
            <div className="mt-6 space-y-4 text-lg font-normal leading-relaxed text-muted-foreground lg:mt-8">
              <p>
                Unimos conhecimento técnico, experiência e empatia para oferecer um atendimento jurídico próximo, transparente e eficiente.
              </p>
              <p>
                Mais do que resolver questões, nosso propósito é proteger direitos e construir soluções.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function QuemSomos() {
  const socias = [
    { img: juliaNovaImg.url, name: "Julia Santos Kloehn", oab: "OAB/SC 73.172", line1: "Julia Santos", line2: "Kloehn" },
    { img: ketlinImg.url, name: "Ketlin Schveitzer Belusso", oab: "OAB/SC 74.187", line1: "Ketlin Schveitzer", line2: "Belusso" },
  ];
  return (
    <section id="quem" className="bg-cream py-20 lg:py-28">
      <SectionContainer>
        <SectionTitle label="QUEM SOMOS" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {socias.map((s) => (
            <div key={s.name} className="flex flex-col items-center text-center">
              <div className="relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-serif text-[2rem] leading-[1.15] text-navy sm:text-[2.25rem] lg:text-[2.5rem]">
                  <span>{s.line1}<br /></span>
                  <span className="font-bold">{s.line2}</span>
                </h3>
                <p className="mt-5 text-base font-medium tracking-widest text-gold">{s.oab}</p>
                <div className="mx-auto mt-4 h-px w-16 bg-gold" />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-background py-20 lg:py-28">
      <SectionContainer>
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-4 text-sm font-medium tracking-[0.4em] text-gold">ÁREAS DE ATUAÇÃO</p>
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />
          <h2 className="font-serif text-5xl leading-tight text-navy sm:text-6xl lg:text-7xl">
            Atuação multidisciplinar,<br />soluções sob medida.
          </h2>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="flex h-full flex-col border-b border-r border-border bg-card p-10 transition hover:bg-muted">
              <a.icon className="h-8 w-8 stroke-[1.25] text-gold" />
              <h3 className="mt-6 font-serif text-4xl text-navy">{a.title}</h3>
              <p className="mt-3 flex-grow text-lg font-normal leading-relaxed text-muted-foreground">
                {a.desc}
              </p>
              <div className="mt-6 h-px w-10 bg-gold" />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function Valores() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <SectionContainer>
        <SectionTitle label="NOSSOS VALORES" />
        <div className="grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {valores.map((v) => (
            <div key={v.t} className="flex h-full flex-col border-t border-border pt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium tracking-widest text-gold">{v.n}</span>
                <h3 className="font-serif text-4xl text-navy">{v.t}</h3>
              </div>
              <p className="mt-4 flex-grow text-base font-normal leading-relaxed text-muted-foreground">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
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
    <section id="contato" className="bg-background py-20 lg:py-28">
      <SectionContainer>
        <SectionTitle label="CONTATO" />
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-5xl leading-tight text-navy sm:text-6xl">
              Vamos conversar sobre o seu caso.
            </h2>
            <div className="mt-10 space-y-8 lg:mt-12">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 stroke-[1.25] text-gold" />
                <div>
                  <p className="text-sm font-medium tracking-[0.3em] text-gold">TELEFONE</p>
                  <a href="tel:+554799964-3469" className="mt-1 block text-xl font-medium text-navy hover:text-gold">
                    +55 47 99964-3469
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 stroke-[1.25] text-gold" />
                <div>
                  <p className="text-sm font-medium tracking-[0.3em] text-gold">E-MAIL</p>
                  <a href="mailto:contato@kloehnbelusso.adv.br" className="mt-1 block text-xl font-medium text-navy hover:text-gold">
                    contato@kloehnbelusso.adv.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="mt-1 h-5 w-5 stroke-[1.25] text-gold" />
                <div>
                  <p className="text-sm font-medium tracking-[0.3em] text-gold">INSTAGRAM</p>
                  <a
                    href="https://instagram.com/kloehnbelussoadvocacia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-xl font-medium text-navy hover:text-gold"
                  >
                    @kloehnbelussoadvocacia
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="border border-border bg-card p-8 sm:p-10">
            {(["nome", "email", "telefone"] as const).map((f) => (
              <label key={f} className="mb-8 block">
                <span className="text-sm font-medium tracking-[0.3em] text-gold">
                  {f === "email" ? "E-MAIL" : f.toUpperCase()}
                </span>
                <input
                  required
                  type={f === "email" ? "email" : "text"}
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  className="mt-2 block w-full border-b border-border bg-transparent py-2 text-base font-normal text-navy outline-none focus:border-gold"
                />
              </label>
            ))}
            <label className="mb-8 block">
              <span className="text-sm font-medium tracking-[0.3em] text-gold">MENSAGEM</span>
              <textarea
                required
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="mt-2 block w-full resize-none border-b border-border bg-transparent py-2 text-base font-normal text-navy outline-none focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-gold py-4 text-sm font-medium tracking-[0.3em] text-navy transition hover:bg-navy hover:text-navy-foreground"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-12 text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo light />
        <p className="text-sm font-normal tracking-wide text-navy-foreground/70">
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
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
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
