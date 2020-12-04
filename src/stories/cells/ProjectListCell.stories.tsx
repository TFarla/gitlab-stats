import * as Cell from '../../cells/ProjectListCell';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Project from '../../graphql/types/project';

const SuccessTemplate = (args: any) => <Cell.Success {...args} />
const EmptyTemplate = (args: any) => <Cell.Empty {...args} />
const LoadingTemplate = (args: any) => <Cell.Loading {...args} />

const projects: Partial<Project>[] = [
  {
    id: 1,
    name_with_namespace: "Test / Project"
  },
  {
    id: 2,
    name_with_namespace: "Test / Project2"
  },
  {
    id: 3,
    name_with_namespace: "Test / Project3"
  },
  {
    id: 4,
    name_with_namespace: "Test / Project4"
  }
];

export const Success: Story = SuccessTemplate.bind({});
Success.args = {
  data: {
    projects
  },
  onClick: action('Clicked')
} as Cell.SuccessProps

export const Empty: Story = EmptyTemplate.bind({});
export const Loading: Story = LoadingTemplate.bind({})

const meta: Meta = {
  title: 'Cells/ProjectList'
};

export default meta;
