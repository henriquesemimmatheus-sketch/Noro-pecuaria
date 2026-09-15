import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={cn("h-11 w-11 text-gold", className)} viewBox="0 0 763 800" fill="none" aria-hidden="true">
      <g fill="currentColor" transform="translate(0,800) scale(0.1,-0.1)">
        <path d="M7460 7878 c-210 -806 -714 -1391 -1569 -1817 -193 -97 -348 -160 -655 -267 -349 -123 -458 -183 -590 -325 -114 -123 -180 -255 -223 -444 -13 -56 -17 -161 -22 -520 -5 -389 -8 -450 -21 -453 -9 -1 -111 99 -245 240 -127 133 -602 632 -1056 1108 -454 476 -927 971 -1050 1100 -559 587 -413 525 -1244 525 -643 0 -737 -2 -745 -15 -6 -9 -10 -487 -10 -1245 0 -676 -5 -2235 -10 -3464 -9 -1991 -8 -2237 5 -2258 15 -23 15 -23 703 -23 579 0 691 2 708 14 19 14 19 51 21 2385 1 1304 5 2376 8 2381 10 16 28 -1 276 -265 129 -137 320 -340 424 -450 105 -110 336 -355 515 -544 179 -190 449 -475 600 -635 258 -273 566 -600 795 -846 55 -59 282 -300 505 -535 223 -235 461 -487 529 -559 68 -72 257 -273 420 -446 163 -173 335 -355 383 -405 87 -90 87 -90 670 -92 361 -2 589 1 598 7 21 13 28 4735 7 4764 -12 16 -26 7 -169 -107 -177 -141 -364 -276 -554 -400 -71 -47 -135 -92 -142 -100 -9 -10 -13 -270 -14 -1058 -3 -966 -4 -1044 -20 -1044 -19 0 -565 569 -579 603 -13 32 -12 1723 1 1757 6 16 38 43 86 73 1179 732 1734 1474 1815 2425 24 276 -21 689 -102 945 -15 45 -36 40 -49 -10z" />
      </g>
    </svg>
  );
}

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", inverse ? "text-hero-foreground" : "text-foreground")}>
      <BrandMark className="h-10 w-10" />
      <div className="leading-none">
        <div className="font-display text-2xl uppercase">Noro</div>
        <div className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.24em]">Negócios pecuários</div>
      </div>
    </div>
  );
}
