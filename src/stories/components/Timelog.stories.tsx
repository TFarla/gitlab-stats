import { Meta, Story } from '@storybook/react/types-6-0';
import { Timelog, Props } from '../../components/Timelog';
import commits from '../../tests/functions/commits.json';

const Template = (args: any) => <Timelog {...args} />;

export const Empty: Story = Template.bind({});
Empty.args = {
  commits: []
} as Props;

export const WithCommits: Story = Template.bind({});
WithCommits.args = {
  commits
} as Props;

const meta: Meta = {
  title: 'Components/Timelog',
  component: Timelog
};

export default meta;
