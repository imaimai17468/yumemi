import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PopulationGraph from './PopulationGraph'

export default {
  title: 'PopulationGraph',
  component: PopulationGraph,
} as ComponentMeta<typeof PopulationGraph>

const Template: ComponentStory<typeof PopulationGraph> = (args) => (
  <PopulationGraph {...args}></PopulationGraph>
)

export const Default = Template.bind({})
Default.args = {
  population: [
    {
      prefCode: 1,
      prefName: '北海道',
      population: [
        {
          year: 2010,
          value: 100,
        },
        {
          year: 2011,
          value: 200,
        },
      ],
    },
  ],
}
