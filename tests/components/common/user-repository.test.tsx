import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {describe, it, expect, vi} from 'vitest'
import {UserRepository} from '../../../src/components/common'
import {nukuRepositoriesMockMap} from '../../mocks/repository-mock'

const repository = nukuRepositoriesMockMap.get(41166505)

describe('Test UserRepository', () => {
  it('should render the repository name', () => {
    render(<UserRepository data={repository} />)
    const name = screen.getByRole('link', {name: 'FlexFlash'})
    expect(name.innerHTML).toBe(repository?.name)
    expect(name.getAttribute('href')).toBe(repository?.html_url)
  })

  it('should render count', () => {
    render(<UserRepository data={repository} />)
    const forksCount = screen.getByTestId('forks-count')
    const starsCount = screen.getByTestId('stars-count')
    expect(forksCount.innerHTML).toBe(String(repository?.forks_count))
    expect(starsCount.innerHTML).toBe(String(repository?.stargazers_count))
  })

  it('should call onClone with the correct clone URL when the clone button is clicked', () => {
    const mockOnClone = vi.fn()
    render(<UserRepository data={repository} onClone={mockOnClone} />)

    const button = screen.getByRole('button', {name: 'Clone'})
    expect(button).toBeDefined()
    fireEvent.click(button)
    expect(mockOnClone).toHaveBeenCalledTimes(1)
    expect(mockOnClone).toHaveBeenCalledWith(repository?.clone_url)
  })
})
