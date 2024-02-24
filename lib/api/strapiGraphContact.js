import { GraphQLClient, gql } from "graphql-request";

const TOKEN = process.env.NEXT_PUBLIC_STRAPI_CONTACT;
const ROOT = process.env.NEXT_PUBLIC_STRAPI_ROOT;
const authedClient = new GraphQLClient( ROOT+'/graphql' , {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  }
});

export async function createContact(content){

  const mutation = gql`
  mutation CreateContactForm($sender: String!, $email: String!, $content: String!) {
    createContactForm(data: {Sender: $sender, Email: $email, Content: $content}) {
      data {
        id
        attributes {
          Sender
          Email
          Content
        }
      }
    }
  }
`;


  authedClient.request(mutation, content)
    .then(data => { return data; })
    .catch(error => { console.error("Error submitting form:", error); });

}
