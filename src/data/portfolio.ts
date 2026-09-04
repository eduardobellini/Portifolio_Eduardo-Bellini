export const profile = {
  name: "Eduardo Bellini",
  role: "Desenvolvedor Full Stack",
  email: "eduardombellini@gmail.com",
  github: "https://github.com/eduardobellini",
  linkedin: "https://www.linkedin.com/in/eduardo-bellini-9a566423a/",
  location: "Paraíba, Brasil",
};

export type Project = {
  repo: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  outcome: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    repo: "salao_agendamento",
    title: "Agenda Beauty",
    eyebrow: "Produto real · Full stack",
    description:
      "Sistema completo de agendamento para salão de beleza, criado do zero para organizar serviços, horários e a jornada do cliente.",
    stack: ["React 18", "Vite", "Tailwind", "Supabase"],
    outcome: "Aplicação publicada e utilizável",
    demo: "https://salao-agendamento-one.vercel.app",
    featured: true,
  },
  {
    repo: "Ct_do_Mago",
    title: "CT do Mago",
    eyebrow: "Esporte · Em evolução",
    description:
      "Experiência mobile-first para gerenciar e organizar um ranking de vôlei, com persistência de dados e interações por arrastar e soltar.",
    stack: ["React 19", "Firebase", "dnd kit", "Vite"],
    outcome: "Foco em experiência mobile",
  },
  {
    repo: "cyber-web-front",
    title: "Cyber Web",
    eyebrow: "Arquitetura · Frontend",
    description:
      "Interface TypeScript de uma aplicação dividida em frontend e backend, exercitando integração entre camadas e organização de produto.",
    stack: ["TypeScript", "Frontend", "API REST"],
    outcome: "Integração ponta a ponta",
  },
  {
    repo: "cyber-web-back",
    title: "Cyber Web API",
    eyebrow: "Backend · API",
    description:
      "Backend em Express com modelagem de dados e práticas de API REST, separado da camada visual para facilitar manutenção e evolução.",
    stack: ["Node.js", "Express", "Prisma", "MongoDB"],
    outcome: "API e dados desacoplados",
  },
];

export type Certificate = {
  title: string;
  category: "AWS & Cloud" | "Desenvolvimento" | "Eventos & Workshops";
  url: string;
};

export const certificates: Certificate[] = [
  { title: "Aprenda a Criar Servidores Virtuais com EC2 na Amazon AWS", category: "AWS & Cloud", url: "https://drive.google.com/file/d/1NUHbe8ID4ystE1B-5NbUfq1VaevP_9bE/view?usp=drive_web" },
  { title: "Amazon Q Developer for Programmers and DevOps AWS AI coding", category: "AWS & Cloud", url: "https://drive.google.com/file/d/13z7u386bMLKhMnQcZQw8YIYw_zZZF3Wg/view?usp=drive_web" },
  { title: "AWS Certified Cloud Practitioner", category: "AWS & Cloud", url: "https://drive.google.com/file/d/1I1N8vWx_RdcIizzRmpssbOoAzt-JOsbHo/view?usp=drive_web" },
  { title: "AWS Partner: Accreditation (Technical) (Português)", category: "AWS & Cloud", url: "https://drive.google.com/file/d/17g1kzR2ccxM9rQpGNyBkfcnZghzkrNb7/view?usp=drive_web" },
  { title: "AWS Partner: Cloud Economics (Português)", category: "AWS & Cloud", url: "https://drive.google.com/file/d/17Pu_jcOMGmtliHF0QH3twxB7AZ_CF8iu/view?usp=drive_web" },
  { title: "AWS Partner: Sales Accreditation (Business) (Português)", category: "AWS & Cloud", url: "https://drive.google.com/file/d/1ItvFJyUcHZEEeQolPYki_nniHyuElZ-6/view?usp=drive_web" },
  { title: "Computação em Nuvem Amazon AWS para Iniciantes", category: "AWS & Cloud", url: "https://drive.google.com/file/d/17j6QX6OECn3HjDNOqJMAvvrw9m05vQBo/view?usp=drive_web" },
  { title: "Full stack Journey (Node.js & React) — AWS Cloud Context", category: "AWS & Cloud", url: "https://drive.google.com/file/d/1a68hoZkmuwOJyXsPvToVVJHFwkgeFGwG/view?usp=drive_web" },
  { title: "Projeto Guided: Hospedando um Site Estático no AWS S3", category: "AWS & Cloud", url: "https://drive.google.com/file/d/17mrrQM3uZEweTDVK8-wKuD1XO7cb8tjJ/view?usp=drive_web" },
  { title: "Aprenda Git e GitHub em 3 dias + Projetos reais", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1WJ8EQBO6mJ7lGnwyV8rPYrQBxjQpG_Lp/view?usp=drive_web" },
  { title: "Aprenda TypeScript em 7 Dias com Projetos Práticos", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1-sGT6wi_SceYdK4HcBb77JYe03SsuSwK/view?usp=drive_web" },
  { title: "Banco de Dados SQL do Zero ao Avançado + Projetos Reais", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1-ZhoQr9oYC1qNgXwsV61V3IBOqlIJOX8/view?usp=drive_web" },
  { title: "CSS Flexbox — Flexible Box Layout", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1P-zRalKUqZoO0JT4hJIVicHB0gNnfDW6/view?usp=drive_web" },
  { title: "Curso Completo do Desenvolvedor NodeJS e MongoDB", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1zgz4T-S_cGR3nayJZCrLM6mZGTNhq1dM/view?usp=drive_web" },
  { title: "Curso de Programação JavaScript + Projetos Reais", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1uWtoROBuJRCD48NSAuDHbHm8vPrCKBCA/view?usp=drive_web" },
  { title: "Curso completo de APIs com Node.js, Express, MongoDB e SQL", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1xGUrTiUGPHlYT2B3-HeJUhjiwdrHbE_e/view?usp=drive_web" },
  { title: "Docker Completo do Zero ao Avançado", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1DQje9j8rghk1_yG_5Vb44B9HvHk8po2s/view?usp=drive_web" },
  { title: "Git & GitHub — The Practical Guide", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1VMkOlOblGSrbkHMFv5dEpsnqqWH5FLF9/view?usp=drive_web" },
  { title: "HTML e CSS: O Início (incluindo 5 Projetos)", category: "Desenvolvimento", url: "https://drive.google.com/file/d/1k6AQVqwlEI4uZ0T9twsE9pvCP_pX0ekg/view?usp=drive_web" },
  { title: "Inova UNIESP 2025 — Participação geral", category: "Eventos & Workshops", url: "https://drive.google.com/file/d/1O4KU2QvT9abIm074ZTK3p1dVjpKKka66/view?usp=drive_web" },
  { title: "Inteligência Artificial aplicada aos negócios", category: "Eventos & Workshops", url: "https://drive.google.com/file/d/1Gb6fKvfPo1w85fDQnUNlh9XeXx7xFDFo/view?usp=drive_web" },
  { title: "O superpoder de falar bem: como comunicar para conquistar", category: "Eventos & Workshops", url: "https://drive.google.com/file/d/1O0j_-r0PvhBHQsZh5LHf42lfO35QIIv_/view?usp=drive_web" },
  { title: "Empregabilidade através de habilidades comportamentais — QUARK & SEBRAE", category: "Eventos & Workshops", url: "https://drive.google.com/file/d/13ABUYnXI0KuhE_Q2S6BS9dAUWc6fMEDZ/view?usp=drive_web" },
];

export const skillGroups = [
  { title: "Frontend", description: "Interfaces rápidas, responsivas e acessíveis.", skills: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend & dados", description: "APIs e persistência para produtos completos.", skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "SQL", "MongoDB", "Supabase"] },
  { title: "Cloud & processo", description: "Entrega organizada, da máquina local à nuvem.", skills: ["AWS", "Docker", "Git / GitHub", "Scrum", "VS Code"] },
];

export const softSkills = [
  "Multitarefa e disciplina",
  "Versatilidade entre perfis",
  "Iniciativa e aprendizado autodidata",
  "Resultado com atenção aos detalhes",
  "Persistência",
];
