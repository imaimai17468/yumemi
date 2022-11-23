import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './MainLayout.stories'

const { Default } = composeStories(stories)

test('render MainLayout with default args', () => {
  render(<Default>MainLayout</Default>)
  const MainLayoutElement = screen.getByText(/MainLayout/i)
  expect(MainLayoutElement).not.toBeNull()
})
