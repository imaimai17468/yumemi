import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './PopulationGraph.stories'

const { Default } = composeStories(stories)

test('render PopulationGraph with default args', () => {
  render(<Default />)
})
