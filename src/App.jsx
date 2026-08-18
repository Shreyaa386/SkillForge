import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProblemSection from "./components/ProblemSection"
import HowItWorks from "./components/HowItWorks"
import ProductShowcase from "./components/ProductShowcase"
import RoadmapPreview from "./components/RoadmapPreview"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <RoadmapPreview />
        <ProductShowcase />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App