import {Flex, Grid, GridItem, Heading, Text, Card as CardChakra, Avatar, Table} from "@chakra-ui/react"
import React from 'react';
import {awards} from "./awards";
import {history} from "./history";

export const Card = () => {

  return (
      <Flex direction="column">
          <Heading fontSize="24px" mb="10px">Смирнов Егор Сергеевич (11А)</Heading>
          <Text>Всего наград: 3 (🥇1 🥈1 📜1)</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap="6">
            <GridItem colSpan={1}>
              <Heading mb="10px">Список наград</Heading>
              <Flex gap="10px" direction="column">
                {awards.map((item, index) => (
                  <CardChakra.Root variant='elevated' key={'award' + index}>
                    <Flex padding="10px" direction="row" gap="1" alignItems="center" justifyContent="space-between">
                      <Flex padding="10px" gap="1" direction="column">
                        <CardChakra.Title>{item.title}</CardChakra.Title>
                        <CardChakra.Description color="fg.muted">
                          {item.description}
                        </CardChakra.Description>
                      </Flex>
                      <Avatar.Root>
                        <Avatar.Fallback name={item.type} />
                        <Avatar.Image src={item.type} />
                      </Avatar.Root>
                    </Flex>
                  </CardChakra.Root>
                ))}
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Heading mb="10px">История участия</Heading>

                <Table.ScrollArea borderWidth="1px" rounded="md">
                    <Table.Root size="sm" stickyHeader>
                        <Table.Header>
                            <Table.Row bg="bg.subtle">
                                <Table.ColumnHeader>Наименование</Table.ColumnHeader>
                                <Table.ColumnHeader>Дата</Table.ColumnHeader>
                                <Table.ColumnHeader>Набранные баллы</Table.ColumnHeader>
                                <Table.ColumnHeader>Достижение </Table.ColumnHeader>
                                <Table.ColumnHeader>Награда</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {history.map((item) => (
                                <Table.Row key={item.olympiadId}>
                                    <Table.Cell>{item.olympiadName}</Table.Cell>
                                    <Table.Cell>{item.date}</Table.Cell>
                                    <Table.Cell>{item.points}/{item.maxPoints}</Table.Cell>
                                    <Table.Cell>{item.status}</Table.Cell>
                                    <Table.Cell>{item.award}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Table.ScrollArea>
            </GridItem>
          </Grid>
      </Flex>

  );
};
