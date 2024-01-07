export function setImageUrl(image){
  if(typeof image === 'object'){
    let url = process.env.STRAPI_ROOT+image.data.attributes.url
    return url
  }
  if(typeof image === 'string'){
    let url = process.env.STRAPI_ROOT+image
    return url
  }
}
export function setImageAlt(image){
  if(image.data.attributes.alternativeText){
    return image.data.attributes.alternativeText;
  }
  return '';
}