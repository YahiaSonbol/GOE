'use client';

import Image from "next/image";
import { useState } from "react";
import { Button, Box, Flex, Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import LanguageChoose from '@/components/ui/languageChoose';
import ProfileIcon from '@/components/ui/ProfileIcon';
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  return (
    <nav>
      <Flex justify="space-between" align="center" p={{ base: 4, lg: 6 }}>
        {/* Logo and Brand */}
        <Flex align="center" direction={"column"}>
          <Box display={{ base: "none", lg: "block" }} mr={3}>
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </Box>
          <Box fontWeight="semibold" fontSize="xl">
            <span style={{ color: "#D3AC71" }}>Egy</span>
            <span style={{ color: "#fff" }}>Book</span>
          </Box>
        </Flex>

        {/* Desktop Navigation Center */}
        <Box display={{ base: "none", lg: "flex" }} flex={1} ml={12}>
          <Flex as="ul" gap={10} align="center">
            <li>
              <Button bg="#1e1e1e" px={1} size="xs" rounded="full" h={12} w={12}>
                <Icon as={CiSearch} color={"#D3AC71"} boxSize={6} />
              </Button>
            </li>
            {["GOE", "Book", "Explore", "Tales", "Treasure"].map((item) => (
              <li key={item} style={{ fontSize: "25px" }}>
                {item.startsWith("G") ? item : (
                  <>
                    <span style={{ color: "#D3AC71" }}>Egy</span>
                    {item}
                  </>
                )}
              </li>
            ))}
          </Flex>
        </Box>

        {/* Desktop Right Icons */}
        <Flex display={{ base: "none", lg: "flex" }} align="center" gap={2}>
          <Flex align="center" gap={3}>
            <AiOutlineGlobal size={36} />
            <LanguageChoose />
            <Box fontSize="35px" fontWeight="light">|</Box>

            {!isLoggedOut ? (
              <>
                <Button
                  variant="ghost"
                  p={2}
                  borderRadius="md"
                  _hover={{ bg: "#f0e7db", color: "#d3ac71" }}
                >
                  <FaRegHeart size={28} />
                </Button>
                <Button
                  variant="ghost"
                  p={2}
                  borderRadius="md"
                  _hover={{ bg: "#f0e7db", color: "#d3ac71" }}
                >
                  <FiShoppingCart size={28} />
                </Button>
              </>
            ) : (
              <>
                <Button
                  bg="#d3ac71"
                  color="white"
                  _hover={{ bg: "#b4945d" }}
                  borderRadius="md"
                  onClick={() => setIsLoggedOut(false)}
                >
                  Login
                </Button>
                <Button
                  bg="#d3ac71"
                  color="white"
                  _hover={{ bg: "#b4945d" }}
                  borderRadius="md"
                >
                  Sign up
                </Button>
              </>
            )}
          </Flex>

          {!isLoggedOut && <ProfileIcon onLogout={() => setIsLoggedOut(true)} />}
        </Flex>

        {/* Mobile Hamburger Menu */}
        <Box display={{ base: "block", lg: "none" }} ml="auto">
          <ResponsiveNavbar
            isLoggedOut={isLoggedOut}
            setIsLoggedOut={setIsLoggedOut}
          />
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
