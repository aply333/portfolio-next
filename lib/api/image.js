
export default function GetStrapiImage( resObject ){
  return process.env.STRAPI_ROOT + resObject.Image.data.attributes.url;
}