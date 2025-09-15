import Header from './components/layout/Header';
import Hero from './components/container/HeroSection';
import AboutSection from './components/container/AboutSection/About';
import ProcessSection from './components/container/ProcessSection/Process';
import Footer from './components/layout/Footer';

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
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
