import React from "react";
import "./App.css";
import "./styles/inventia.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";

// Service Pages
import Cybersecurity from "./pages/services/Cybersecurity";
import RfidBarcode from "./pages/services/RfidBarcode";
import Networking from "./pages/services/Networking";
import ITInfrastructure from "./pages/services/ITInfrastructure";

// Company Pages
import Partners from "./pages/company/Partners";
import CaseStudies from "./pages/company/CaseStudies";

// Resource Pages
import Blog from "./pages/resources/Blog";
import Whitepapers from "./pages/resources/Whitepapers";
import Documentation from "./pages/resources/Documentation";
import Support from "./pages/resources/Support";

// Components
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import StickyHeader from "./components/StickyHeader";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <div className="App bg-gradient-to-br from-[#f8faff] via-[#bed3ff]/30 to-[#e8f0ff] overflow-x-hidden">
        {/* Custom Cursor - Desktop Only */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        {/* Sticky Header with Logo */}
        <StickyHeader />

        {/* Scroll Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX }}
        />

        {/* Grid Overlay */}
        <div className="grid-overlay" />

        {/* Main Content with Routing */}
        <main className="pt-16 lg:pt-20">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Service Pages */}
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/rfid-barcode" element={<RfidBarcode />} />
            <Route path="/services/networking" element={<Networking />} />
            <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
            
            {/* Company Pages */}
            <Route path="/partners" element={<Partners />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            
            {/* Resource Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/whitepapers" element={<Whitepapers />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
