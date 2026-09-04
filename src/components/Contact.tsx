import { ArrowUpRight, Code2, Link, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-grid" aria-hidden="true" />
      <div className="container contact-inner">
        <p className="section-label"><span>05</span>Contato</p>
        <h2>Tem um desafio?<br /><em>Vamos conversar.</em></h2>
        <p className="contact-lead">Estou aberto a oportunidades júnior, trainee, estágio e projetos em que eu possa aprender rápido e contribuir de verdade.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={20} />{profile.email}<ArrowUpRight size={20} /></a>
        <div className="contact-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Link size={18} />LinkedIn<ArrowUpRight size={14} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} />GitHub<ArrowUpRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}
