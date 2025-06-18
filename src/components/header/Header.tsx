import React from 'react';
import {Avatar, Box, Button, Flex, Menu, Portal, Text} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router-dom";
import {$profile, logout} from "../user/model";
import {useUnit} from "effector-react";
import './Header.css';

export const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const profile = useUnit($profile);
  const isActive = (name: string) =>
      name === '/'
          ? pathname === name
          : pathname !== '/'
              ? pathname.includes(name) ||
              name.includes(pathname)
              : false;

  const navigateMenu = [
    {
      name: 'Личный кабинет',
      path: '/my',
      visibleRoles: ['student']
    },
    {
      name: 'Мой ребёнок',
      path: '/my-child',
      visibleRoles: ['parent']
    },
    {
      name: 'Рейтинг классов',
      path: '/class-rating',
      visibleRoles: ['teacher']
    },
    {
      name: 'Рейтинг класса',
      path: '/class-rating',
      visibleRoles: ['parent', 'student']
    },
    {
      name: 'Новости',
      path: '/news',
      visibleRoles: ['teacher', 'parent', 'student']
    },
  ];

  const transformRole = (role: 'student' | 'teacher' | 'parent') => {
    switch (role) {
      case 'student':
        return 'Ученик'
      case 'teacher':
        return 'Учитель'
      case 'parent':
        return 'Родитель'
      default:
        break;
    }
  }

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
        {navigateMenu.filter(menu => menu.visibleRoles.includes(profile?.role || ''))
            .map((menu) => (
            <Button className={isActive(menu.path) ? 'navigate-active' : 'navigate'}
                    onClick={() => navigate(menu.path)}>{menu.name}</Button>
        ))}
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
              {profile?.role && <Text whiteSpace="pre-wrap" fontSize="12px" color="#FFFFFF">{transformRole(profile.role)}</Text>}
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
