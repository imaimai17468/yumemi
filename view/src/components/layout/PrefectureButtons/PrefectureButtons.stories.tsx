import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PrefectureButtons from './PrefectureButtons'

export default {
  title: 'PrefectureButtons',
  component: PrefectureButtons,
} as ComponentMeta<typeof PrefectureButtons>

const Template: ComponentStory<typeof PrefectureButtons> = (args) => (
  <PrefectureButtons {...args} />
)

export const Default = Template.bind({})
Default.args = {
  prefectures: [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ],
  selectedPrefectures: [],
  setSelectedPrefectures: () => {},
}
