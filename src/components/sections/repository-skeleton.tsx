import {Separator, Skeleton} from '../ui'

export const RepositorySkeleton = () => {
  return (
    <div className='space-y-2 mb-2' data-testid='repository-skeleton'>
      <Skeleton className='w-full  h-10' />
      <Separator />
    </div>
  )
}

export const RepositorySkeletonList = () => {
  return (
    <div data-testid='repository-skeleton-list'>
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
    </div>
  )
}
