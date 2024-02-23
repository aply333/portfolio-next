import { GraphQLClient, gql } from "graphql-request";

const FP_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN_FP;
const STRAPI_ROOT = process.env.NEXT_PUBLIC_STRAPI_ROOT;
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

export async function galleryBaseFetch(){
  let query = gql `
  {
		pageGallery{
			data{
				attributes{
					Title,
					Description
				}
			}
		}
  }
  `

  const data = await authedClient.request(query);
  return data.pageGallery.data.attributes;
}

export async function projectFetch(type){
  /*
    * Types:
    * Education, Personal, Work
  */

  let query = gql`
  {
    projects{
      data{
        attributes{
          Title,
          Type{
            data{
              attributes{
                Type,
              }
            }
          },
          Stacks{
            data{
              attributes{
                Tech
              }
            }
          }
        }
      }
    }
  }
  `
  if(type !== undefined || type === 'none'){
    query = gql`
    {
      projects(filters: { Type: { Type_ID: {eq: "${type}"} }  } ){
        data{
          attributes{
            Title,
            Type{
              data{
                attributes{
                  Type,
                }
              }
            },
            Stacks{
              data{
                attributes{
                  Tech
                }
              }
            }
          }
        }
      }
    }
    `
  }

  try{
    const data = await authedClient.request(query);
    return data.projects.data;
  }
  catch(error){
    throw new Error("Faild to query data: ", error)
  }
}


export async function fetchWorkTypes(){
  let query = gql`
  {
    workTypes{
      data{
        attributes{
          Type,
          Type_ID,
          Icon
        }
      }
    }
  }
  `

  const data = await authedClient.request(query);
  return data.workTypes.data;
}

export async function TestingFilter(){
  let query = gql`
  {
  	projects(filters: { Type: { Type_ID: {eq: "education"} }  } ){
  		data{
  			attributes{
  				Title,
  				Type{
  					data{
  						attributes{
  							Type,
  							Icon
  						}
  					}
  				},
  				Stacks{
  					data{
  						attributes{
  							Tech
  						}
  					}
  				}
  			}
  		}
  	}
  }
  `

  const data = await authedClient.request(query);
  return data.projects.data;
}
