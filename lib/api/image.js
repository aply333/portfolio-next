import {createHrefFromUrl} from "next/dist/client/components/router-reducer/create-href-from-url";

export default function GetStrapiImage( resObject ){
  return process.env.STRAPI_ROOT + resObject.Image.data.attributes.url;
}