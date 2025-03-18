import React from 'react'
import {describe, it, vi} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import {SearchBar} from '../../../src/components/common'

describe('Test SearchBar', () => {
  it('should call onChange when typing in the input', () => {
    const mockOnChange = vi.fn()
    render(<SearchBar onChange={mockOnChange} />)
    const inputElement = screen.getByPlaceholderText('Search')
    fireEvent.change(inputElement, {target: {value: 'Hello'}})
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  it('should render with custom className', () => {
    const customClass = 'custom-class'
    render(<SearchBar onChange={() => {}} className={customClass} />)
    const searchbar = screen.getByTestId('searchbar')
    expect(searchbar.getAttribute('class')).toContain(customClass)
  })
})
