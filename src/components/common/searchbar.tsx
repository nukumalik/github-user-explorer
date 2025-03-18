import {cn} from '@/lib'
import {Input} from '../ui'
import {SearchIcon} from 'lucide-react'

export interface SearchBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

export const SearchBar = ({onChange, className}: SearchBarProps) => {
  return (
    <div className={cn(className, 'relative')} data-testid='searchbar'>
      <Input
        type='text'
        placeholder='Search'
        className='pl-10 py-5'
        name='search'
        onChange={onChange}
      />
      <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5' />
    </div>
  )
}
