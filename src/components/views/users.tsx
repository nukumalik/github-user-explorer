import {useRef, lazy, Suspense} from 'react'
import {SearchForm, UserSkeletonList} from '@/components/sections'
import {useSearchUser} from '@/hooks'
import {UserSkeleton} from '@/components/sections'
import {cn} from '@/lib'

const UserCard = lazy(() => import('../sections/user-card'))

export const UsersView = () => {
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
    <div
      className={cn(
        'flex py-6 lg:py-14 px-4 lg:px-0 bg-white/60 rounded-2xl shadow-lg shadow-gray-100 m-10 min-h-[90vh]',
        isInitial && !isPending && 'items-center justify-between'
      )}
    >
      <div className='lg:max-w-lg lg:min-w-lg mx-auto space-y-4'>
        {isInitial && !isPending && (
          <div className='grid gap-4 mb-12 text-center animate-fade-in'>
            <h1 className='text-4xl max-w-md mx-auto leading-12'>
              GitHub Users Explorer Search, Analyze, Discover
            </h1>
            <p className='text-muted-foreground text-sm'>
              Explore GitHub profiles effortlessly. View repositories, stats,
              and user activity in a sleek, intuitive interface.
            </p>
          </div>
        )}
        <SearchForm
          className='mb-8 animate-fade-in'
          onSubmit={handleSubmit}
          onChange={handleSearchChange}
        />
        {isPending ? (
          <UserSkeletonList />
        ) : users.length ? (
          users.map(user => (
            <div key={user?.login} className='animate-slide-up'>
              <Suspense fallback={<UserSkeleton />}>
                <UserCard data={user} />
              </Suspense>
            </div>
          ))
        ) : (
          !isInitial &&
          !isPending && (
            <div className='flex items-center justify-center py-10 animate-fade-in'>
              <p className='text-sm text-muted-foreground'>
                {error || 'No users found'}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
