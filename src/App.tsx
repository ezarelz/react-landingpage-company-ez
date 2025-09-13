import Header from './components/layout/Header';

import Hero from './components/container/HeroSection';
import AboutSection from './components/container/AboutSection/About';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}
