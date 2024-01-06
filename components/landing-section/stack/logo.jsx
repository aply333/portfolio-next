import Image from "next/image";
import styles from "./logo.module.scss";
import { setImageUrl } from "@/lib/api/formatters";

export default  function Logo({ image }){
  if( image.attributes.Logo.data ){
    let url = setImageUrl(image.attributes.Logo.data.attributes.url)
    return(
      <Image className={styles.logo} src={url} alt='' width={300} height={300} />
    )
  }



}