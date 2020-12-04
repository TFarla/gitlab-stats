import { ProjectsQueryData, useProjects } from "../graphql/queries/projects"
import Project from "../graphql/types/project";

interface Props {
  gitlabUrl: string,
  apiKey: string,
  onClick: (project: Project) => void
}

export type SuccessProps = {
  data: ProjectsQueryData,
} & Pick<Props, 'onClick'>

export const ProjectListCell = (props: Props) => {
  const { data, loading, error } = useProjects({ url: props.gitlabUrl, apiKey: props.apiKey });
  if (loading) return <Loading />;
  if (error || !data?.projects.map) return <Error />;
  if (data.projects.length === 0) return <Empty />
  return <Success data={data} onClick={props.onClick} />;
}

export const Loading = () => <div>Loading</div>
export const Error = () => <div>An error occurred</div>
export const Empty = () => <div>No projects found</div>
export const Success = ({ data, onClick }: SuccessProps) => {
  return (
    <div>
      <h4>Projects</h4>
      <ul>
        {
          data.projects.map((project) =>
            <li onClick={() => {
              onClick(project)
            }} key={project.id}>{project.name_with_namespace}</li>
          )
        }
      </ul>
    </div>
  );
}

export default ProjectListCell;
