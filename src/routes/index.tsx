import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { waLink, waHomeMessage } from "@/lib/whatsapp";
import heroImage from "@/assets/noro-hero.jpg";
import { Button } from "@/components/ui/button";
import { LotCard } from "@/components/lot-card";
import { lots } from "@/lib/lots";
import { BrandMark } from "@/components/brand-mark";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Noro Negócios Pecuários | Gado no Paraná" },
    { name: "description", content: "Compra, venda e intermediação de gado com procedência, clareza e acompanhamento próximo em todo o Paraná." },
    { property: "og:title", content: "Noro Negócios Pecuários" },
    { property: "og:description", content: "Negócios de gado conduzidos com palavra, procedência e presença." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Index,
});

function Index() {
  return <main>
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-hero text-hero-foreground">
      <img src={heroImage} alt="Rebanho Nelore em pastagem no Paraná" width={1920} height={1280} className="image-drift absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--hero)_92%,transparent)_0%,color-mix(in_oklab,var(--hero)_55%,transparent)_47%,color-mix(in_oklab,var(--hero)_12%,transparent)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <div className="reveal-up max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold"><span className="h-px w-10 bg-gold" />Cascavel · Paraná</div>
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl lg:text-[7.5rem]">Negócio bom começa pela palavra.</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/80 md:text-lg">Compra, venda e intermediação de gado com procedência, clareza e acompanhamento próximo.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild variant="hero" size="xl"><Link to="/catalogo">Ver lotes <ArrowRight /></Link></Button><Button asChild variant="hero" size="xl"><a href={waLink(waHomeMessage)} target="_blank" rel="noreferrer"><MessageCircle />Falar no WhatsApp</a></Button><Button asChild variant="heroOutline" size="xl"><Link to="/vender">Quero vender gado</Link></Button></div>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-hero-foreground/25 pt-5 text-xs uppercase tracking-[0.13em] text-hero-foreground/65"><span>Negócios pecuários</span><span className="hidden sm:block">Origem · Seleção · Confiança</span></div>
      </div>
    </section>

    <section className="px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Oportunidades atuais</p><h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-7xl">Gado selecionado.<br/><em className="font-normal text-muted-foreground">Informação clara.</em></h2></div><Button asChild variant="outline" size="lg"><Link to="/catalogo">Catálogo completo <ArrowRight /></Link></Button></div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">O lote NR-101 já é real — os demais são modelos de apresentação até os próximos lotes entrarem.</p>
      <div className="mt-10 grid gap-10 md:grid-cols-3">{lots.map(lot => <LotCard key={lot.id} lot={lot} />)}</div>
    </div></section>

    <section className="bg-hero px-5 py-20 text-hero-foreground md:px-10 md:py-28"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div><BrandMark className="h-28 w-28 text-gold"/><p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-gold">Nosso jeito de negociar</p><h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">Entre quem cria e quem procura, existe confiança.</h2></div>
      <div className="grid gap-px bg-hero-foreground/15 sm:grid-cols-2">{[[ShieldCheck,"Procedência","Informações objetivas sobre cada lote e sua origem."],[CheckCircle2,"Clareza","Condição, disponibilidade e negociação sem rodeios."],[ArrowRight,"Proximidade","Acompanhamento pessoal do primeiro contato ao fechamento."],[BrandMark,"Seleção","Oportunidades alinhadas ao perfil de cada comprador."]].map(([Icon,title,text]) => { const C = Icon as typeof ShieldCheck; return <div key={String(title)} className="bg-hero p-8"><C className="size-7 text-gold"/><h3 className="mt-10 font-display text-3xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-hero-foreground/65">{String(text)}</p></div>})}</div>
    </div></section>

    <section className="px-5 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-[1440px]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Duas pontas, uma condução</p><div className="mt-8 grid border-y border-border md:grid-cols-2"><Link to="/catalogo" className="group py-12 md:border-r md:border-border md:pr-12"><span className="text-sm text-muted-foreground">Para quem busca oportunidade</span><h2 className="mt-4 flex items-center justify-between font-display text-5xl">Quero comprar <ArrowRight className="size-8 transition-transform group-hover:translate-x-2"/></h2></Link><Link to="/vender" className="group py-12 md:pl-12"><span className="text-sm text-muted-foreground">Para quem tem gado disponível</span><h2 className="mt-4 flex items-center justify-between font-display text-5xl">Quero vender <ArrowRight className="size-8 transition-transform group-hover:translate-x-2"/></h2></Link></div></div></section>
  </main>;
}