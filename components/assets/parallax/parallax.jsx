import Intro from "@/components/landing-section/intro/intro";
import About from "@/components/landing-section/about-me/about";
import Stack from "@/components/landing-section/stack/stack";
import Contact from "@/components/landing-section/contact/contact";
import style from "./parallax.module.scss";
import Projects from "@/components/landing-section/projects/projects";


function Section({childElement}){
  return(
    <div className={style.parallax_target}>
      <div className={style.inner_div}>
        {childElement}
      </div>
    </div>
  )
}
export default function Parallax({data}) {

  return (
    <>
      <Section childElement={<Intro data={data['Intro']}/>}/>
      <Section childElement={<About data={data['About']}/>}/>
      <Section childElement={<Stack data={data['Stack']}/>}/>
      <Section childElement={<Projects data={data['Gallery']}/>}/>
      <Section childElement={<Contact data={data['Contact']}/>}/>
    </>
  );
}