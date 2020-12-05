import * as Cell from '../../cells/CommitListCell';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Issue } from '../../graphql/types/issue';
import commits from '../../tests/functions/commits.json';

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
Success.argTypes = {
  data: {
    table: {
      disable: true
    }
  }
}

export const Empty: Story = SuccessTemplate.bind({});
Empty.args = {
  data: {
    commits: [],
    issues: []
  },
} as Cell.SuccessProps
Empty.argTypes = {
  data: {
    table: {
      disable: true
    }
  }
}

export const Loading: Story = LoadingTemplate.bind({})

const meta: Meta = {
  title: 'Cells/CommitList'
};

export default meta;
