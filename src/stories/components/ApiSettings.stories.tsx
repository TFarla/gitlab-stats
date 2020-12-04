import {action} from '@storybook/addon-actions';
import ApiSettings, {Props} from '../../components/ApiSettings';
import { Meta, Story } from '@storybook/react/types-6-0';

const Template = (args: any) => <ApiSettings {...args} />

export const Empty: Story = Template.bind({});
Empty.args = {
  onSubmit: (model: any) => action('submit')(model),
  gitlabUrl: "http://example.com"
} as Props

const meta: Meta = {
  title: 'Components/ApiSettings',
  component: ApiSettings
};

export default meta;
