import ContactForm from "../components/ContactSection/contact-form";
import ContactHero from "../components/ContactSection/contact-hero";
import ContactInfo from "../components/ContactSection/contact-info";
import ContactMap from "../components/ContactSection/contact-map";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Navbar";


export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <Footer />
    </main>
  )
}

