import { projects, type Project } from "@/data/portfolio";

export type GithubProject = Project & { repoUrl: string; updatedAt?: string };

type GithubRepo = { name: string; html_url: string; updated_at: string };

export async function getGithubProjects(): Promise<GithubProject[]> {
  const fallback = projects.map((project) => ({
    ...project,
    repoUrl: `https://github.com/eduardobellini/${project.repo}`,
  }));

  try {
    const response = await fetch("https://api.github.com/users/eduardobellini/repos?sort=updated&per_page=100", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return fallback;
    const repositories = (await response.json()) as GithubRepo[];
    const byName = new Map(repositories.map((repo) => [repo.name.toLowerCase(), repo]));

    return projects.map((project) => {
      const live = byName.get(project.repo.toLowerCase());
      return {
        ...project,
        repoUrl: live?.html_url ?? `https://github.com/eduardobellini/${project.repo}`,
        updatedAt: live?.updated_at,
      };
    });
  } catch {
    return fallback;
  }
}
