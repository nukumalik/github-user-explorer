import type {Repository} from '@/types'
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
import {lazy, Suspense} from 'react'
import {RepositorySkeleton, RepositorySkeletonList} from './repository-skeleton'

export interface UserCardProps {
  username?: string
  avatar?: string
  repositories?: Repository[]
  error?: string
  initialName?: string
  isInitial?: boolean
  isLoading?: boolean
  onGetRepositories?: (isOpen: boolean) => void
  onClone?: (clone_url: string) => void
}

const UserRepository = lazy(() => import('../common/user-repository'))

export const UserCard = ({
  username,
  avatar,
  repositories,
  error,
  initialName,
  isInitial,
  isLoading,
  onClone,
  onGetRepositories
}: UserCardProps) => {
  return (
    <Collapsible onOpenChange={onGetRepositories} className='animate-slide-up'>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3 flex-5/6'>
                <Avatar>
                  <AvatarImage src={avatar} alt={`${username} image`} />
                  <AvatarFallback>{initialName}</AvatarFallback>
                </Avatar>
                <span className='line-clamp-1'>{username}</span>
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
            {isLoading ? (
              <RepositorySkeletonList />
            ) : repositories?.length ? (
              <div className='flex flex-col gap-2'>
                {repositories?.map((repo, index) => (
                  <Suspense key={repo.id} fallback={<RepositorySkeleton />}>
                    <div key={repo.id}>
                      {!!index && <Separator className='mb-2' />}
                      <UserRepository data={repo} onClone={onClone} />
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
