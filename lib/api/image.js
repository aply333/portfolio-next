
export default function getStrapiImage( resObject, alt=false, name="Image" ){
  // TODO: REPAIR PROCESS ENV.
  let url = 'http://localhost:1337'
  let target = resObject[name].data.attributes;
  if(alt){
    return url + target.alternativeText;
  }
  return url + target.url;
}

