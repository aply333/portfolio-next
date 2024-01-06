import { GraphQLClient, gql } from "graphql-request";


const FP_TOKEN = process.env.STRAPI_TOKEN_FP;
const STRAPI_ROOT = process.env.STRAPI_ROOT;
const authedClient = new GraphQLClient( STRAPI_ROOT+'/graphql' , {
  headers: {
    authorization: `Bearer ${FP_TOKEN}`,
  }
});

export async function landingGraphFetch(){
  let query = gql`
  {  
  frontPageIntro{
      data{
        attributes{
          Intro{
            Title,
            Subtitle,
            Excerpt,
            Image{
              data{
                attributes{
                  url,
                  alternativeText
                }
              }
            }
          },
          About{
            Title,
            Content,
            Image{
              data{
                attributes{
                  url,
                  alternativeText
                }
              }
            }
          },
          Stack{
            Title,
            Stacks(pagination: {limit:30}){
              data{
                attributes{
                  Tech
                  Logo{
                    data{
                      attributes{
                        url,
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          },
          Gallery{
            Projects{
              data{
                attributes{
                  Title,
                  About,
                  Stacks{
                    data{
                      attributes{
                        Tech
                      }
                    }
                  },
                  Screenshot{
                    data{
                      attributes{
                        url,
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          },
          Contact{
            Title,
            Excerpt,
            Contact{
              data{
                attributes{
                  Phone,
                  Email,
                  GitHub,
                  Linkedin
                }
              }
            }
          }
        }
      }
    }
  }
  `
  const data = await authedClient.request(query);

  return data.frontPageIntro.data.attributes;
}


export async function contactInfoGraphFetch(){
  let query = gql`
    {
      contact{
        data{
          attributes{
            Phone,
            Email,
            GitHub,
            Linkedin,
            Resume{
              data{
                attributes{
                  url,
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `
  const data = await authedClient.request(query);
  return data.contact.data.attributes;
}