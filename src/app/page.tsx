import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

async function getGithubRepos() {
  // Tentar buscar os repositórios reais do github
  try {
    const res = await fetch("https://api.github.com/users/eduardobellini/repos?sort=updated&per_page=6", {
      cache: "force-cache", // revalidar a cada 1 hora
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error("Erro ao buscar repositórios, usando fallback estático", error);
    // Dados fallback caso a API falhe
    return [
      {
        id: 1,
        name: "Meu Portfólio",
        description: "Meu portfólio pessoal construído com Next.js, TailwindCSS e TypeScript.",
        html_url: "https://github.com/eduardobellini",
        language: "TypeScript",
        stargazers_count: 0,
      },
      {
        id: 2,
        name: "Projeto Frontend",
        description: "Uma aplicação frontend moderna e responsiva.",
        html_url: "https://github.com/eduardobellini",
        language: "React",
        stargazers_count: 0,
      },
      {
        id: 3,
        name: "API Backend",
        description: "API robusta construída para servir dados para aplicações web.",
        html_url: "https://github.com/eduardobellini",
        language: "Node.js",
        stargazers_count: 0,
      }
    ];
  }
}

type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

export default async function Home() {
  const repos = await getGithubRepos();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-20">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Olá, sou <span className="text-blue-600 dark:text-blue-400">Eduardo Bellini</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor Júnior (Front-end, Back-end, Full Stack).
            Apaixonado por criar soluções web modernas e eficientes.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/eduardobellini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:seu-email@exemplo.com"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Mail size={28} />
            </a>
          </div>
          <div className="animate-bounce pt-20 text-gray-400">
            <p>Role para baixo</p>
            <div className="w-px h-12 bg-gray-300 mx-auto mt-4 dark:bg-gray-600"></div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="min-h-screen py-20 px-6 sm:px-12 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sou um desenvolvedor em início de carreira, buscando oportunidades como Júnior, Trainee ou Estagiário.
              Tenho muita vontade de aprender e agregar valor à equipe. Gosto de trabalhar tanto com o visual
              (Front-end) quanto com a lógica (Back-end) das aplicações, me desenvolvendo como Full Stack.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Estou sempre buscando me atualizar com as tecnologias mais modernas do mercado e adoro
              resolver problemas através de código.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'Git'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Comunicação', 'Trabalho em Equipe', 'Proatividade', 'Resolução de Problemas', 'Vontade de Aprender'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium dark:bg-purple-900/30 dark:text-purple-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Meus Projetos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo: Repository) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                className="group block p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all dark:bg-gray-900 dark:border-gray-800 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <FaGithub size={24} className="text-gray-700 dark:text-gray-300" />
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm h-[60px]">
                  {repo.description || "Sem descrição disponível."}
                </p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    {repo.language || "N/A"}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Eduardo Bellini. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
