import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const page = () => {
  return (
    <>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
      <Contact/>
      <Divider/>
    </>
  )
}

export default page