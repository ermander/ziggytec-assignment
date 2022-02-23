import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputForm from './InputForm'

test('it should render the input form', () => {
  render(<InputForm />)
  const inputsForm = screen.getByTestId('form')
  expect(inputsForm).toBeInTheDocument()
})

test('it should fire onSubmit', () => {
  const mockSubmit = jest.fn()
  const { queryByTestId } = render(<InputForm handleSubmit={mockSubmit} />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  fireEvent.submit(queryByTestId('onSubmit-button'))
})
