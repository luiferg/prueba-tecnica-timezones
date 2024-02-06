import { CardsGridControlProps } from '@/types'

const CardsGridControl: React.FC<CardsGridControlProps> = ({
  selectedTimezone,
  setSelectedTimezone,
  uniqueTimezones,
}) => {
  // Handle the timezone change
  const handleTimezoneChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimezone(event.target.value)
  }

  // Reset the timezone selection
  const resetTimezone = () => {
    setSelectedTimezone(null)
  }

  return (
    <div className='flex flex-row gap-4'>
      <select
        aria-label='Select a timezone'
        value={selectedTimezone || ''}
        onChange={handleTimezoneChange}
        className='bg-slate-900 border border-slate-600 p-2 rounded-lg cursor-pointer'
      >
        <option aria-label='Select a timezone option' value=''>
          Select a timezone
        </option>
        {uniqueTimezones.map((timezone, index) => (
          <option
            key={index}
            aria-label={`Select ${timezone} timezone`}
            value={timezone}
          >
            {timezone}
          </option>
        ))}
      </select>
      <button
        aria-label='Reset timezone'
        onClick={resetTimezone}
        className='p-2 bg-slate-600 rounded-lg border border-slate-900'
      >
        Reset
      </button>
    </div>
  )
}

export default CardsGridControl
