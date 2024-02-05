'use client'
import { DateTime } from 'luxon'
import CardsGridControl from './cards-grid-control'
import Card from './ui/card'
import React from 'react'
import { useTimezone } from '@/providers'

const timezonesData = [
  { timezone: 'Australia/Sydney', date: '2023-11-22', time: '17:55' },
  { timezone: 'America/New_York', date: '2023-03-23', time: '08:04' },
  { timezone: 'Africa/Cairo', date: '2023-07-07', time: '15:39' },
  { timezone: 'Europe/Paris', date: '2023-03-11', time: '06:58' },
  { timezone: 'Europe/Paris', date: '2023-01-16', time: '05:57' },
  { timezone: 'Europe/Paris', date: '2023-07-04', time: '05:09' },
  { timezone: 'Africa/Cairo', date: '2023-06-22', time: '21:43' },
  { timezone: 'America/New_York', date: '2023-11-14', time: '11:27' },
  { timezone: 'Europe/London', date: '2023-06-05', time: '00:20' },
  { timezone: 'Europe/Berlin', date: '2023-07-08', time: '00:00' },
  { timezone: 'America/New_York', date: '2023-01-24', time: '03:06' },
  { timezone: 'Asia/Tokyo', date: '2023-08-24', time: '03:42' },
  { timezone: 'America/Los_Angeles', date: '2023-05-14', time: '21:05' },
  { timezone: 'Europe/Berlin', date: '2023-09-07', time: '21:24' },
  { timezone: 'America/Los_Angeles', date: '2023-07-24', time: '07:46' },
  { timezone: 'America/New_York', date: '2023-04-23', time: '14:40' },
  { timezone: 'America/Mexico_City', date: '2023-03-04', time: '22:15' },
  { timezone: 'Africa/Cairo', date: '2023-07-05', time: '03:24' },
  { timezone: 'Europe/Paris', date: '2023-02-15', time: '01:03' },
  { timezone: 'America/Los_Angeles', date: '2023-04-04', time: '22:16' },
]

const CardsGridTest2 = () => {
  const { selectedTimezone, setSelectedTimezone } = useTimezone()

  const uniqueTimezones = [
    ...new Set(timezonesData.map((item) => item.timezone)),
  ]

  return (
    <>
      <CardsGridControl
        selectedTimezone={selectedTimezone}
        setSelectedTimezone={setSelectedTimezone}
        uniqueTimezones={uniqueTimezones}
      />
      <section className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full'>
        {timezonesData.map((card, index) => {
          const now = DateTime.now().setZone(selectedTimezone || card.timezone)
          return (
            <React.Fragment key={index}>
              {selectedTimezone && (
                <Card key={index}>
                  <h3 className='font-semibold'>Selected Timezone</h3>
                  <p>Timezone: {selectedTimezone || card.timezone}</p>
                  <p>Date: {now.toFormat('yyyy-MM-dd')}</p>
                  <p>Time: {now.toFormat('HH:mm')}</p>
                </Card>
              )}
            </React.Fragment>
          )
        })}
      </section>
    </>
  )
}

export default CardsGridTest2
