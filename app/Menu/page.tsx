import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ChefsSpecial from "../components/MenuSection/ChefsSpecial";
import MenuContent from "../components/MenuSection/MenuContent";
import MenuDownload from "../components/MenuSection/MenuDownload";
import MenuHero from "../components/MenuSection/menuhero";


export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <MenuHero />
      <MenuContent />
      <ChefsSpecial />
      <MenuDownload />
      <Footer />
    </main>
  )
}

