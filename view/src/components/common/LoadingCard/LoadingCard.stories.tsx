import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LoadingCard from './LoadingCard'

export default {
  title: 'LoadingCard',
  component: LoadingCard,
} as ComponentMeta<typeof LoadingCard>

const Template: ComponentStory<typeof LoadingCard> = (args) => <LoadingCard />

export const Default = Template.bind({})
