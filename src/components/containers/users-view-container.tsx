import {useRef} from 'react'
import {useSearchUser} from '@/hooks'
import {UsersView} from '../views'

export const UsersViewContainer = () => {
  const {mutate, error, users, isPending, isInitial} = useSearchUser()
  const searchRef = useRef('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchRef.current.trim()) mutate(searchRef.current)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchRef.current = e.target.value
  }

  return (
    <UsersView
      error={error}
      data={users}
      isInitial={isInitial}
      isLoading={isPending}
      onSubmit={handleSubmit}
      onChange={handleSearchChange}
    />
  )
}
