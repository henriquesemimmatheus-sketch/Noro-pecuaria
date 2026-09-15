export const WHATSAPP_NUMBER = "5545999442844";
export const WHATSAPP_DISPLAY = "(45) 99944-2844";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waHomeMessage = "Olá, Noro! Vim pelo site e quero falar sobre gado.";
export const waBuyMessage = "Olá, Noro! Vim pelo site procurando gado para comprar.";
export const waLotMessage = (id: string, title: string) =>
  `Olá, Noro! Vi no site o lote ${id} — ${title}. Quero saber mais sobre ele.`;
