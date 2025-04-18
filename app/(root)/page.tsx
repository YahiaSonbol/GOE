'use client';

import {
  Box,
  Heading,
  Text,
  HStack,
  Icon,
  Button,
  Flex,
  Image,
  IconButton,
  Link 
} from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';
import CardMostRelevant from '@/components/ui/cardMostRelevant';
import CardDiscover from '@/components/ui/cardDiscover';
import DatePickerComponent from '@/components/ui/DatePicker';
import NumberofGuests from '@/components/ui/NumberofGuests';
import { LuMousePointerClick } from 'react-icons/lu';
import { BsBadgeVr,BsTwitterX } from 'react-icons/bs';
import { FaPiggyBank } from 'react-icons/fa6';
import CardTrend from '@/components/ui/cardTrending';
import { AiFillInstagram,AiFillTikTok  } from "react-icons/ai";
import { FaFacebookF,FaLinkedinIn  } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import LocationPicker from '@/components/ui/LocationPicker';
import { LuCalendar } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Page = () => {
  const icons = [
    { icon: AiFillInstagram, link: 'https://www.instagram.com/gates.of.egypt?igsh=MTI2ZmVxNmJxa2k2Ng==' },
    { icon: FaFacebookF, link: 'https://www.facebook.com/share/16QnXRB7mt/?mibextid=wwXIfr' },
    { icon: AiFillTikTok, link: 'https://www.tiktok.com/@gates.of.egypt?_t=ZS-8valppAB1Bh&_r=1' },
    { icon: BsTwitterX, link: 'Piggy Bank' },
    { icon: FaLinkedinIn, link: 'https://www.linkedin.com/company/gates-of-egypt/' },
  ]
  return (
    <>
      <Box position="relative" width="100%" height={{ base: '400px', md: '600px' }}>
        <Image
          src="/HeroBG.png"
          alt="Hero background"
          objectFit="cover"
          position="absolute"
          width="100%"
          height="100%"
          zIndex={0}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
          zIndex={1}
        />
        <Box
          position="absolute"
          top="50%"
          left="15%"
          transform="translateY(-50%)"
          color="white"
          zIndex={2}
          maxW="90%"
        >
          <HStack mb={{ base: 0, md: 5 }} mt={{ base: 20, md: 0 }}>
            <Icon as={FaLocationArrow} color="white" boxSize={{ base: 3, md: 5 }} />
            <Text fontSize={{ base: 'xs', md: 'md' }} fontWeight="medium">
              Egypt
            </Text>
          </HStack>

          <Heading fontSize={{ base: '2xl', md: '5xl' }} mb={{ base: 2, md: 5 }} fontWeight="bold">
            Hey, Bishoy!
          </Heading>
          <Heading fontSize={{ base: 'xl', md: '3xl' }} fontWeight="semibold">
            Tell us where you want to stay
          </Heading>

          <Text fontSize={{ base: 'sm', md: 'lg' }} mt={2}>
            Book 450+ Curated Egyptian Hotels
          </Text>
<Box
  bg="whiteAlpha.800/40"
  backdropFilter="blur(8px)"
  px={{ base: 2, sm: 4 }}
  py={3}
  borderRadius="full"
  width={{ base: '400px', md: '1000px' }}
  mt={6}
  mb={4}
  color="white"
>
  <HStack
    justify={{ base: 'center', md: 'space-between' }}
    flexWrap="wrap"
  >
    <HStack >
      <Icon as={ImLocation2} color="#d3ac71" boxSize={{ base: 3, md: 5 }} />
      <LocationPicker />
    </HStack>

    <Text display={{ base: 'none', md: 'block' }} fontSize="3xl" fontWeight="extralight" color="#332c27">
      |
    </Text>

    <HStack >
      <Icon as={LuCalendar} color="#d3ac71" boxSize={{ base: 3, md: 5 }} />
      <Box width={{ base: '140px', md: 'auto' }}>
        <DatePickerComponent />
      </Box>
    </HStack>

    <Text display={{ base: 'none', md: 'block' }} fontSize="3xl" fontWeight="extralight" color="#332c27">
      |
    </Text>

    <HStack >
      <Icon as={MdOutlinePeopleAlt} color="#d3ac71" boxSize={{ base: 3, md: 5 }} />
      <NumberofGuests />
    </HStack>

    <Button
      bg="#356d52"
      color="white"
      size={{ base: '2xs', md: 'md' }}
      borderRadius="full"
      px={{ base: 2, md: 6 }}
      fontSize={{ base: '2xs', md: 'md' }}
      mt={{ base: 2, md: 0 }}
    >
      Explore Stays
    </Button>
  </HStack>
</Box>

        </Box>
      </Box>

      <Box ml={{ base: 5, md: 40 }}>
        <Flex direction="column">
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={{ base: 5, md: 10 }}
            mb={{ base: 1, md: 3 }}
            fontWeight="bold"
          >
            The Most Relevant
          </Heading>
          <CardMostRelevant />
        </Flex>
      </Box>

      <Box ml={{ base: 5, md: 40 }}>
        <Flex direction="column">
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={{ base: 5, md: 10 }}
            mb={{ base: 1, md: 3 }}
            fontWeight="bold"
          >
            Discover New Places
          </Heading>
          <CardDiscover />
        </Flex>
      </Box>

      <Box ml={{ base: 5, md: 40 }}>
        <Flex direction="column">
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={{ base: 5, md: 10 }}
            mb={{ base: 1, md: 3 }}
            fontWeight="bold"
          >
            Why choose{' '}
            <Heading as="span" fontSize={{ base: '2xl', md: '4xl' }} color={'#D3AC71'}>
              Egy
            </Heading>
            Book
          </Heading>
        </Flex>

        <Box mt={4}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Flex mb={{ base: 5, md: 0 }} ml={{ base: 10, md: 0 }} mr={{ base: 2, md: 20 }} direction="column">
              <LuMousePointerClick size={60} color="#356d52" />
              <Box fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }}>
                <Flex align="center" gap={1}>
                  <HStack>
                    <Text color="#D3AC71">Seamless</Text>
                    <Text fontWeight="bold">&</Text>
                    <Text color="#356d52">Smart</Text>
                  </HStack>
                  <Text ml={{ base: 0, md: 1 }}>Booking</Text>
                </Flex>
              </Box>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Quick, user-friendly platform
                <br />
                that simplifies the reservation
                <br />
                process
              </Text>
            </Flex>

            <Flex mb={{ base: 5, md: 0 }} ml={{ base: 10, md: 0 }} mr={{ base: 2, md: 20 }} direction="column">
              <BsBadgeVr size={60} color="#356d52" />
              <Box fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }}>
                <Flex align="center" gap={1}>
                  <HStack>
                    <Text fontStyle="italic" color="#356d52">
                      Immersive
                    </Text>
                  </HStack>
                  <Text ml={{ base: 0, md: 1 }}>VR Previews</Text>
                </Flex>
              </Box>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Explore hotels and rooms in
                <br />
                360° before you book—giving
                <br />
                you total confidence.
              </Text>
            </Flex>

            <Flex ml={{ base: 10, md: 0 }} direction="column">
              <FaPiggyBank size={60} color="#356d52" />
              <Box fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }}>
                <Flex align="center" gap={1}>
                  <HStack>
                    <Text color="#356d52">Exclusive</Text>
                  </HStack>
                  <Text>Best-Price Deals</Text>
                </Flex>
              </Box>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Save more with special offers and
                <br />
                real-time price comparisons.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box ml={{ base: 5, md: 40 }}>
        <Flex direction="column">
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={{ base: 5, md: 10 }}
            mb={{ base: 1, md: 3 }}
            fontWeight="bold"
          >
            Trending Destination
          </Heading>
        </Flex>
        <CardTrend />
        <Flex>
          <Box
            mt={{ base: 2, md: 5 }}
            width={{ base: '350px', md: '600px' }}
            height={{ base: '250px', md: '466px' }}
            borderLeftRadius="3xl"
            bgColor="#bfdbc9"
          >
            <Flex direction="column" mt={{ base: 5, md: 20 }} ml={{ base: 5, md: 35 }}>
              <Heading
                color="#0f1f17"
                fontSize={{ base: 'xl', md: '5xl' }}
                lineHeight={{ base: '1.2', md: '1.3' }}
                fontWeight="bold"
              >
                Ready to Book Your Next Adventure?
              </Heading>
              <Text
                color="#0f1f17"
                fontSize={{ base: 'md', md: '2xl' }}
                mt={{ base: 2, md: 5 }}
                maxW={{ base: '90%', md: '500px' }}
              >
                Get exclusive deals and immersive previews with our smart booking platform.
              </Text>
              <Button
                mt={{ base: 2, md: 5 }}
                bgColor="#468465"
                color="white"
                borderRadius="full"
                width={{ base: '150px', md: '425px' }}
              >
                Book Now
              </Button>
            </Flex>
          </Box>
          <Box
            mt={{ base: 2, md: 5 }}
            backgroundImage="url(/aswan.jpg)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            borderRightRadius="3xl"
            width={{ base: '350px', md: '600px' }}
            height={{ base: '250px', md: '466px' }}
          />
        </Flex>
      </Box>

      <Box
        mt={{ base: 2, md: 5 }}
        bg="radial-gradient(ellipse at bottom, #2c241f 0%, #1f1b18 40%, #141312 55%, #121212 100%)"
        color="white"
        width="100%"
        height="auto"
        py={6}
        px={{ base: 4, md: 8 }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          height="auto"
          width={{ base: '120px', md: '200px' }}
          ml={{ base: '10px', md: '140px' }}
        />
        <Text
          fontSize={{ base: 'sm', md: '3xl' }}
          fontWeight="semibold"
          ml={{ base: 5, md: 40 }}
          mt={{ base: 2, md: 4 }}
        >
          Lorem, Ipsum Lorem, Ipsum
          <br />
          Lorem, Ipsum or less.
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
  <Button 
    color="#fff" 
    mt={{ base: 1, md: 4 }} 
    ml={{ base: 5, md: 40 }} 
    borderRadius="full" 
    bgColor="#d3ac71"
  >
    Discover More
  </Button>
  <Flex direction={"column"} mb={{ base: 2, md: 4 }}>
  <Flex gap={{ base: 2, md: 4 }} mr={{ base: 2, md: 20 }}>
    {icons.map((icon, index) => (
      <Link href={icon.link} target="_blank" key={index}>
        <Button 
          bgColor="#d3ac71" 
          width={{ base: 10, md: 14 }} 
          height={{ base: 10, md: 14 }} 
          borderRadius="2xl"
        >
          <Icon as={icon.icon} color="white" boxSize={{ base: 8, md: 12 }} />
        </Button>
      </Link>
    ))}
  </Flex>
  <Text marginLeft={{ base: 2, md:5 }} mb={{ base: 2, md: 4 }} mt={{ base: 2, md: 4 }}>Copyright Gates of Egypt © 2024<br/> 
  All rights reserved</Text>
  </Flex>
</Flex>
  <Flex direction={"row"} 
  ml={{ base: '10px', md: '150px' }}
  gap={{ base: 2, md: 10 }}
  >
  <Text>Home</Text>
  <Text>Egy<Text as='span' color='#d3ac71'>Book</Text></Text>
  <Text>Egy<Text as='span' color='#d3ac71'>Explore</Text></Text>
  <Text>Egy<Text as='span' color='#d3ac71'>Tales</Text></Text>
  <Text>Egy<Text as='span' color='#d3ac71'>Treasure</Text></Text>
  </Flex>
      </Box>
    </>
  );
};

export default Page;
