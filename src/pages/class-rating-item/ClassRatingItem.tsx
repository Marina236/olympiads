import {Breadcrumb, Flex, Heading, Table, Text} from "@chakra-ui/react"
import React from 'react';
import {useUnit} from "effector-react/compat";
import {$profile} from "../../components/user/model";
import {useNavigate, useParams} from "react-router-dom";
import {rating} from "../../mocks/rating";

export const ClassRatingItem = () => {
    const {id} = useParams<{id: string}>();
    const role = useUnit($profile)?.role;
    const navigate = useNavigate();

    const classItem = rating.find(r => r.class === (id || '11А'));

    if (!classItem) {
        return <Text>Класс не найден</Text>
    }

  return (
      <Flex direction="column">
          {role === 'teacher' ? (
              <Breadcrumb.Root mb="10px">
                  <Breadcrumb.List>
                      <Breadcrumb.Item cursor="pointer" onClick={() => navigate(`/class-rating`)}>
                          <Breadcrumb.Link>Рейтинг классов</Breadcrumb.Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Separator />
                      <Breadcrumb.Item>
                          <Breadcrumb.Link>{classItem.class}</Breadcrumb.Link>
                      </Breadcrumb.Item>
                  </Breadcrumb.List>
              </Breadcrumb.Root>
          ) : null}

          <Heading fontSize="24px" mb="10px">Рейтинг класса {classItem.class}</Heading>

          <Table.ScrollArea borderWidth="1px" rounded="md" height="100%">
              <Table.Root size="sm" stickyHeader interactive={role === 'teacher'}>
                  <Table.Header>
                      <Table.Row bg="bg.subtle">
                          <Table.ColumnHeader>ФИО</Table.ColumnHeader>
                          <Table.ColumnHeader>Общее количество баллов</Table.ColumnHeader>
                          <Table.ColumnHeader>Количество участий в олимпиадах</Table.ColumnHeader>
                          <Table.ColumnHeader>Количество наград</Table.ColumnHeader>
                      </Table.Row>
                  </Table.Header>

                  <Table.Body>
                      {classItem?.students.map((item) => (
                          <Table.Row key={item.studentId} onClick={() => role === 'teacher' && navigate('child/' + item.studentId)}>
                              <Table.Cell>{item.fullName}</Table.Cell>
                              <Table.Cell>{item.totalPoints}</Table.Cell>
                              <Table.Cell>{item.participationCount }</Table.Cell>
                              <Table.Cell>{item.awards.length ? item.awards.length : '-' }</Table.Cell>
                          </Table.Row>
                      ))}
                  </Table.Body>
              </Table.Root>
          </Table.ScrollArea>

      </Flex>
  );
};
