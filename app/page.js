import Intro from '../components/landing-section/intro/intro';
import About from "@/components/landing-section/about-me/about";
import Stack from "@/components/landing-section/stack/stack";
import Featured from "@/components/landing-section/featured/featured";
import Gallery from "@/components/landing-section/gallery/gallery";
import Contact from "@/components/landing-section/contact/contact";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
    <Header/>
    <main className='container'>
      <Intro />
      <About />
      <Stack />
      <Featured />
      <Gallery />
      <Contact/>
    </main>
    </>
  )
}
