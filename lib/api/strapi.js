const FP_TOKEN = process.env.STRAPI_TOKEN_FP;
const ROOT_URL = process.env.STRAPI_URL;


export async function getFrontPage(){
    const reqOptions = {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${FP_TOKEN}`
      }
    }

    const res = await fetch(ROOT_URL+'front-page-intro');
    const data = await res.json();

    return data;
}