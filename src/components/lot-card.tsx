import { ArrowUpRight, MapPin } from "lucide-react";
import type { Lot } from "@/lib/lots";

export function LotCard({ lot, onOpen }: { lot: Lot; onOpen?: (lot: Lot) => void }) {
  return (
    <article className="group border-t border-border pt-4">
      <button type="button" onClick={() => onOpen?.(lot)} className="w-full cursor-pointer text-left" aria-label={`Ver detalhes de ${lot.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img src={lot.images[0]} alt={lot.real ? `${lot.title}, lote real` : `${lot.title}, lote demonstrativo`} width={1408} height={1056} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <span className={`absolute left-3 top-3 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${lot.status === "Vendido" ? "bg-muted text-muted-foreground" : lot.status === "Reservado" ? "bg-gold text-foreground" : "bg-olive text-hero-foreground"}`}>{lot.status}</span>
        </div>
        <div className="flex items-start justify-between gap-4 py-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Lote {lot.id}</div>
            <h3 className="mt-2 font-display text-3xl text-foreground">{lot.title}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-3.5" />{lot.location}</p>
          </div>
          <ArrowUpRight className="mt-1 size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <dl className="grid grid-cols-3 border-y border-border py-3 text-sm">
          <div><dt className="text-xs uppercase text-muted-foreground">Cabeças</dt><dd className="mt-1 font-semibold">{lot.quantity}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Peso médio</dt><dd className="mt-1 font-semibold">{lot.weight}</dd></div>
          <div><dt className="text-xs uppercase text-muted-foreground">Arrobas</dt><dd className="mt-1 font-semibold">{lot.arrobas}</dd></div>
        </dl>
      </button>
    </article>
  );
}