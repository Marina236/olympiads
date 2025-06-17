import {Button, Card, Field, Flex, Input, Stack, Text} from "@chakra-ui/react"
import React, {useEffect} from 'react';
import {Controller, useForm} from "react-hook-form";
import {$authorisationError, login, resetError} from "./login";
import {useUnit} from "effector-react";

export const LoginForm = () => {
  const {control, handleSubmit} = useForm<{login: string, password: string}>({mode: 'onChange'});

  const submit = handleSubmit(data => {
    login({...data, login: data.login.trim()});
  });

  const error = useUnit($authorisationError);

  useEffect(() => {
    return () => {
      resetError();
    }
  }, []);

  return (
    <Flex as="form"
          onSubmit={submit}
          bg='#EEEFF1'
          direction="column"
          h="100vh"
          alignItems="center"
          justifyContent="center">
      <Card.Root bg="white" maxW="sm" width="500px">
        <Card.Header>
          <Card.Title>Авторизация</Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Controller
              name="login"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState  }) =>
                <Field.Root invalid={fieldState.invalid}>
                  <Field.Label>Логин</Field.Label>
                  <Input {...field}/>
                </Field.Root>
            }/>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState  }) =>
                  <Field.Root invalid={fieldState.invalid}>
                    <Field.Label>Пароль</Field.Label>
                    <Input type="password"  {...field}/>
                  </Field.Root>
              }/>
          </Stack>
          {error && (
            <Text fontSize="14px" textAlign="center" color="border.error">
              {error}
            </Text>
          )}
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button type="submit" variant="solid">Войти</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};
