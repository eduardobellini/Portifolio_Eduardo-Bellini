import { ArrowUpRight, Code2, Radio } from "lucide-react";
import type { GithubProject } from "@/lib/github";
import SectionHeading from "@/components/SectionHeading";

function formattedDate(date?: string) {
  if (!date) return "GitHub";
  return new Intl.DateTimeFormat("pt-BR", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}

export default function Projects({ projects }: { projects: GithubProject[] }) {
  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <SectionHeading index="02" kicker="Projetos selecionados" title={<>Ideias que saíram <em>do papel.</em></>}
          description="Projetos reais e estudos práticos. Os links e a última atualização vêm dos repositórios públicos no GitHub." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.repo}>
              <div className="project-top"><span>{String(index + 1).padStart(2, "0")}</span><span><Radio size={13} />{formattedDate(project.updatedAt)}</span></div>
              <div className="project-body">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-bottom">
                <p>{project.outcome}</p>
                <div>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight size={15} /></a>}
                  <a href={project.repoUrl} target="_blank" rel="noreferrer"><Code2 size={15} /> Código</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link" href="https://github.com/eduardobellini?tab=repositories" target="_blank" rel="noreferrer">
          Ver todos os repositórios no GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
