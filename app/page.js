import Header from "@/components/header/header";
import Parallax from "@/components/assets/parallax/parallax";
import { getFrontPage } from "@/lib/api/strapi";

export default async function Home() {
  let front_page_data = await getFrontPage();
  await console.log("LOG FPD:  ", front_page_data)

  return (
    <>
    <Header/>
    <main className='container'>
      <Parallax/>
    </main>
    </>
  )
}
