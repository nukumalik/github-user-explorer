import {Repository} from '@/types'
import {GitForkIcon, SquareTerminalIcon, StarIcon} from 'lucide-react'
import {Button} from '../ui'
import {useClipboard} from '@/hooks'

export interface UserRepositoryProps {
  data: Repository
}

export const UserRepository = ({data}: UserRepositoryProps) => {
  const {copy} = useClipboard()

  const handleClone = () => {
    copy(data?.clone_url || '', 'Repository URL copied')
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 text-sm py-2 max-w-full'>
      <div className='line-clamp-1 col-span-3 max-h-5 self-center text-primary hover:underline'>
        <a href={data?.url}>{data?.name}</a>
      </div>
      <div className='flex items-center gap-4 md:justify-end col-span-3'>
        <div className='flex items-center gap-1.5'>
          <GitForkIcon className='w-4 h-4' />
          <span>{data?.forks_count}</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <StarIcon className='w-4 h-4' />
          <span>{data?.stargazers_count}</span>
        </div>
        <div className='flex-auto md:flex-none text-right'>
          <Button variant='secondary' onClick={handleClone}>
            <SquareTerminalIcon className='w-3 h-3' />
            <span className='text-xs'>Clone</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserRepository
