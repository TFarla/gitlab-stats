import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Project from "../types/project";

export const projectsQuery = gql`
  query projects($url: String!, $projectId: Int!, $apiKey: String!) {
    projects(url: $url, projectId: $projectId, apiKey: $apiKey)
    @rest(type: "Commit", path: "{args.url}/api/v4/projects/?private_token={args.apiKey}&membership=true&per_page=100") {
      id
      name
      name_with_namespace
    }
  }
`;

export interface ProjectsQueryData {
  projects: Project[]
}

interface Variables {
  url: string,
  apiKey: string
}

export const useProjects = (variables: Variables) =>
  useQuery<ProjectsQueryData, Variables>(projectsQuery, { variables });

export default projectsQuery;
