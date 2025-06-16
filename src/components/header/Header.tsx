import React from 'react';
import {Avatar, Box, Button, Flex, Menu, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      bg="#4f99b7"
      px={10}
      py={2}
      h='50px'
    >
      <Flex gap={4} alignItems="center">
        <Button onClick={() => navigate('/')}>Главная</Button>
        <Button onClick={() => navigate('/news')}>Новости</Button>
      </Flex>


        <Menu.Root positioning={{ placement: "bottom-start"}}>
          <Menu.Trigger asChild>
            <Flex padding="20px 0 15px 10px" flexDirection='row' alignItems="center" gap="7px" cursor="pointer">
              <Avatar.Root w="35px" h="35px">
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
              </Avatar.Root>
              <Flex flexDirection={'column'}>
                <Flex align="center" gap={1}>
                  <Text fontSize="12px" color="#FFFFFF">Ученик</Text>
                </Flex>
              </Flex>
            </Flex>
          </Menu.Trigger>
            <Menu.Content>
              <Menu.Item value="exit">
                {/*<Icon fill="gray.600" w={5} h={5} >*/}
                {/*  <MdOutlineLogout />*/}
                {/*</Icon>*/}
                <Box flex="1">Выйти</Box>
              </Menu.Item>
            </Menu.Content>
        </Menu.Root>
    </Flex>
  )
};
