import * as Cell from '../../cells/CommitListCell';
import { Meta, Story } from '@storybook/react/types-6-0';
import Commit from '../../graphql/types/commit';
import { Issue } from '../../graphql/types/issue';

const commits: Partial<Commit>[] = [
  {
    id: "134",
    title: "do something",
    created_at: "2020-12-04T06:23:57.589Z"
  },
  {
    id: "567",
    title: "do something2",
    created_at: "2020-11-04T06:23:57.589Z"
  }
] as Commit[];

const issues: Partial<Issue>[] = [
  {
    id: 12,
    iid: 1,
    title: 'Do something'
  }
] as Issue[];

const SuccessTemplate = (args: any) => <Cell.Success {...args} />
const LoadingTemplate = (args: any) => <Cell.Loading {...args} />

export const Success: Story = SuccessTemplate.bind({});
Success.args = {
  data: {
    commits,
    issues
  },
} as Cell.SuccessProps
export const Empty: Story = SuccessTemplate.bind({});
Empty.args = {
  data: {
    commits: [],
    issues: []
  },
} as Cell.SuccessProps

export const Loading: Story = LoadingTemplate.bind({})

const meta: Meta = {
  title: 'Cells/CommitList'
};

export default meta;
