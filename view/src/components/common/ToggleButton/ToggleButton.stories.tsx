import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ToggleButton from './ToggleButton'

export default {
  title: 'ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args}>{args.children}</ToggleButton>
)

export const Default = Template.bind({})
Default.args = {
  children: 'ToggleButton',
  onClick: () => {},
  size: 'medium',
}
