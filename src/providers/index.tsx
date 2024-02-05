'use client'
import { createContext, useState, useContext, useEffect } from 'react'

type TimezoneContextType = {
  selectedTimezone: string | null
  setSelectedTimezone: React.Dispatch<React.SetStateAction<string | null>>
}

const TimezoneContext = createContext<TimezoneContextType | undefined>(
  undefined
)

export const TimezoneProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedTimezone, setSelectedTimezone] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTimezone = localStorage.getItem('selectedTimezone')
      if (storedTimezone) {
        setSelectedTimezone(storedTimezone)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectedTimezone) {
        localStorage.setItem('selectedTimezone', selectedTimezone)
      } else {
        localStorage.removeItem('selectedTimezone')
      }
    }
  }, [selectedTimezone])
  return (
    <TimezoneContext.Provider value={{ selectedTimezone, setSelectedTimezone }}>
      {children}
    </TimezoneContext.Provider>
  )
}

export const useTimezone = (): TimezoneContextType => {
  const context = useContext(TimezoneContext)
  if (!context) {
    throw new Error('useTimezone must be used within a TimezoneProvider')
  }
  return context
}
