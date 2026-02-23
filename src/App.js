import React, { useEffect } from "react";
import "./App.css";
import "./styles/inventia.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

const DEFAULT_META = {
  title: "Inventia | Enterprise IT, RFID, and Cybersecurity Solutions",
  description:
    "Inventia delivers enterprise barcode, RFID, networking, IT infrastructure, and cybersecurity solutions built for secure growth.",
};

const META_BY_PATH = {
  "/": {
    title: "Inventia | End-to-End Barcode, RFID, and IT Security Solutions",
    description:
      "Discover end-to-end barcode, RFID, wireless infrastructure, IT automation, and cybersecurity solutions for modern enterprises.",
  },
  "/about": {
    title: "About Inventia | Our Mission and Team",
    description:
      "Learn about Inventia, our mission, values, and global team delivering secure digital infrastructure and enterprise technology solutions.",
  },
  "/careers": {
    title: "Careers at Inventia | Join Our Team",
    description:
      "Explore career opportunities at Inventia and help build enterprise cybersecurity, RFID, networking, and IT infrastructure solutions.",
  },
  "/privacy": {
    title: "Privacy Policy | Inventia",
    description:
      "Read Inventia's privacy policy and understand how we collect, use, and protect your personal and business information.",
  },
  "/terms": {
    title: "Terms of Service | Inventia",
    description:
      "Review Inventia's terms of service for use of our website, products, and enterprise technology services.",
  },
  "/faq": {
    title: "FAQ | Inventia Support and Services",
    description:
      "Find answers to frequently asked questions about Inventia services, pricing, implementation, and ongoing support.",
  },
  "/services/cybersecurity": {
    title: "Enterprise Cybersecurity Services | Network, Endpoint & Cloud Security",
    description:
      "Eenterprise-grade Cybersecurity services including Network and Cloud Security. VAPT, Regulatory Audit, ISO Implementation & Certification, DPDP & Data Privacy Services.",
  },
  "/services/rfid-barcode": {
    title: "End-To-End Barcode Solutions & RFID Solutions Provider",
    description:
      "Barcode and RFID Solutions for Inventory Management System (IMS), Warehouse Management System (WMS), Zebra Printers, Zebra Scanners,Barcode Labels, Barcode Ribbon.",
  },
  "/services/networking": {
    title: "Enterprise Networking Infrastructure Solutions | LAN, WAN & Wireless",
    description:
      "We Design, deployment, and management of enterprise networking infrastructure including LAN, WAN, structured cabling, Wireless, and data center networks.",
  },
  "/services/it-infrastructure": {
    title: "IT Infrastructure & Cloud Services | Scalable Enterprise IT Solutions",
    description:
      "Modern IT infrastructure and Cloud Solutions Including Servers, Virtualization, Hybrid Cloud, Virtual machines and Enterprise IT Modernization Services.",
  },
  "/partners": {
    title: "Partners | Inventia",
    description:
      "See how Inventia collaborates with strategic technology partners to deliver trusted enterprise solutions.",
  },
  "/case-studies": {
    title: "Case Studies | Inventia Success Stories",
    description:
      "Explore Inventia case studies to see real-world outcomes from enterprise RFID, networking, and cybersecurity implementations.",
  },
  "/blog": {
    title: "Inventia Blog | Insights and Updates",
    description:
      "Read the latest Inventia insights on cybersecurity, RFID, networking, and enterprise IT transformation.",
  },
  "/whitepapers": {
    title: "Whitepapers | Inventia Resources",
    description:
      "Access Inventia whitepapers on enterprise security, infrastructure modernization, and technology strategy.",
  },
  "/documentation": {
    title: "Documentation | Inventia",
    description:
      "Browse Inventia documentation for implementation details, product guidance, and technical reference materials.",
  },
  "/support": {
    title: "Support | Inventia",
    description:
      "Get support from Inventia for deployment, troubleshooting, and ongoing management of your technology solutions.",
  },
};

function toTitleCase(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildDynamicTitle(pathname) {
  if (pathname === "/") {
    return META_BY_PATH["/"].title;
  }

  const segmentTitle = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => toTitleCase(segment.replace(/-/g, " ")))
    .join(" | ");

  return `${segmentTitle} | Inventia`;
}

function getRouteMeta(pathname) {
  if (META_BY_PATH[pathname]) {
    return META_BY_PATH[pathname];
  }

  return {
    ...DEFAULT_META,
    title: buildDynamicTitle(pathname),
  };
}

function RouteMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(location.pathname);
    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", meta.description);
  }, [location.pathname]);

  return null;
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <RouteMeta />
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
