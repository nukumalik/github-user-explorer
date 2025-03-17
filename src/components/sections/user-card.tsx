import type {User} from '@/types'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator
} from '../ui'
import {ChevronDownIcon} from 'lucide-react'
import {lazy, Suspense, useMemo} from 'react'
import {useUserRepositories} from '@/hooks'
import {RepositorySkeleton, RepositorySkeletonList} from './repository-skeleton'

export interface UserCardProps {
  data: User
}

const UserRepository = lazy(() => import('../common/user-repository'))

export const UserCard = ({data}: UserCardProps) => {
  const {mutate, error, repositories, isInitial, isPending} =
    useUserRepositories()

  const initialName = useMemo(() => {
    return data?.login?.split('')[0]
  }, [data])

  const handleGetRepositories = (isOpen: boolean) => {
    if (!isOpen || !data?.login) return
    mutate(data.login)
  }

  return (
    <Collapsible
      onOpenChange={handleGetRepositories}
      className='animate-slide-up'
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3 flex-5/6'>
                <Avatar>
                  <AvatarImage
                    src={data?.avatar_url}
                    alt={`${data?.login} image`}
                  />
                  <AvatarFallback>{initialName}</AvatarFallback>
                </Avatar>
                <span className='line-clamp-1'>{data?.login}</span>
              </div>
            </div>
          </CardTitle>
          <CardAction className='self-center'>
            <CollapsibleTrigger asChild>
              <Button variant='ghost'>
                <ChevronDownIcon />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            {isPending ? (
              <RepositorySkeletonList />
            ) : repositories?.length ? (
              <div className='flex flex-col gap-2'>
                {repositories?.map((repo, index) => (
                  <Suspense key={repo.id} fallback={<RepositorySkeleton />}>
                    <div key={repo.id}>
                      {!!index && <Separator className='mb-2' />}
                      <UserRepository data={repo} />
                    </div>
                  </Suspense>
                ))}
              </div>
            ) : (
              !isInitial && (
                <p className='text-center py-6 px-2 text-muted-foreground text-sm'>
                  {error || 'No repositories found'}
                </p>
              )
            )}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

export default UserCard
