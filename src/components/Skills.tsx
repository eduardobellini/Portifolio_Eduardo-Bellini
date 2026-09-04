import { ArrowDownRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, softSkills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        <SectionHeading index="03" kicker="Habilidades" title={<>Stack para construir. <em>Postura para evoluir.</em></>}
          description="Tecnologia importa. A forma de aprender, colaborar e perseverar também." dark />
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article key={group.title}>
              <div className="skill-number">0{index + 1}<ArrowDownRight size={18} /></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="soft-skills">
          <div><p className="mini-label">Soft skills</p><h3>Como eu trabalho</h3></div>
          <ul>{softSkills.map((skill) => <li key={skill}><Check size={16} />{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
