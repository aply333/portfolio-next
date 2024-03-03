import style from "./banner.module.scss"
import { setImageUrl, setImageAlt } from "@/lib/api/formatters";
import Image from 'next/image'

export default function Banner({data}){

  let url = setImageUrl(data.Image.data.attributes.url);

  return(
    <div className={"banner "+style.banner}>
      <div className={style.text}>
        <h1>Hi I'm <span>Andrei</span>.</h1>
        <h2><span>Full-Stack</span> Developer</h2>

        <p>{data.Excerpt}</p>
      </div>
   
      <Image src={url} 
             alt={data.Image.data.attributes.alt}
             width={200}
             height={200}/>

    </div>
  )
}
