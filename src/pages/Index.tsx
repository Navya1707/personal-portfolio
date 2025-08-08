import Hero from "@/components/sections/Hero";
import ProjectsRow from "@/components/sections/ProjectsRow";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.png";
import gslogo from "@/assets/gslogo.png";
import type { ProjectItem } from "@/components/sections/ProjectsRow";

const Index = () => {
  const projects: ProjectItem[] = [
    { image: project1, title: "AI-Powered PDF Chatbot", description: "PDF based Q&A chatbot." },
    { image: project2, title: "Stock Price Prediction with Sentiment using NLP", description: "Stock price forecasting using Reddit/News sentiment." },
    { image: project3, title: "Weekly Newsletter system", description: "Weekly automated emails of curated AI content." },
    { image: project4, title: "Call-Center feedback analysis", description: "Sentiment analysis on call center audio." },
    { image: project5, title: "Personal Portfolio", description: "This website :)." },
  ];

  const workexp: ProjectItem[] = [
    { image: gslogo, title: "My Work Experience", description: "Explore my career timeline.", href: "/experience", target: "_blank" },
  ];
  return (
    <div>
      {/* Accessible SEO structure */}
      <Hero />

      <main>
        

        <section id="about" className="container py-12 md:py-16">
          <article className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-3 story-link">About</h2>
            <p className="text-muted-foreground">
              Technologist. Problem Solver. Lifelong Learner. I design scalable systems and craft data-driven solutions that turn complexity into clarity — from AI-first healthcare platforms to predictive financial models. Currently pursuing my Master’s in Data Science at the University of Washington, I’m passionate about building technology that scales, solves real problems, and makes a meaningful impact.
            </p>
          </article>
          <a
    href="/resume.pdf"
    download
    className="inline-block mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
  >
    📄 Download My Resume
  </a>
        </section>
        <ProjectsRow id="workex" title="Career Jouney" items={workexp} />

        <ProjectsRow id="projects" title="My Projects" items={projects} />

        <section id="contact" className="container pb-16">
          <h2 className="text-2xl font-semibold mb-3 story-link">Contact</h2>
          <p className="text-muted-foreground mb-4">Ready to collaborate? Email me at <a className="story-link" href="mailto:navya.srivastava1707@gmail.com">navya.srivastava1707@gmail.com</a>.</p>
          <p className="text-muted-foreground mb-4">Linkedin: <a className="story-link" href="https://linkedin.com/in/navya-srivastava-5650b41a5">https://linkedin.com/in/navya-srivastava-5650b41a5</a>.</p>
        
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Navya Srivastava • Netflix‑style portfolio
        </div>
      </footer>
    </div>
  );
};

export default Index;
