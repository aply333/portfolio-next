import Header from "@/components/header/header";
import Parallax from "@/components/assets/parallax/parallax";
import { getLandingData } from "@/lib/api/strapi";
export default async function Home() {
  let landing_data = await getLandingData();
  await console.log(landing_data)

  return (
    <>
    <Header/>
    <main className='container'>
      <Parallax />
    </main>
    </>
  )
}
