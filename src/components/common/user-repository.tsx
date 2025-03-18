import {Repository} from '@/types'
import {GitForkIcon, SquareTerminalIcon, StarIcon} from 'lucide-react'
import {Button} from '../ui'

export interface UserRepositoryProps {
  data: Repository
  onClone?: (clone_url: string) => void
}

export const UserRepository = ({data, onClone}: UserRepositoryProps) => {
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-6 gap-4 text-sm py-2 max-w-full'
      data-testid='user-repository'
    >
      <div className='line-clamp-1 col-span-3 max-h-5 self-center text-primary hover:underline'>
        <a href={data?.html_url} target='_blank'>
          {data?.name}
        </a>
      </div>
      <div className='flex items-center gap-4 md:justify-end col-span-3'>
        <div className='flex items-center gap-1.5'>
          <GitForkIcon className='w-4 h-4' />
          <span data-testid='forks-count'>{data?.forks_count}</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <StarIcon className='w-4 h-4' />
          <span data-testid='stars-count'>{data?.stargazers_count}</span>
        </div>
        <div className='flex-auto md:flex-none text-right'>
          <Button
            variant='secondary'
            onClick={() => onClone?.(data?.clone_url || '')}
          >
            <SquareTerminalIcon className='w-3 h-3' />
            <span className='text-xs'>Clone</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserRepository
