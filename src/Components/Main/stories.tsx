import Main from '.'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import {Story, Meta} from "@storybook/react/types-7-0";
export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
} as Meta

export const Basic: Story = () => <Main title={text('title')} description={text('description')}/>
