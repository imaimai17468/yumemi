import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainLayout from './MainLayout'

export default {
  title: 'MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args}>{args.children}</MainLayout>
)

export const Default = Template.bind({})
Default.args = {
  children: 'MainLayout',
}
