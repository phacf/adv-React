import { Story, Meta } from '@storybook/react/types-7-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic = () => <Main />

export const Default: Story = (
  args: JSX.IntrinsicAttributes & {
    title?: string | undefined
    description?: string | undefined
  }
) => <Main {...args} />
Default.args = {
  title: 'Default Title',
  description: 'Default Description'
}
