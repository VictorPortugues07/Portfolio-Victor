import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0C0D10] px-6 pt-28 md:px-10"
    >
      {/* Grid técnico sutil de fundo — não decorativo, apenas textura editorial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#2FB8B0 1px, transparent 1px), linear-gradient(90deg, #2FB8B0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        {/* Coluna de texto */}
        <div className="relative z-10">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2FB8B0]">
            Tubarão, Brasil — Full-Stack Developer
          </p>

          <h1 className="font-serif text-[13vw] leading-[0.95] text-[#EDEEF0] sm:text-6xl md:text-7xl">
            Victor Hugo
            <br />
            <span className="italic text-[#9A9FA6]">De Pieri Justino</span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#9A9FA6]">
            Construo software que resolve problemas reais.
          </p>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6E7379]">
            Especializado em Java/Spring Boot, Angular e React — com atuação
            direta na modernização de sistemas corporativos legados.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-[#2FB8B0] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#0C0D10] transition-transform hover:-translate-y-0.5"
            >
              Ver Projetos →
            </a>
            <a
              href="https://github.com/VictorPortugues07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#23262B] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#EDEEF0] transition-colors hover:border-[#2FB8B0] hover:text-[#2FB8B0]"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Coluna de foto — sangria fora do grid, moldura fina, sem cantos arredondados exagerados */}
        <div className="relative z-10 justify-self-center md:justify-self-end">
          <div className="relative aspect-[4/5] w-64 overflow-hidden border border-[#23262B] sm:w-80 md:w-full md:max-w-sm">
            <Image
              src="/images/hero-victor.jpg"
              alt="Victor Hugo De Pieri Justino"
              fill
              priority
              sizes="(max-width: 768px) 320px, 400px"
              className="object-cover grayscale-[15%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/30 via-transparent to-transparent" />
          </div>
          {/* Legenda mono, tipo etiqueta técnica */}
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6E7379]">
            01 — Full-Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
}
