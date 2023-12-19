import qs from 'qs';
const FP_TOKEN = process.env.STRAPI_TOKEN_FP;
const ROOT_URL = process.env.STRAPI_URL;

export async function getLandingData(){
  const page = 'front-page-intro?';
  const query = qs.stringify(
    {
      populate: {
        Intro: {
          populate: {
            Image: {
              populate: true,
              fields: ['name', 'alternativeText', 'url']
            }
          }
        },
        About:{
          populate: {
           Image: {
             populate: true,
             fields: ['name', 'alternativeText', 'url']
           }
          }
        },
        Stack: {
          populate: {
            Stacks: {
              populate: true,
              fields: ['Tech']
            }
          }
        },
        Gallery: {
          populate: {
            Projects: {
              populate: true,
              _populate: 'image',
              // fields: ['Title', 'About', 'Screenshot', 'Live', 'Codebase'],
              // Screenshot:{populate: true}
            }
          }
        },
        Contact: {
          populate: {
            Contact:{ populate: true }
          }
        }
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const reqOptions = {
    method: 'GET',
    headers: {
      'Authorization' : `bearer ${FP_TOKEN}`
    }
  }
  const res = await fetch(ROOT_URL+page+query, reqOptions);
  const data = await res.json();


  return data.data.attributes;
}
