import React from 'react'
import {SearchBar} from '../common'
import {Button} from '../ui'
import {cn} from '@/lib'

interface SearchFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

export const SearchForm = ({
  onChange,
  onSubmit,
  className
}: SearchFormProps) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className={cn(className, 'flex items-center gap-2')}
      >
        <SearchBar className='flex-auto' onChange={onChange} />
        <Button type='submit' className='p-5'>
          Search
        </Button>
      </form>
    </>
  )
}
