import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Header />
      <main className="bg-customWhite">
        <HeroSection />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App
