import Header from "@/components/header/header";
import Parallax from "@/components/assets/parallax/parallax";
import { getFrontPageIntro } from "@/lib/api/strapi";

export default async function Home() {
  let intro_data = await getFrontPageIntro();

  return (
    <>
    <Header/>
    <main className='container'>
      <Parallax intro={intro}/>
    </main>
    </>
  )
}
