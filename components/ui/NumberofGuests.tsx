'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Text,
  HStack,
  VStack,
  Menu,
  Portal
} from '@chakra-ui/react'

const GuestControl = ({
  label,
  subLabel,
  count,
  onIncrement,
  onDecrement,
}: {
  label: string
  subLabel: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}) => (
  <HStack justify="space-between" className="w-full py-1 md:py-2">
    <Box>
      <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">{label}</Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.400">{subLabel}</Text>
    </Box>
    <HStack >
      <Button
        size={{ base: 'xs', md: 'sm' }}
        onClick={onDecrement}
        disabled={count === 0}
        variant="outline"
        color={count === 0 ? 'gray' : '#D3AC71'}
        borderColor="white"
        borderRadius="full"
        minW={{ base: '28px', md: '32px' }}
        h={{ base: '28px', md: '32px' }}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        −
      </Button>
      <Text fontSize={{ base: 'sm', md: 'md' }} className="w-6 text-center">{count}</Text>
      <Button
        size={{ base: 'xs', md: 'sm' }}
        onClick={onIncrement}
        color={count === 16 ? 'gray' : '#D3AC71'}
        variant="outline"
        borderColor="white"
        borderRadius="full"
        minW={{ base: '28px', md: '32px' }}
        h={{ base: '28px', md: '32px' }}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        +
      </Button>
    </HStack>
  </HStack>
)

const NumberofGuests = () => {
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(1)

  const totalGuests = adults + children
  const maxTravelers = 16

  const summary = `${adults} Adult${adults > 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${rooms} Room${rooms > 1 ? 's' : ''}`

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          size={{ base: "sm", md: "lg" }}
          bg="transparent"
          color="white"
          fontSize={{ base: '2xs', md: 'sm' }}
        >
          {summary}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            borderRadius="2xl"
            bg="#2D2D2D"
            px={{ base: 2, md: 4 }}
            py={{ base: 2, md: 4 }}
            minW={{ base: '270px', md: '340px' }}
          >
            <VStack className="w-full space-y-1 md:space-y-2">
              <GuestControl
                label="Adults"
                subLabel="Age 18 or above"
                count={adults}
                onIncrement={() => totalGuests < maxTravelers && setAdults(adults + 1)}
                onDecrement={() => setAdults(Math.max(1, adults - 1))}
              />
              <GuestControl
                label="Children"
                subLabel="Under 18"
                count={children}
                onIncrement={() => totalGuests < maxTravelers && setChildren(children + 1)}
                onDecrement={() => setChildren(Math.max(0, children - 1))}
              />
              <GuestControl
                label="Rooms"
                subLabel=""
                count={rooms}
                onIncrement={() => setRooms(rooms + 1)}
                onDecrement={() => setRooms(Math.max(1, rooms - 1))}
              />
            </VStack>
            <Text
              color="gray.400"
              fontSize={{ base: '2xs', md: 'xs' }}
              mt={3}
              textAlign="center"
            >
              You can search for up to 16 travelers
            </Text>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default NumberofGuests
