import React from 'react'
import {describe, it, vi} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import {SearchForm} from '../../../src/components/sections'

describe('Test SearchForm', () => {
  it('should call onSubmit when the form is submitted', () => {
    const mockOnSubmit = vi.fn()
    const mockOnChange = vi.fn()

    render(<SearchForm onChange={mockOnChange} onSubmit={mockOnSubmit} />)

    const searchForm = screen.getByTestId('search-form')
    fireEvent.submit(searchForm)

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })

  it('should call onChange when typing in the search input', () => {
    const mockOnSubmit = vi.fn()
    const mockOnChange = vi.fn()

    render(<SearchForm onChange={mockOnChange} onSubmit={mockOnSubmit} />)

    const inputElement = screen.getByPlaceholderText('Search')
    fireEvent.change(inputElement, {target: {value: 'Test Query'}})

    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  it('should render with custom className', () => {
    const customClass = 'custom-class'
    render(
      <SearchForm
        onChange={() => {}}
        onSubmit={() => {}}
        className={customClass}
      />
    )
    const searchForm = screen.getByTestId('search-form')
    expect(searchForm.getAttribute('class')).toContain(customClass)
  })
})
