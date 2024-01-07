import Header from "@/components/header/header";
import Parallax from "@/components/assets/parallax/parallax";
import { landingGraphFetch } from "@/lib/api/strapiGraph";
import Footer from "@/components/footer/footer";
export default async function Home() {
  // let landing_data = await landingGraphFetch()
  return (
    <>
    {/*<Header/>*/}
    <main className='container'>
      {/*<Parallax data={landing_data}/>*/}
    </main>
    <Footer/>
    </>
  )
}
