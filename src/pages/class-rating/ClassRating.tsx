import {Flex, Grid, GridItem, Heading, Table, Text} from "@chakra-ui/react"
import React from 'react';
import {rating} from "./list";

export const ClassRating = () => {

  return (
      <Flex direction="column">
          <Heading fontSize="24px" mb="10px">Рейтинг классов</Heading>

          <Table.ScrollArea borderWidth="1px" rounded="md" height="100%">
              <Table.Root size="sm" stickyHeader interactive>
                  <Table.Header>
                      <Table.Row bg="bg.subtle">
                          <Table.ColumnHeader>Класс</Table.ColumnHeader>
                          <Table.ColumnHeader>Общее количество баллов</Table.ColumnHeader>
                          <Table.ColumnHeader>Средний балл</Table.ColumnHeader>
                      </Table.Row>
                  </Table.Header>

                  <Table.Body>
                      {rating.map((item) => (
                          <Table.Row key={item.class}>
                              <Table.Cell>{item.class}</Table.Cell>
                              <Table.Cell>{item.totalPoints}</Table.Cell>
                              <Table.Cell>{item.averagePoints}</Table.Cell>
                          </Table.Row>
                      ))}
                  </Table.Body>
              </Table.Root>
          </Table.ScrollArea>

      </Flex>
  );
};
