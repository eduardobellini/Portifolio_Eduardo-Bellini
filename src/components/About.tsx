import { ArrowDownRight, Cloud, Code2, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const education = [
  { course: "Ciência da Computação", detail: "Bacharelado em andamento", date: "Conclusão · fev/2028" },
  { course: "Sistemas para Internet", detail: "Tecnólogo concluído", date: "Concluído" },
  { course: "Administração", detail: "Formação concomitante", date: "Em andamento" },
];

export default function About() {
  return (
    <section id="sobre" className="section section-light">
      <div className="container">
        <SectionHeading index="01" kicker="Sobre mim" title={<>Curiosidade que vira <em>código.</em></>}
          description="Uma trajetória construída entre tecnologia, produto e visão de negócio." dark />
        <div className="about-layout">
          <div className="about-story">
            <p className="about-intro">Sou desenvolvedor em início de carreira, com formação em Sistemas para Internet e uma base que combina <strong>engenharia de software, cloud e administração.</strong></p>
            <p>Gosto de compreender o problema antes da ferramenta. Na prática, isso significa construir a interface, integrar a API, organizar os dados e pensar em como o produto será usado de verdade. Busco uma oportunidade júnior, trainee ou estágio para evoluir junto a um time e entregar valor desde cedo.</p>
            <div className="about-principles">
              <article><Code2 /><span>Produto completo</span><small>Do pixel ao banco de dados.</small></article>
              <article><Cloud /><span>Cloud mindset</span><small>Base AWS certificada.</small></article>
            </div>
          </div>
          <div className="education-card">
            <div className="education-title"><GraduationCap size={20} /><span>Formação acadêmica</span></div>
            {education.map((item, index) => (
              <article key={item.course}><span className="education-index">0{index + 1}</span><div><h3>{item.course}</h3><p>{item.detail}</p></div><small>{item.date}</small></article>
            ))}
            <div className="education-note"><ArrowDownRight size={20} /> Aprendizado contínuo, dentro e fora da sala de aula.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
