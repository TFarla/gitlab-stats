import CommitListCell from "../cells/CommitListCell";
import ProjectListCell from "../cells/ProjectListCell";
import ApiSettings from "../components/ApiSettings"
import { useAppQuery } from "../graphql";
import { gitlabUrlVar, apiKeyVar, projectIdVar } from '../graphql/cache';

export const ApiSettingsPage = () => {
  const { data, loading } = useAppQuery();
  if (loading || !data) {
    return null;
  }

  const hasApiKey = data.apiKey && data.apiKey.length > 0;
  if (hasApiKey && data.projectId) {
    return <CommitListCell
      gitlabUrl={data.gitlabUrl}
      projectId={data.projectId}
      apiKey={data.apiKey} />
  } else if (hasApiKey) {
    return <ProjectListCell
      gitlabUrl={data.gitlabUrl}
      apiKey={data.apiKey}
      onClick={(project) => {
      projectIdVar(project.id);
    }}/>
  } else {
    return (
      <div>
        <h1>Settings</h1>
        <ApiSettings gitlabUrl={data.gitlabUrl} apiKey={data.apiKey} onSubmit={(model) => {
          gitlabUrlVar(model.gitlabUrl);
          apiKeyVar(model.apiKey);
        }} />
      </div>
    );
  }
}

export default ApiSettingsPage;
