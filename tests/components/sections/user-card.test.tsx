import React from 'react'
import {describe, it, vi} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import {UserCard} from '../../../src/components/sections'
import {nukuRepositoriesMock} from '../../mocks/repository-mock'

const repositories = nukuRepositoriesMock

describe('Test UserCard', () => {
  const mockOnGetRepositories = vi.fn()
  const mockOnClone = vi.fn()

  it('should render user information correctly', () => {
    render(<UserCard username='testuser' initialName='TU' />)
    expect(screen.getByText('testuser')).toBeDefined()
    expect(screen.getByText('TU')).toBeDefined()
  })

  it('should call onGetRepositories when toggling repositories', () => {
    render(
      <UserCard username='testuser' onGetRepositories={mockOnGetRepositories} />
    )
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    expect(mockOnGetRepositories).toHaveBeenCalledTimes(1)
    expect(mockOnGetRepositories).toHaveBeenCalledWith(true) // Assuming `true` means open
  })

  it('should display repository list when repositories are provided', async () => {
    render(
      <UserCard
        username='testuser'
        repositories={repositories}
        onClone={mockOnClone}
      />
    )
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    expect(await screen.findByText(repositories[0].name)).toBeDefined()
  })

  it('should display loading state when isLoading is true', () => {
    render(<UserCard username='testuser' isLoading />)
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('repository-skeleton-list')).toBeDefined()
  })

  it('should display error message when there are no repositories and an error is provided', () => {
    render(
      <UserCard
        username='testuser'
        error='Failed to fetch repositories'
        isInitial={false}
      />
    )
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    expect(screen.getByText('Failed to fetch repositories')).toBeDefined()
  })

  it('should display "No repositories found" when repositories are empty and no error is provided', () => {
    render(<UserCard username='testuser' repositories={[]} isInitial={false} />)
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    expect(screen.getByText('No repositories found')).toBeDefined()
  })
})
