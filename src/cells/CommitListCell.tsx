import CommitHeatmap from "../components/CommitHeatmap";
import { CommitsQueryResult, useCommits } from "../graphql";

interface CommitsProps {
  gitlabUrl: string,
  apiKey: string,
  projectId: number
}

const CommitListCell = (props: CommitsProps) => {
  const { data, loading, error } = useCommits({
    url: props.gitlabUrl,
    apiKey: props.apiKey,
    projectId: props.projectId
  });

  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    return <Error />
  }

  return <Success data={data} />
}

export const Error = () => {
  return <div />
}

export const Success = ({ data }: { data: CommitsQueryResult }) => {
  const { commits, issues } = data;
  return (
    <div>
      <h4>commits</h4>
      <ol>
        {commits.map(commit =>
          <li key={commit.id}>{commit.title}</li>)}
      </ol>
      <CommitHeatmap
        startDate={new Date("2020-01-01")}
        endDate={new Date("2020-12-31")}
        commits={commits}
      />
      <h4>issues</h4>
      <ol>
        {issues.map(issue => <li key={issue.id}>{issue.title}</li>)}
      </ol>
    </div>
  );
}

export const Loading = () => {
  return <div />
}

export default CommitListCell;


