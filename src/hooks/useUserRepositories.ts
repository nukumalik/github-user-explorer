import {GITHUB_API_URI, queryClient} from '@/lib'
import type {Repository} from '@/types'
import {useMutation} from '@tanstack/react-query'
import {useCallback, useState} from 'react'

export const useUserRepositories = () => {
  const [isInitial, setIsInitial] = useState(true)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [error, setError] = useState<string>('')

  const getTopFiveRepositories = useCallback((data: Repository[]) => {
    const result = data
      .sort((a, b) => {
        const aTotal =
          Number(a?.stargazers_count || 0) +
          Number(a?.forks_count || 0) +
          Number(a?.watchers_count || 0)
        const bTotal =
          Number(b?.stargazers_count || 0) +
          Number(b?.forks_count || 0) +
          Number(b?.watchers_count || 0)
        return bTotal - aTotal
      })
      .slice(0, 5)
    return result
  }, [])

  const mutation = useMutation({
    mutationFn: async (username: string) => {
      const response = await fetch(
        `${GITHUB_API_URI}/users/${username}/repos?per_page=100`
      )
      return response.json()
    },
    onError: error => {
      console.log(error.message)
      setError(`Failed to get user repositor`)
      if (isInitial) setIsInitial(false)
    },
    onSuccess: (data, username) => {
      setRepositories(getTopFiveRepositories(data))
      queryClient.invalidateQueries({queryKey: [`${username}-repositories`]})
      if (isInitial) setIsInitial(false)
    }
  })

  return {...mutation, repositories, error, isInitial}
}
