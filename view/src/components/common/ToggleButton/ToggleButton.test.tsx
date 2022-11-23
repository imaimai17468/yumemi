import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ToggleButton.stories'

const { Default } = composeStories(stories)

test('render ToggleButton with default args', () => {
  render(<Default>ToggleButton</Default>)
  const ToggleButtonElement = screen.getByText(/ToggleButton/i)
  expect(ToggleButtonElement).not.toBeNull()
})
