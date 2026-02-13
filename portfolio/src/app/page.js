import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Exp from "@/components/Exp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Exp />
      <About />
      <Contact />
      {/* <Blogs /> */}
    </main>
  );
}
