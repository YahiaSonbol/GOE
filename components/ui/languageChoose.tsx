'use client'

import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";

const LanguageChoose = () => {
const [value, setValue] = useState('EN');

const handleLanguageSelect = (language: string) => {
    setValue(language);
};

return (
    <Menu.Root>
    <Menu.Trigger asChild>
        <Button size="lg" className="bg-transparent text-[#fff] rounded-[50px]">
        {value}
        </Button>
    </Menu.Trigger>
    <Portal>
        <Menu.Positioner>
        <Menu.Content borderRadius="2xl" bg="#f7f0e9" px={2} py={2}>
            <Menu.Item 
            value="EN"
            fontWeight="normal"
            color="#000000"
            width="100%"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
            onSelect={() => handleLanguageSelect('EN')}>
            EN
            </Menu.Item>
            <Menu.Item
            value="AR"
            fontWeight="normal"
            color="#000000"
            width="100%"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
            onSelect={() => handleLanguageSelect('AR')}>
            AR
            </Menu.Item>
            <Menu.Item
            value="FR"
            fontWeight="normal"
            color="#000000"
            width="100%"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
            onSelect={() => handleLanguageSelect('FR')}>
            FR
            </Menu.Item>
        </Menu.Content>
        </Menu.Positioner>
    </Portal>
    </Menu.Root>
);
};

export default LanguageChoose;