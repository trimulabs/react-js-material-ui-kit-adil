import Header from "../components/HeaderComponents/Header";
import Footer from "../components/FooterComponents/Footer";
import DownloadSection from "../components/DownloadSectionComponents/DownloadSection";
import AvailableSection from "../components/AvailableSectionComponents/AvailableSection";
import CompanyLogos from "../components/CompanySection/CompanyLogos";
import { Paper } from "@mui/material";
import Review from "../components/ReviewSection/ReviewSection";
import Trusted from "../components/TrustedSection/TrustedSection";
import FeaturesMain from "../components/FirstSection/FeaturesMain";
import DocumentationMain from "../components/DocumentationSectionComponents/DocumentationMain";
import DesignBlocks from "../components/CollectionSectionComponents/CollectionSectionMain";

const style = {
  paperStyle: {
    marginTop: "-60px",
    marginLeft: "24px",
    marginRight: "24px",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.8)",
    color: "rgb(52, 71, 103)",
    borderRadius: "0.75rem",
    backdropFilter: "saturate(200%) blur(30px)",
  },
};
function Home() {
  return (
    <div className="App">
      <Header />
      <Paper elevation={3} style={style.paperStyle}>
        <FeaturesMain />
        <DesignBlocks />
        <DocumentationMain />
        <Trusted />
        <Review />
        <CompanyLogos />
        <DownloadSection />
        <AvailableSection />
      </Paper>
      <Footer />
    </div>
  );
}

export default Home;
