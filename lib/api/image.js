
export default function getStrapiImage( resObject, alt=false ){
  if(alt){
    return process.env.STRAPI_ROOT + resObject.Image.data.attributes.alternativeText;
  }
  return process.env.STRAPI_ROOT + resObject.Image.data.attributes.url;
}