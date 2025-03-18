import React from 'react'
import {describe, it, vi} from 'vitest'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {UsersView} from '../../../src/components/views'
import {usersMock} from '../../mocks/user-mock'
import QueryWrapper from '../../utils/QueryWrapper'

const users = usersMock

describe('Test UsersView', () => {
  const mockOnSubmit = vi.fn()
  const mockOnChange = vi.fn()

  it('should render loading skeleton when isLoading is true', () => {
    render(
      <QueryWrapper>
        <UsersView
          data={[]}
          isLoading={true}
          isInitial={true}
          onSubmit={mockOnSubmit}
          onChange={mockOnChange}
        />
      </QueryWrapper>
    )
    expect(screen.getByTestId('user-skeleton-list')).toBeDefined()
  })

  it('should render user list when data is available and isLoading is false', async () => {
    render(
      <QueryWrapper>
        <UsersView
          data={users}
          isLoading={false}
          isInitial={false}
          onSubmit={mockOnSubmit}
          onChange={mockOnChange}
        />
      </QueryWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText(usersMock[0].login)).toBeDefined()
    })
  })

  it('should render error message when no users are found and an error message is provided', () => {
    render(
      <QueryWrapper>
        <UsersView
          data={[]}
          isLoading={false}
          isInitial={false}
          error='No users found'
          onSubmit={mockOnSubmit}
          onChange={mockOnChange}
        />
      </QueryWrapper>
    )

    expect(screen.getByText('No users found')).toBeDefined()
  })

  it('should call onSubmit when the search form is submitted', () => {
    render(
      <QueryWrapper>
        <UsersView
          data={[]}
          isLoading={false}
          isInitial={true}
          onSubmit={mockOnSubmit}
          onChange={mockOnChange}
        />
      </QueryWrapper>
    )

    const searchForm = screen.getByTestId('search-form')
    fireEvent.submit(searchForm)
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
})
