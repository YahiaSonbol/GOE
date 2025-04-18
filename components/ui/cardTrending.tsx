'use client'

import { useRef } from "react"
import { Box, Flex, useBreakpointValue, IconButton, Text, Button } from "@chakra-ui/react"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CardTrending = () => {
  const destinations = [
    {
      id: 1,
      name: 'Cairo',
      message:'Unveil secrets of ancient wonders.',
      image: '/cairo.jpg',
      color: "#D3AC71"
    },
    {
      id: 2,
      name: 'Hurghada',
      message:'Sunshine, beaches, and vibrant reefs.',
      image: '/hurghada.jpg',
      color: "#6397c4"
    },
    {
      id: 3,
      name: 'Sharm El Sheikh',
      message:'Dive into breathtaking underwater vistas.',
      image: '/sharm.jpg',
      color: "#9a4445"
    }
  ];

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
      {!isMobile && (
        <>
          <IconButton
            aria-label="Scroll Left"
            onClick={() => handleScroll('left')}
            position="absolute"
            left={-4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
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
            zIndex={10}
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
        {destinations.map((dest) => (
            <Box
            key={dest.id}
            flex="0 0 auto"
            width={{ base: '350px', md: '480px' }}
            height={{base:'250px',md:'350px'}}
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
            scrollSnapAlign="start"
            backgroundImage={`linear-gradient(to right, ${dest.color} 0%, ${dest.color} 2%, rgba(0,0,0,0) 100%), url(${dest.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            >
            <Flex
              position="absolute"
              direction={"column"}
              top={10}
              left={0}
              width="100%"
              height="100%"
              zIndex={2}
              color="white"
              fontSize={{base:'3xl',md:'5xl'}}
              fontWeight="bold"
              px={4}
              justifyContent="space-between" 
            >
              <Box>
                {dest.name}
                <Text
                  fontSize={{base:'md',md:'xl'}}
                  dangerouslySetInnerHTML={{
                    __html: dest.message
                    .split(' ')
                    .reduce((acc, word, i) => {
                        const lineIndex = Math.floor(i / 4);
                        acc[lineIndex] = (acc[lineIndex] || '') + word + ' ';
                        return acc;
                    }, [] as string[])
                    .join('<br />')
                  }}
                />
              </Box>
              
              <Box mb={{base: 12, md: 10}} ml={{base: 0, md: 0}}>
                <Button 
                  bg="white" 
                  color="black" 
                  borderRadius="full"
                  px={{base:4,md:6}}
                  py={2}
                  size={{base: "md", md: "lg"}}
                  fontWeight="medium"
                  _hover={{ bg: "gray.100" }}
                >
                  See Hotels
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CardTrending;