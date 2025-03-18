import type {User} from '@/types'
import {useMemo} from 'react'
import {useClipboard, useUserRepositories} from '@/hooks'
import {UserCard} from '../sections'

export interface UserCardContainerProps {
  data: User
}

export const UserCardContainer = ({data}: UserCardContainerProps) => {
  const {mutate, error, repositories, isInitial, isPending} =
    useUserRepositories()
  const {copy} = useClipboard()

  const initialName = useMemo(() => {
    return data?.login?.split('')[0]
  }, [data])

  const handleGetRepositories = (isOpen: boolean) => {
    if (!isOpen || !data?.login) return
    mutate(data.login)
  }

  const handleClone = (clone_url: string) => {
    copy(clone_url, 'Repository URL copied')
  }

  return (
    <UserCard
      avatar={data?.avatar_url}
      username={data?.login}
      error={error}
      isLoading={isPending}
      initialName={initialName}
      repositories={repositories}
      isInitial={isInitial}
      onGetRepositories={handleGetRepositories}
      onClone={handleClone}
    />
  )
}

export default UserCardContainer
