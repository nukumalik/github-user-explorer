import React from 'react'
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from '../../src/lib/query-client'

const QueryWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryWrapper
