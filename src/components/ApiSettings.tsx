import { FormEvent } from "react";

export interface Props {
  onSubmit: (model: Model) => void,
  gitlabUrl: string,
  apiKey?: string
}

interface Model {
  apiKey: string,
  gitlabUrl: string
}

enum Fields {
  ApiKey = "apiKey",
  GitlabUrl = "gitlabUrl",
}

export function ApiSettings(props: Props) {
  return (
    <form onSubmit={handleSubmit(props)}>
      <div>
        <label htmlFor={Fields.ApiKey}>Api key</label>
        <input type="text" name={Fields.ApiKey} id={Fields.ApiKey} defaultValue={props.apiKey} required />
      </div>
      <div>
        <label htmlFor={Fields.GitlabUrl}>Gitlab url</label>
        <input
          type="url"
          name={Fields.GitlabUrl}
          id={Fields.GitlabUrl}
          placeholder={props.gitlabUrl}
          defaultValue={props.gitlabUrl}
          required />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
}

function handleSubmit(props: Pick<Props, "onSubmit">) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const model: Model = {
      apiKey: e.currentTarget[Fields.ApiKey].value,
      gitlabUrl: e.currentTarget[Fields.GitlabUrl].value
    };

    props.onSubmit(model);
  }
}

export default ApiSettings;
