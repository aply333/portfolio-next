import Backdrop from "@/components/assets/abstract-backdrops/backdrops";
import GalleryClient from "./gallery-client";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { fetchWorkTypes, galleryBaseFetch , projectFetch} from "@/lib/api/strapiGraph";
import styles from "./gallery.module.scss";
import Svg from "@/components/assets/svg/svg";


export default async function Gallery(){
  let filterData = await fetchWorkTypes();
  let baseData = await galleryBaseFetch();

  return(
    <>
    <Header/>
    <main className="container">
      <GalleryClient filters={filterData} base={baseData} />
      <Backdrop/>
    </main>
    <Footer/>
  </>
  )
}
