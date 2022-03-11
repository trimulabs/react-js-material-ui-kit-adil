import Header from "../components/HeaderComponents/Header";
import Footer from "../components/FooterComponents/Footer";
import TechButtons from "../components/AvailableSectionComponents/TechButtons";
import SocialButtons from "../components/AvailableSectionComponents/SocialButtons";
import DownloadSection from "../components/DownloadSectionComponents/DownloadSection";

function Home() {
  return (
    <div className="App">
      <Header />
      <DownloadSection />
      <TechButtons />
      <SocialButtons />
      <Footer />
    </div>
  );
}

export default Home;
