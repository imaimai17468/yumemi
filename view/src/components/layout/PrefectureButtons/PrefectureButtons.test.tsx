import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './PrefectureButtons.stories'

const { Default } = composeStories(stories)

test('render PrefectureButtons with default args', () => {
  render(<Default />)
  const PrefectureButtonsElement = screen.getByText(/PrefectureButtons/i)
  expect(PrefectureButtonsElement).not.toBeNull()
})
