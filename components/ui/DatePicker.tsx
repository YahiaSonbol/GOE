'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateRangePickerComponent = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = dateRange

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => setDateRange(update)}
      monthsShown={isMobile ? 1 : 2}
      showPopperArrow={true}
      popperPlacement="bottom-start"
      shouldCloseOnSelect={false}
      placeholderText="Select date range"
      popperClassName="z-50"
      className={`bg-transparent text-white rounded px-2 border border-transparent ${
        isMobile ? 'text-sm w-[130px]' : 'text-base w-[200px]'
      }`}
      customInput={
        <input
          readOnly
          value={
            !startDate && !endDate
              ? ''
              : `${startDate?.toLocaleDateString()} - ${endDate?.toLocaleDateString()}`
          }
          className={`bg-transparent rounded text-white border border-transparent px-2 py-1 cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden ${
            isMobile ? 'text-sm w-[130px]' : 'text-base w-[200px]'
          }`}
        />
      }
    />
  )
}

export default DateRangePickerComponent
