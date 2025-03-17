import {Card, CardHeader, CardTitle, Skeleton} from '../ui'

export const UserSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className='flex items-center space-x-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <Skeleton className='h-4 w-[250px]' />
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export const UserSkeletonList = () => {
  return (
    <div className='space-y-4'>
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
    </div>
  )
}
