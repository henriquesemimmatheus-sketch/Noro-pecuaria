import neloreImage from "@/assets/lote-nelore.jpg";
import angusImage from "@/assets/lote-angus.jpg";
import brafordImage from "@/assets/lote-braford.jpg";
import loteReal01 from "@/assets/lote-real-01.jpg";
import loteFoto1 from "@/assets/lote-foto-1.jpg";
import loteVideo1 from "@/assets/lote-video-1.mp4";

export type LotStatus = "Disponível" | "Reservado" | "Vendido";
export type Lot = {
  id: string; title: string; breed: string; category: string; quantity: string; sex: string;
  age: string; weight: string; arrobas: string; location: string; price: string; freight: string;
  status: LotStatus; images: string[]; videoUrl?: string; real?: boolean; note: string;
};

export const lots: Lot[] = [
  { id: "NR-101", title: "Lote de novilhas a pasto", breed: "A confirmar", category: "Novilhas", quantity: "50 cabeças", sex: "Fêmeas", age: "A confirmar", weight: "250 kg", arrobas: "8,3 @", location: "Paraná", price: "Sob consulta", freight: "A combinar", status: "Disponível", images: [loteFoto1, loteReal01], videoUrl: loteVideo1, real: true, note: "Lote real em campo: 50 novilhas brancas com peso médio de 250 kg. Raça e idade em atualização — fale conosco para os dados completos." },
  { id: "NR-024", title: "Novilhas Nelore", breed: "Nelore", category: "Novilhas", quantity: "32 cabeças", sex: "Fêmeas", age: "20–24 meses", weight: "365 kg", arrobas: "12,2 @", location: "Cascavel, PR", price: "Sob consulta", freight: "A combinar", status: "Disponível", images: [neloreImage], note: "Lote uniforme, criado a pasto. Informações demonstrativas." },
  { id: "NR-018", title: "Garrotes Angus", breed: "Angus", category: "Garrotes", quantity: "18 cabeças", sex: "Machos", age: "18–22 meses", weight: "410 kg", arrobas: "13,7 @", location: "Toledo, PR", price: "Sob consulta", freight: "Retirada na origem", status: "Reservado", images: [angusImage], note: "Cruzamento industrial, boa conformação. Informações demonstrativas." },
  { id: "NR-011", title: "Touros Braford", breed: "Braford", category: "Reprodutores", quantity: "3 cabeças", sex: "Machos", age: "30–36 meses", weight: "690 kg", arrobas: "23 @", location: "Guarapuava, PR", price: "Sob consulta", freight: "A combinar", status: "Vendido", images: [brafordImage], note: "Reprodutores avaliados. Informações demonstrativas." },
];

export const realLots = lots.filter((l) => l.real);
export const demoLots = lots.filter((l) => !l.real);
