import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "./brand-mark";
import { Button } from "./ui/button";

const nav = [{ to: "/catalogo" as const, label: "Lotes" }, { to: "/sobre" as const, label: "A Noro" }, { to: "/vender" as const, label: "Venda seu gado" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/15 bg-hero/92 text-hero-foreground backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
      <Link to="/" aria-label="Noro — início"><Wordmark inverse /></Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">{nav.map(item => <Link key={item.to} to={item.to} className="text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>{item.label}</Link>)}<Button asChild variant="hero" size="lg"><Link to="/catalogo">Ver oportunidades</Link></Button></nav>
      <Button variant="ghost" size="icon" className="text-hero-foreground md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-hero-foreground/15 bg-hero px-5 py-6 md:hidden">{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-hero-foreground/10 py-4 font-display text-3xl">{item.label}</Link>)}</nav>}
  </header>;
}