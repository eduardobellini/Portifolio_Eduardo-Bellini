import { ArrowUpRight, Award, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { certificates, type Certificate } from "@/data/portfolio";

const categories: Certificate["category"][] = ["AWS & Cloud", "Desenvolvimento", "Eventos & Workshops"];

export default function Courses() {
  return (
    <section id="cursos" className="section courses-section">
      <div className="container">
        <SectionHeading index="04" kicker="Cursos & certificados" title={<>Aprendizado <em>contínuo.</em></>}
          description={`${certificates.length} formações entre desenvolvimento, cloud e habilidades de negócio.`} />
        <div className="aws-highlight">
          <div className="aws-icon"><Award size={28} /></div>
          <div><p>Certificação profissional</p><h3>AWS Certified Cloud Practitioner</h3><span>Válida até novembro de 2028</span></div>
          <a href="https://drive.google.com/file/d/1I1N8vWx_RdcIizzRmpssbOoAzt-JOsbHo/view?usp=drive_web" target="_blank" rel="noreferrer">Ver credencial <ArrowUpRight size={16} /></a>
        </div>
        <div className="course-groups">
          {categories.map((category, groupIndex) => (
            <div className="course-group" key={category}>
              <div className="course-group-title"><span>0{groupIndex + 1}</span><h3>{category}</h3><small>{certificates.filter((item) => item.category === category).length} certificados</small></div>
              <div className="course-list">
                {certificates.filter((item) => item.category === category).map((certificate) => (
                  <a href={certificate.url} target="_blank" rel="noreferrer" key={certificate.title}>
                    <BadgeCheck size={17} /><span>{certificate.title}</span><ArrowUpRight className="course-arrow" size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
