import {Button, Card, Field, Flex, Input, Stack} from "@chakra-ui/react"
import React from 'react';

export const Login = () => {
  return (
    <Flex direction="column" h="100vh" alignItems="center" justifyContent="center">
      <Card.Root maxW="sm" width="500px">
        <Card.Header>
          <Card.Title>Авторизация</Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Логин</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Пароль</Field.Label>
              <Input type="password" />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="solid">Войти</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};
