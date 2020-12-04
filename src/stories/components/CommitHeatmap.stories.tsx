import Component, {Props} from '../../components/CommitHeatmap';
import { Meta, Story } from '@storybook/react/types-6-0';

const Template = (args: any) => <div style={{maxWidth: '50vw'}}><Component {...args} /></div>

export const Empty: Story = Template.bind({});
Empty.args = {
  startDate: new Date('2020-01-01'),
  endDate: new Date('2020-12-01')
} as Props;

const dates = [
  '2020-01-04T06:34:32.701Z',
  '2020-03-04T06:34:32.701Z',
  '2020-04-04T06:34:32.701Z',
  '2020-04-04T06:34:32.701Z',
  '2020-04-04T06:34:32.701Z',
  '2020-09-04T06:34:32.701Z',
  '2020-09-04T06:34:32.701Z',
  '2020-11-08T06:34:32.701Z',
  '2020-11-04T06:34:32.701Z',
  '2020-01-06T06:34:32.701Z',
  '2020-03-09T06:34:32.701Z',
  '2020-04-20T06:34:32.701Z',
  '2020-04-28T06:34:32.701Z',
  '2020-05-12T06:34:32.701Z',
  '2020-10-26T06:34:32.701Z',
  '2020-09-04T06:34:32.701Z',
  '2020-11-04T06:34:32.701Z',
  '2020-11-04T06:34:32.701Z',
  '2020-11-22T06:34:32.701Z',
]

export const Values: Story = Template.bind({});
Values.args = {
  startDate: new Date('2020-01-01'),
  endDate: new Date('2020-12-01'),
  commits: [
    {
      id: "1234",
      created_at: "2020-11-04T06:34:32.701Z"
    },
    {
      id: "4567",
      created_at: "2020-01-04T06:34:32.701Z"
    },
    {
      id: "4567",
      created_at: "2020-01-04T06:34:32.701Z"
    },
    {
      id: "09",
      created_at: "2020-01-04T06:34:32.701Z"
    },
    ...dates.map((created_at, id) => ({id, created_at}))
  ]
} as Props;

const meta: Meta = {
  title: 'Components/CommitHeatmap',
  component: Component
};

export default meta;
