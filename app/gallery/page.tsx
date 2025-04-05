import GalleryEvents from "../components/GallarySection/GalleryEvents";
import GalleryGrid from "../components/GallarySection/GalleryGrid";
import GalleryHero from "../components/GallarySection/GalleryHero";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Navbar";

export default function GalleryPage() {
  return (
    <main>
      <Header/>
      <GalleryHero/>
      <GalleryGrid/>
      <GalleryEvents/>
      <Footer/>
    </main>
  )
}


