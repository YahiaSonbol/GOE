'use client';

import { Dispatch, SetStateAction } from "react";
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";
import LanguageChoose from "./languageChoose";

// ✅ Add this Props type
type Props = {
  isLoggedOut: boolean;
  setIsLoggedOut: Dispatch<SetStateAction<boolean>>;
};

const ResponsiveNavbar = ({ isLoggedOut, setIsLoggedOut }: Props) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button size="sm" bg="transparent" _hover={{ bg: "transparent" }}>
          <RxHamburgerMenu
            strokeWidth={2}
            size={30}
            className="text-[#D3AC71]"
          />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="#1e1e1e" color="white">
            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="sm"
                color="white"
                position="absolute"
                top="10px"
                right="10px"
              />
            </Drawer.CloseTrigger>
            <Drawer.Body>
              <VStack gap={4} align="start" mt={10} ml={2}>
                <Text fontSize="xl">
                  <span className="text-[#D3AC71] font-semibold">Egy</span>
                  Book
                </Text>

                {!isLoggedOut ? (
                  <>
                    <HStack>
                      <Button bg="transparent">
                        <FaRegHeart color="#fff" size={20} />
                        <Text color="#fff">Wishlist</Text>
                      </Button>
                    </HStack>

                    <HStack>
                      <Button bg="transparent">
                        <FiShoppingCart color="#fff" size={20} />
                        <Text color="#fff">Cart</Text>
                      </Button>
                    </HStack>

                    <HStack>
                      <AiOutlineGlobal size={20} />
                      <LanguageChoose />
                    </HStack>

                    <Button bg="transparent" fontWeight="bold" color="#D3AC71">
                      <Text>My profile</Text>
                    </Button>
                    <Button bg="transparent">
                      <Text color="#fff">Saved deals</Text>
                    </Button>
                    <Button bg="transparent">
                      <Text color="#fff">Invite friends</Text>
                    </Button>
                    <Button bg="transparent">
                      <Text color="#fff">Settings</Text>
                    </Button>
                    <Button
                      bg="transparent"
                      color="red.400"
                      onClick={() => setIsLoggedOut(true)}
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <VStack gap={2} w="full">
                    <Button
                      bg="#d3ac71"
                      color="white"
                      _hover={{ bg: "#b4945d" }}
                      w="full"
                      onClick={() => setIsLoggedOut(false)}
                    >
                      Login
                    </Button>
                    <Button
                      bg="#d3ac71"
                      color="white"
                      _hover={{ bg: "#b4945d" }}
                      w="full"
                    >
                      Sign up
                    </Button>
                  </VStack>
                )}
              </VStack>
            </Drawer.Body>

            <Drawer.Footer justifyContent="center" mt={6}>
              <Image src="/logo.png" alt="logo" width={120} height={120} />
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default ResponsiveNavbar;
