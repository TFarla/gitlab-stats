import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest';
import { apiKeyVar, gitlabUrlVar, projectIdVar } from './cache';

export const typeDefs = gql`
  extend type Query {
    gitlabUrl: String!
  }
`;

const restLink = new RestLink({
  uri: ""
});
const client = new ApolloClient<any>({
  link: restLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          gitlabUrl: {
            read() {
              return gitlabUrlVar();
            }
          },
          apiKey: {
            read() {
              return apiKeyVar();
            }
          },
          projectId: {
            read() {
              return projectIdVar();
            }
          }
        }
      }
    }
  }),
  typeDefs
});

export default client;
