import Footer from "../components/layout/Footer";
import Header from "../components/layout/Navbar";
import ReservationForm from "../components/ReservationSection/reservation-form";
import ReservationHero from "../components/ReservationSection/reservation-hero";
import ReservationInfo from "../components/ReservationSection/reservation-info";

export default function ReservationPage() {
  return (
    <main>
      <Header />
      <ReservationHero />
      <ReservationForm />
      <ReservationInfo />
      <Footer />
    </main>
  )
}

