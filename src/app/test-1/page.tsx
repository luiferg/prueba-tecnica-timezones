'use client'
import CardsGridTest1 from '@/components/cards-grid-test-1'
import React from 'react'

const Test1Page = () => {
  return (
    <main className='flex min-h-screen max-w-screen-xl flex-col gap-4 items-center p-4 mx-auto'>
      <h1 className='text-4xl font-bold'>Timezones TEST 1</h1>
      <CardsGridTest1 />
    </main>
  )
}

export default Test1Page
