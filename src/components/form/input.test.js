import Input from './Input'
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders input', () => {
  render(<Input />)
  const inputsElement = screen.getAllByTestId('formInput')
  // eslint-disable-next-line testing-library/prefer-screen-queries
  for (let input of inputsElement) {
    expect(input).toBeInTheDocument()
  }
})
