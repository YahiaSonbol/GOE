'use client';

import {
  Menu,
  Button,
  Icon,
} from '@chakra-ui/react';
import { GoPerson } from 'react-icons/go';

type Props = {
  onLogout: () => void;
};

const ProfileIcon = ({ onLogout }: Props) => {
  return (
    <Menu.Root  positioning={{ placement: "bottom-start" }}>
      <Menu.Trigger>
        <Button
          className="bg-[#fff] rounded-[50px] mb-[13px] ml-[20px]"
          width="60px"
          height="60px"
        >
          <Icon as={GoPerson} color="#D3AC71" boxSize={6} strokeWidth={1} />
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content
          borderRadius="2xl"
          bg="#f7f0e9"
          px={2}
          py={2}
          boxShadow="md"
        >
          <Menu.Item
            value="My profile"
            fontWeight="medium"
            color="#d3ac71"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#d3ac71" }}
          >
            My profile
          </Menu.Item>
          <Menu.Item
            value="Saved bundles"
            fontWeight="normal"
            color="#000000"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
          >
            Saved bundles
          </Menu.Item>
          <Menu.Item
            value="Invite friends"
            fontWeight="normal"
            color="#000000"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
          >
            Invite friends
          </Menu.Item>
          <Menu.Item
            value="Settings"
            fontWeight="normal"
            color="#000000"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#6e6963", color: "#fff" }}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            value="Log out"
            fontWeight="normal"
            color="#e04a3f"
            borderRadius="md"
            px={3}
            py={2}
            _hover={{ bg: "#fcc1b6", color: "#e04a3f" }}
            onClick={onLogout}
          >
            Log out
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default ProfileIcon;
