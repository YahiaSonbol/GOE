import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Badge,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const hotelData = [
  {
    id: 1,
    name: 'Kempinski Hotel Soma Bay',
    location: 'Soma Bay',
    price: 214,
    rating: 4.7,
    reviews: 1274,
    image: '/Soma-Bay.jpg',
  },
  {
    id: 2,
    name: 'JW Marriott Hotel Cairo',
    location: 'Cairo',
    price: 194,
    rating: 4.6,
    reviews: 2274,
    image: '/JW_Marriot.png',
  },
  {
    id: 3,
    name: 'Steigenberger Alcazar Hotel',
    location: 'Nabq Bay',
    price: 214,
    rating: 4.7,
    reviews: 1274,
    image: '/steigenberger-alcazar.png',
  },
  {
    id: 4,
    name: 'Four Seasons Hotel Cairo',
    location: 'Cairo',
    price: 250,
    rating: 4.8,
    reviews: 1822,
    image: '/Four_Season_Cairo.jpeg',
  },
  {
    id: 5,
    name: 'Steigenberger Resort Hurghada',
    location: 'Hurghada',
    price: 180,
    rating: 4.5,
    reviews: 1560,
    image: '/SteinbergerHurghada.jpg',
  },
  {
    id: 6,
    name: 'Hilton Luxor Resort & Spa',
    location: 'Luxor',
    price: 205,
    rating: 4.6,
    reviews: 1350,
    image: '/Luxor_Hotel.jpg',
  },
];

const CardMostRelevant = () => {
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
      {/* Next/Prev Buttons only on md and up */}
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
        {hotelData.map((hotel) => (
          <Box
            position="relative" 
            key={hotel.id}
            borderRadius="3xl"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            minW="260px"
            maxW="300px"
            scrollSnapAlign="start"
            flexShrink={0}
          >
            {/* Location Badge */}
            <Badge
              position="absolute"
              top={4}
              left={4}
              borderRadius="full"
              bg="white"
              color="green.700"
              px={3}
              py={1}
              fontSize="sm"
            >
              {hotel.location}
            </Badge>

            {/* Favorite Icon */}
            <IconButton
              aria-label="Add to favorites"
              borderRadius="full"
              size="sm"
              position="absolute"
              top={4}
              right={4}
              color="black.400"
              bg="white"
              _hover={{ color: "red.500" }}
            >
              <FaRegHeart strokeWidth={1} />
            </IconButton>

            {/* Hotel Image */}
            <Box height="180px">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>

            {/* Hotel Info */}
            <Box p={4}>
              <Flex align="center" justify="space-between" mb={2}>
                <Text fontWeight="semibold" fontSize="md" color="black">
                  {hotel.name}
                </Text>
                <HStack>
                  <FaStar color="#D3AC71" />
                  <Text fontWeight="bold" fontSize="sm" color="black">
                    {hotel.rating}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    ({hotel.reviews.toLocaleString()})
                  </Text>
                </HStack>
              </Flex>
              <Text color="gray.700" fontSize="sm">
                From <Text as="span" fontWeight="bold">${hotel.price}</Text> per person
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CardMostRelevant;
