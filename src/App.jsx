
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

// Home page — unique homepage content
function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Contact />
    </>
  );
}

// About page
function AboutPage() {
  return <About />;
}

// Services page
function ServicesPage() {
  return <Services />;
}

// Portfolio page
function WorkPage() {
  return (
    <>
      <Work />
      <Testimonials />
    </>
  );
}

// Contact page
function ContactPage() {
  return <Contact />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
