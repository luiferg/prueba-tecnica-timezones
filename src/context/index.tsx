'use client'
import { createContext } from 'react'

export const TimezoneContext = createContext({
  timezone: 'Europe/London',
  setTimezone: (timezone: string) => {},
})
