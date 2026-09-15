import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/noro-hero.jpg";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand-mark";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Noro | Negócios Pecuários" },
      {
        name: "description",
        content:
          "Nicolas e Henrique Noro voltaram ao campo em Guaraniaçu para fazer do gado o negócio da família — com procedência e palavra.",
      },
      { property: "og:title", content: "A Noro | Negócios Pecuários" },
      {
        property: "og:description",
        content: "A herança do campo e um recomeço: conheça a história dos fundadores da Noro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <main className="pb-24 pt-20">
      <section className="bg-hero px-5 py-24 text-hero-foreground md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-gold">A Noro</p>
            <h1 className="mt-5 font-display text-6xl leading-none md:text-8xl">
              Herança de campo. Recomeço no negócio.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-hero-foreground/75">
              A Noro é conduzida por dois irmãos, Nicolas e Henrique Noro, que em 2025 voltaram ao
              campo para fazer do gado o negócio da família.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[.12em] text-gold">
              Fundada em Cascavel · Operação em Guaraniaçu, Paraná
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <img
            src={heroImage}
            alt="Gado em campo aberto no Paraná"
            width={1920}
            height={1280}
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-5xl">O gado sempre esteve na família.</h2>
              <p className="mt-6 leading-7 text-muted-foreground">
                O nosso vô mexeu com gado a vida inteira. Por volta de 2011, 2012, ele vendeu a
                fazenda — e o gado saiu do dia a dia da família.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Nós, Nicolas e Henrique, nunca tínhamos mexido com gado. Até que, em agosto de
                2025, arrendamos uma fazenda em Guaraniaçu e começamos do zero: campo, gado e o
                aprendizado de cada dia.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Da herança do vô ficou o que não se vende com a fazenda: o conhecimento de quem
                viveu o gado e o gosto pelo trabalho bem feito. A Noro nasce desse recomeço —
                aproximando quem tem bom gado de quem procura boas oportunidades, com
                acompanhamento pessoal em cada negociação.
              </p>
            </div>
            <Button asChild size="xl" className="mt-10 w-fit">
              <Link to="/catalogo">
                Conhecer os lotes <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[.4fr_1fr]">
          <BrandMark className="h-28 w-28 text-primary" />
          <div>
            <h2 className="font-display text-5xl">Uma marca com origem e movimento.</h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              A letra N com o chifre carrega o sobrenome da família e a marca do gado: origem no
              campo e movimento em cada negócio.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
