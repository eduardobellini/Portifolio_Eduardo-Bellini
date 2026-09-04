import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Link, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" />Disponível para oportunidades</div>
          <p className="hero-kicker">Desenvolvedor Full Stack · Brasil</p>
          <h1>Criando da <span>interface à API.</span></h1>
          <p className="hero-lead">
            Transformo ideias em produtos web funcionais, responsivos e bem construídos —
            com React, Node.js e a nuvem AWS.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Explorar projetos <ArrowDown size={17} /></a>
            <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <Image src="https://github.com/eduardobellini.png" alt="Retrato de Eduardo Bellini"
              fill priority sizes="(max-width: 900px) 78vw, 420px" />
            <div className="portrait-shade" />
            <p className="portrait-code">01 / FULL STACK</p>
            <div className="portrait-card"><span>Construindo hoje</span><strong>Produtos que resolvem.</strong></div>
          </div>
          <div className="portrait-orbit" aria-hidden="true"><span>React</span><span>Node.js</span><span>AWS</span></div>
        </div>
      </div>
      <div className="container hero-meta">
        <span><MapPin size={14} /> {profile.location}</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Eduardo Bellini"><Code2 size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Eduardo Bellini"><Link size={18} /></a>
        </div>
      </div>
    </section>
  );
}
