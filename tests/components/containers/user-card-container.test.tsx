import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import {UserCardContainer} from '../../../src/components/containers'
import {usersMock} from '../../mocks/user-mock'
import QueryWrapper from '../../utils/QueryWrapper'
import {nukuRepositoriesMock} from '../../mocks/repository-mock'

const user = usersMock[0]
const mockRepositories = nukuRepositoriesMock

describe('Test UserCardContainer', () => {
  it('should render user card', () => {
    render(
      <QueryWrapper>
        <UserCardContainer data={user} />
      </QueryWrapper>
    )
    expect(screen.getByTestId('user-card')).toBeDefined()
    expect(screen.getByText(user.login)).toBeDefined()
  })

  it('should render loading skeleton when isLoading is true', async () => {
    render(
      <QueryWrapper>
        <UserCardContainer data={user} />
      </QueryWrapper>
    )
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    await waitFor(async () => {
      const skeletons = await screen.findAllByTestId('repository-skeleton')
      expect(skeletons.length).toEqual(5)
    })
  })

  it('should render repository list when repositories are provided', async () => {
    render(
      <QueryWrapper>
        <UserCardContainer data={user} />
      </QueryWrapper>
    )
    const toggleButton = screen.getByRole('button', {name: /toggle/i})
    fireEvent.click(toggleButton)
    await waitFor(async () => {
      await waitFor(async () => {
        const repositories = await screen.findAllByTestId('user-repository')
        expect(repositories.length).toEqual(5)
        expect(screen.getByText(mockRepositories[0].name)).toBeDefined()
      })
    })
  })
})
