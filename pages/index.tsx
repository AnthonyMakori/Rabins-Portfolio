import Head from "next/head";
import About from "../components/About/about";
import Facts from "../components/Facts/fact";
import Projects from "../components/Experience/projects";
import Home from "../components/Home/home";
import Skills from "../components/skills/skills";
import Hobbies from "../components/Hobbies/hobbies";
import Testimonials from "../components/Testimonials/testimonials";
import Contact from "../components/Contact/contact";
import Contact2 from "../components/companycontact/contact2";

export default function HomePage() {
    return (
      <div className="">
        <Head>
          <title>Rabin Lucas</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/logos/Rabin.jpg"/>
        </Head>
        
        <Home />
        <About />
        <Facts />
        <Projects />
        <Skills />
        <Hobbies />
        <Testimonials />
        <Contact />
        <Contact2 />
      </div>
    );
}
