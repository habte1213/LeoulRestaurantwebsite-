import AboutChefs from "../components/AboutSection/about-chefs";
import AboutHero from "../components/AboutSection/about-hero";
import AboutStory from "../components/AboutSection/about-story";
import AboutTestimonials from "../components/AboutSection/about-testimonials";
import AboutValues from "../components/AboutSection/about-values";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Navbar";


export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutChefs />
      <AboutValues />
      <AboutTestimonials />
      <Footer />
    </main>
  )
}

