import CommitListCell from "../cells/CommitListCell";
import ApiSettings from "../components/ApiSettings"
import { useAppQuery } from "../graphql";
import { gitlabUrlVar, apiKeyVar } from '../graphql/cache';

export const ApiSettingsPage = () => {
  const { data, loading } = useAppQuery();
  if (loading || !data) {
    return null;
  }

  if (data.apiKey && data.apiKey.length > 0) {
    return <CommitListCell gitlabUrl={data.gitlabUrl} projectId={data.projectId} apiKey={data.apiKey} />
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
