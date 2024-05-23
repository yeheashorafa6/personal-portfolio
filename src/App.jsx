import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Navbar/Header'
import Hero from './Component/Hero/Hero'
import Skills from "./Component/Skills/Skills"
import Projects from "./Component/Projects/Projects"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"

function App() {

  return (
    <>
    {/* HEADER */}
    <Header />
    {/* == HEADER == */}

    {/* SECTIONS */}
    <main>

        {/* HERO SECTION */}
        <Hero/>
        {/* == HERO SECTION == */}

        {/* SKILLS SECTION */}
        <Skills/>
        {/* == SKILLS SECTION == */}

        {/* PROJECTS SECTION */}
        <Projects/>
        {/* == PROJECTS SECTION == */}

        {/* CONTACT SECTION */}
        <Contact/>
        {/* == CONTACT SECTION == */}

    </main>
    {/* == SECTION == */}

    {/* FOOTER SECTION */}
    <Footer/>
    {/* == FOOTER SECTION == */}

       
    </>
  )
}

export default App
