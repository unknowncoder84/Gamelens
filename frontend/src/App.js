import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import FeaturesPage from "@/pages/FeaturesPage";
import CricketPage from "@/pages/features/CricketPage";
import PickleballPage from "@/pages/features/PickleballPage";
import TennisPage from "@/pages/features/TennisPage";
import FootballPage from "@/pages/features/FootballPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import DashboardPage from "@/pages/DashboardPage";
import PricingPage from "@/pages/PricingPage";
import BlogPage from "@/pages/BlogPage";
import VideoPage from "@/pages/VideoPage";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";

import AdminPanel from "@/components/AdminPanel";
import TechnologyPage from "@/components/TechnologyPage";
import BlogDetail from "@/components/BlogDetail";
import PlanSignup from "@/components/PlanSignup";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main layout with shared navbar */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/cricket" element={<CricketPage />} />
            <Route path="/features/pickleball" element={<PickleballPage />} />
            <Route path="/features/tennis" element={<TennisPage />} />
            <Route path="/features/football" element={<FootballPage />} />
            <Route path="/products/how-it-works" element={<HowItWorksPage />} />
            <Route path="/products/dashboard" element={<DashboardPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/products/video" element={<VideoPage />} />
            <Route path="/resources/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/plan/:planId" element={<PlanSignup />} />
          </Route>

          {/* Admin panel without shared navbar */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
