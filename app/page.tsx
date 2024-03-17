import Hero from "@/app/components/hero/hero";
import Detailed from "@/app/components/detailed/detailed";
import Projects from "@/app/components/projects/projects";
import Contact from "@/app/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Detailed/>
      <Projects/>
      <Contact/>
    </main>
  );
}
