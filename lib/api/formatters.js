export function setImageUrl(image){
  if(typeof image === 'object'){
    let url = process.env.ROOT_URL+image.data.attributes.url
    return url
  }
  if(typeof image === 'string'){
    let url = process.env.ROOT_URL+image
    return url
  }
}
export function setImageAlt(image){
  if(image.data.attributes.alternativeText){
    return image.data.attributes.alternativeText;
  }
  return '';
}