import {useCallback} from 'react'
import {toast} from 'sonner'

export function useClipboard() {
  const copy = useCallback(async (text: string, description?: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast('Copied!', {description})
    } catch (err) {
      console.error('Failed to copy: ', err)
      toast('Failed to copy')
    }
  }, [])

  return {copy}
}
