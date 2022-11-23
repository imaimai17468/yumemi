import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Card.stories'

const { Default } = composeStories(stories)

test('render Card with default args', () => {
  render(<Default>Card</Default>)
  const CardElement = screen.getByText(/Card/i)
  expect(CardElement).not.toBeNull()
})
