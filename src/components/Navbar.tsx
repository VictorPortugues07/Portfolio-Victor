"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#0C0D10]/80 backdrop-blur-md border-b border-[#23262B]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo / assinatura */}
        <a
          href="#"
          className="font-mono text-sm tracking-widest text-[#EDEEF0]"
          aria-label="Victor Hugo De Pieri Justino — início"
        >
          VH<span className="text-[#2FB8B0]">·</span>DPJ
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.15em] text-[#9A9FA6] transition-colors hover:text-[#EDEEF0]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2FB8B0] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/VictorPortugues07"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[#23262B] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#EDEEF0] transition-colors hover:border-[#2FB8B0] hover:text-[#2FB8B0] md:inline-block"
        >
          GitHub
        </a>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-[#EDEEF0] transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#EDEEF0] transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-[#EDEEF0] transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={[
          "overflow-hidden bg-[#0C0D10] transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-96 border-b border-[#23262B]" : "max-h-0",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm uppercase tracking-[0.15em] text-[#9A9FA6] transition-colors hover:text-[#2FB8B0]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/VictorPortugues07"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block py-3 font-mono text-sm uppercase tracking-[0.15em] text-[#EDEEF0]"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
