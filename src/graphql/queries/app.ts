import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const appQuery = gql`
  query appState {
    gitlabUrl @client
    apiKey @client
    projectId @client
  }
`;

export interface AppState {
  gitlabUrl: string
  apiKey: string
  projectId: number
}

export const useAppQuery = () => useQuery<AppState>(appQuery);

export default appQuery;
