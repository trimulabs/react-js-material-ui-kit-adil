import Header from "../components/HeaderComponents/Header";
import Footer from "../components/FooterComponents/Footer";
import DownloadSection from "../components/DownloadSectionComponents/DownloadSection";
import AvailableSection from "../components/AvailableSectionComponents/AvailableSection";
import CompanyLogos from "../components/CompanySection/CompanyLogos";
import { Paper } from "@mui/material";
import Stars from "../components/ReviewSection/StarComponent";

function Home() {
  return (
    <div className="App">
      <Header />
      <Paper elevation={3}>
        <CompanyLogos />
        <DownloadSection />
        <AvailableSection />
      </Paper>
      <Footer />
    </div>
  );
}

export default Home;
