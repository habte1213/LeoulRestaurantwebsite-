import About from "../components/layout/About";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Menu from "../components/layout/Menu";
import Navbar from "../components/layout/Navbar";
import Reservation from "../components/layout/Reservation";
import Testimonial from "../components/layout/Testimonial";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Menu/>
      <Reservation />
      <Testimonial/>
      <Footer />
    </main>
  )
}

