'use client'

import { Button, Menu, Portal, Box, Text, Flex,Icon } from "@chakra-ui/react";
import { useState } from "react";
import { ImLocation2 } from "react-icons/im";
const LocationPicker = () => {
  const [value, setValue] = useState('Cairo');

  const handleCountrySelect = (country: string) => {
    setValue(country);
  };

  const getIcon = (location: string) => {
    return (
      <Box 
        bg="white" 
        w="44px" 
        h="44px" 
        borderRadius="2xl" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <Icon as={ImLocation2} color="black" ></Icon>
      </Box>
    );
  };

  return (
    <Menu.Root >
      <Menu.Trigger asChild>
        <Button size={{base: "2xs", md: "lg"}}className="bg-transparent text-[#fff] rounded-[50px]">
          {value}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content borderRadius="4xl" bg="#737373" px={2}>
            <Menu.Item 
              value="Cairo"
              fontWeight="normal"
              color="#fff"
              width="100%"
              borderRadius="2xl"
              px={3}
              py={2}
              _hover={{ bg: "#5e5e5e" }}
              onSelect={() => handleCountrySelect('Cairo')}
            >
              <Flex direction="row">
              {getIcon('Cairo')}
                <Flex direction="column" align="center" gap={1}>
                  <Text fontSize={{ base: "sm", md: "md"}}>Cairo</Text>
                  <Text fontSize={{ base: "2xs", md: "xs"}} color="gray.400" ml="32px">City in Egypt</Text>
                </Flex>
              </Flex>
            </Menu.Item>
            
            <Menu.Item
              value="Hurghada"
              fontWeight="normal"
              color="#fff"
              width="100%"
              borderRadius="2xl"
              px={3}
              py={2}
              _hover={{ bg: "#5e5e5e" }}
              onSelect={() => handleCountrySelect('Hurghada')}
            >
              <Flex direction="row">
              {getIcon('Hurghada')}
                <Flex direction="column" align="center" gap={1}>
                  <Text fontSize={{ base: "sm", md: "md"}}>Hurghada</Text>
                  <Text fontSize={{ base: "2xs", md: "xs"}} color="gray.400" ml="32px">City in Egypt</Text>
                </Flex>
              </Flex>
            </Menu.Item>
            
            <Menu.Item
              value="Sharm El-Sheikh"
              fontWeight="normal"
              color="#fff"
              width="100%"
              borderRadius="2xl"
              px={3}
              py={2}
              _hover={{ bg: "#5e5e5e" }}
              onSelect={() => handleCountrySelect('Sharm El-Sheikh')}
            >
              <Flex direction="row">
              {getIcon('Sharm-El Sheikh')}
                <Flex direction="column" align="center" gap={1} ml={2}>
                  <Text fontSize={{ base: "sm", md: "md"}}>Sharm-El Sheikh</Text>
                  <Text fontSize={{ base: "2xs", md: "xs"}} color="gray.400" ml="15px">City in Egypt</Text>
                </Flex>
              </Flex>
            </Menu.Item>
            
            <Menu.Item
              value="Luxor & Aswan"
              fontWeight="normal"
              color="#fff"
              width="100%"
              borderRadius="2xl"
              px={3}
              py={2}
              _hover={{ bg: "#5e5e5e" }}
              onSelect={() => handleCountrySelect('Luxor & Aswan')}
            >
              <Flex direction="row">
              {getIcon('Luxor & Aswan')}
                <Flex direction="column" align="center" gap={1} ml={2}>
                  <Text fontSize={{ base: "sm", md: "md"}}>Luxor & Aswan</Text>
                  <Text fontSize={{ base: "2xs", md: "xs"}} color="gray.400" ml="15px">City in Egypt</Text>
                </Flex>
              </Flex>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default LocationPicker;