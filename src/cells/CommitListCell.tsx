import CommitHeatmap from "../components/CommitHeatmap";
import { CommitsQueryResult, projectIdVar, useCommits } from "../graphql";

interface CommitsProps {
  gitlabUrl: string,
  apiKey: string,
  projectId: number
}

export interface SuccessProps {
  data: CommitsQueryResult
}

const CommitListCell = (props: CommitsProps) => {
  const { data, loading, error } = useCommits({
    url: props.gitlabUrl,
    apiKey: props.apiKey,
    projectId: props.projectId
  });

  if (loading) return <Loading />
  if (error || !data) return <Error />
  return <Success data={data} />
}

export const Error = () => {
  return <div />
}

export const Success = ({ data }: SuccessProps) => {
  const { commits, issues } = data;
  const hasCommits = commits.length > 0 && commits.map;
  const hasIssues = issues.length > 0 && issues.map;
  return (
    <div>
      <button onClick={() => {
        projectIdVar(null);
      }}>Back</button>
      <h4>commits</h4>
      {
        hasCommits && (
          <>
            <ol>
              {commits.map(commit =>
                <li key={commit.id}>{commit.title}</li>)}
            </ol>
            <CommitHeatmap
              startDate={new Date("2020-01-01")}
              endDate={new Date("2020-12-31")}
              commits={commits}
            />
          </>
        )
      }
      {
        !hasCommits && (
          <div>No commits found</div>
        )
      }
      <h4>issues</h4>
      {
        hasIssues && (
          <ol>
            {issues.map(issue => <li key={issue.id}>{issue.title}</li>)}
          </ol>
        )
      }
      {
        !hasIssues && (
          <div>No issues found for this project</div>
        )
      }
    </div>
  );
}

export const Loading = () => {
  return <div>Loading...</div>
}

export default CommitListCell;


