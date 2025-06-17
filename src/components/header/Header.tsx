import React from 'react';
import {Avatar, Box, Button, Flex, Menu, Portal, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {$profile, logout} from "../user/model";
import {useUnit} from "effector-react";
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const profile = useUnit($profile);

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      bg="#54667C"
      px={10}
      py={2}
      h='50px'
    >
      <Flex gap={4} alignItems="center">
        <Button className="navigate" onClick={() => navigate('/')}>Главная</Button>
        <Button className="navigate" onClick={() => navigate('/news')}>Новости</Button>
      </Flex>

      <Menu.Root>
        <Menu.Trigger asChild>
          <Flex padding="20px 0 15px 10px" flexDirection='row' alignItems="center" gap="7px" cursor="pointer">
            <Avatar.Root w="35px" h="35px">
              <Avatar.Fallback name={profile?.fio} />
            </Avatar.Root>
            <Flex flexDirection={'column'}>
              <Flex align="center" gap={1}>
                <Text fontSize="13px" color="#FFFFFF">{profile?.fio}</Text>
              </Flex>
              <Text whiteSpace="pre-wrap" fontSize="12px" color="#FFFFFF">{profile?.role}</Text>
            </Flex>
          </Flex>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item cursor="pointer" value="exit" onClick={() => logout()}>
                <Box flex="1">Выйти</Box>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  )
};
