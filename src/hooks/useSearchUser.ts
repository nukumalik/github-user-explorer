import {GITHUB_API_URI, queryClient} from '@/lib'
import type {User} from '@/types'
import {useMutation} from '@tanstack/react-query'
import {useState} from 'react'

export const useSearchUser = () => {
  const [isInitial, setIsInitial] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string>('')

  const sanitizeUsers = (q: string, data: User[]) => {
    const result = data
      .filter(user =>
        String(user.login).toLowerCase()?.includes(q.toLowerCase())
      )
      .slice(0, 5)
    return result
  }

  const mutation = useMutation({
    mutationFn: async (q: string) => {
      const response = await fetch(
        `${GITHUB_API_URI}/search/users?q=${q}&per_page=10`
      )
      const data = await response.json()
      return data?.items
    },
    onError: (error, query) => {
      console.log(error.message)
      setError(`Failed to get users "${query}"`)
      if (isInitial) setIsInitial(false)
    },
    onSuccess: (data, q) => {
      setUsers(sanitizeUsers(q, data))
      queryClient.invalidateQueries({queryKey: ['users']})
      if (isInitial) setIsInitial(false)
    }
  })

  return {...mutation, users, error, isInitial}
}
