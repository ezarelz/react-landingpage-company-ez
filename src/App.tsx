import Header from './components/layout/Header';
import Hero from './components/container/HeroSection';
import AboutSection from './components/container/AboutSection/About';

import Footer from './components/layout/Footer';
import { Services } from './components/ServiceSection';
import Contact from './components/container/ContactSection';
import IndustrySection from './components/IndustrySection/Industry';
import ProjectsSection from './components/ProjectsSection';
import FAQSection from './components/container/FaqSection/Faq';
import ProcessSection from './components/container/ProcessSection/Process';
import Testimonials from './components/container/TestimonialsSection/Testimonials';

export default function App() {
  return (
    <div className='min-h-dvh bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300'>
      {/* HEADER */}
      <header>
        <Header />
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <Services />
        <IndustrySection />
        <ProjectsSection />
        <Testimonials />
        <FAQSection />
        {/* Contact */}
        <Contact />
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
