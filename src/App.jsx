import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Components/Header"
import Herosection from "./Components/Herosection"
import ProjectsSection from "./Components/ProjectsSection"
import ContactForm from "./Components/Contact"

import Parents from "./Components/Parents"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Parents/>} />
          <Route path="/about" element={<Herosection />} />
          <Route path="/project" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactForm />} />

        </Routes>

      </BrowserRouter>
    </>

  )
}
export default App
