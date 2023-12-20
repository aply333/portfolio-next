import qs from 'qs';
const FP_TOKEN = process.env.STRAPI_TOKEN_FP;
const ROOT_URL = process.env.STRAPI_URL;

// export async function getLandingData(){
//   const page = 'front-page-intro?';
//   const query = qs.stringify(
//     {
//       populate: {
//         Intro: {
//           populate: {
//             Image: {
//               populate: true,
//               fields: ['name', 'alternativeText', 'url']
//             }
//           }
//         },
//         About:{
//           populate: {
//            Image: {
//              populate: true,
//              fields: ['name', 'alternativeText', 'url']
//            }
//           }
//         },
//         Stack: {
//           populate: {
//             Stacks: {
//               populate: true,
//               fields: ['Tech']
//             }
//           }
//         },
//         Gallery: {
//           populate: {
//             Projects: {
//               populate: [
//                 'Project',
//                 'Project.Screenshot'
//               ]
//             }
//           }
//         },
//         Contact: {
//           populate: {
//             Contact:{ populate: true }
//           }
//         }
//       },
//     },
//     {
//       encodeValuesOnly: true,
//     }
//   );
//
//   // console.log(query)
//
//   const reqOptions = {
//     method: 'GET',
//     headers: {
//       'Authorization' : `bearer ${FP_TOKEN}`
//     }
//   }
//   const res = await fetch(ROOT_URL+page+query, reqOptions);
//   const data = await res.json();
//
//
//   return data.data.attributes;
// }
