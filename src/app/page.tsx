import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getGithubProjects } from "@/lib/github";

export default async function Home() {
  const projects = await getGithubProjects();

  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Courses />
      <Contact />
      <Footer />
    </main>
  );
}
