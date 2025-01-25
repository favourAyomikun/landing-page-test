import LandingPage from "./landing-page/page";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="page-sectionn">
      <Navbar />
      <LandingPage />
    </div>
  );
}
