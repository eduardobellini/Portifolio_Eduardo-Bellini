"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#cursos", label: "Cursos" },
];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Eduardo Bellini — início">
            <span className="brand-mark">EB</span><span>Eduardo Bellini</span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <a className="nav-cta" href="#contato">
            Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button className="menu-button" type="button" aria-expanded={menuOpen}
            aria-controls="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação mobile">
            <div className="container mobile-menu-inner">
              {[...links, { href: "#contato", label: "Contato" }].map((link, index) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>{link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      {children}
    </div>
  );
}
