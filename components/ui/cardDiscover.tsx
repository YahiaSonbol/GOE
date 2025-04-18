import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const discoverData = [
  {
    id: 1,
    name: 'Red Sea',
    image: '/red_sea.jpg',
  },
  {
    id: 2,
    name: 'Soma Bay',
    image: '/Soma-Bay.jpg',
  },
  {
    id: 3,
    name: 'Giza',
    image: '/Giza.jpg',
  },
  {
    id: 4,
    name: 'Nile',
    image: '/Nile.jpg',
  },
  {
    id: 5,
    name: 'Nabq Bay',
    image: '/Nabq-Bay.jpg',
  },
  {
    id: 6,
    name: 'Cairo',
    image: '/Cairo_disc.jpg',
  },
];

const CardDiscover = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 320;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box position="relative" width="100%" py={6}>
      {/* Scroll Buttons (only on md and up) */}
      {!isMobile && (
        <>
          <IconButton
            aria-label="Scroll Left"
            onClick={() => handleScroll('left')}
            position="absolute"
            left={-4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            borderRadius="full"
            bg="white"
            size="lg"
          >
            <FiChevronLeft color="#D3AC71" />
          </IconButton>

          <IconButton
            aria-label="Scroll Right"
            onClick={() => handleScroll('right')}
            position="absolute"
            right={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            borderRadius="full"
            bg="white"
            size="lg"
          >
            <FiChevronRight color="#D3AC71" />
          </IconButton>
        </>
      )}

      {/* Cards Row */}
      <Flex
        ref={scrollRef}
        overflowX="auto"
        scrollBehavior="smooth"
        gap={4}
        px={4}
        css={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {discoverData.map((place) => (
          <Box
            key={place.id}
            position="relative"
            minW="160px"
            maxW="220px"
            borderRadius="xl"
            overflow="hidden"
            scrollSnapAlign="start"
            flexShrink={0}
            height="320px"
            boxShadow="md"
          >
            <Image
              src={place.image}
              alt={place.name}
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <Text
              position="absolute"
              bottom={3}
              left={4}
              color="white"
              fontWeight="semibold"
              fontSize="lg"
              textShadow="0 0 4px rgba(0,0,0,0.7)"
            >
              {place.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CardDiscover;
