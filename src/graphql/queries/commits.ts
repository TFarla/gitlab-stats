import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Commit from "../types/commit";
import { Issue } from "../types/issue";

export const commitsQuery = gql`
  query commits($url: String!, $projectId: Int!, $apiKey: String!) {
    commits(url: $url, projectId: $projectId, apiKey: $apiKey)
    @rest(type: "Commit", path: "{args.url}/api/v4/projects/{args.projectId}/repository/commits/?private_token={args.apiKey}&all=true&per_page=100000") {
      id
      title
      message
      created_at
      committed_date
    }

    issues(url:$url, projectId: $projectId, apiKey: $apiKey)
    @rest(type: "Issue", path: "{args.url}/api/v4/projects/{args.projectId}/issues/?private_token={args.apiKey}&per_page=100") {
      id
      iid
      project_id
      title
      description
      milestone {
        iid
        title
      }
    }
  }
`;

interface Variables {
  url: string,
  projectId: number,
  apiKey: string
}

export interface CommitsQueryResult {
  commits: Commit[],
  issues: Issue[]
}

export const useCommits = (variables: Variables) => useQuery<CommitsQueryResult, Variables>(commitsQuery, {variables});

export default commitsQuery;
