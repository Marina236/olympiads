import {Flex, Grid, GridItem, Heading, Text, Image, Card as CardChakra, Avatar, Table, Breadcrumb} from "@chakra-ui/react"
import React from 'react';
import Moment from 'moment';
import {useNavigate, useParams} from "react-router-dom";
import {rating} from "../../mocks/rating";
import {useUnit} from "effector-react/compat";
import {$profile} from "../../components/user/model";
import gold from '../../image/gold.png';
import silver from '../../image/silver.png';
import bronze from '../../image/bronze.png';
import certificate from '../../image/certificate.png';

export const Card = () => {
    const {id, childId} = useParams<{id: string; childId: string}>();
    const role = useUnit($profile)?.role;
    const navigate = useNavigate();

    const classItem = rating.find(r => r.class === (id || '11А'));
    const childItem = classItem?.students?.find(s => String(s.studentId) === (childId || '1012'));

    if (!classItem  || !childItem) {
      return <Text>Ученик не найден</Text>
    }

    const getImage = (type: string) => {
        switch (type) {
            case 'gold':
              return gold
            case 'silver':
                return silver
            case 'bronze':
                return bronze
            case 'certificate':
                return certificate
            default:
                break;
        }
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
                      <Breadcrumb.Item cursor="pointer" onClick={() => navigate(`/class-rating/${classItem.class}`)}>
                          <Breadcrumb.Link>{classItem.class}</Breadcrumb.Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Separator />
                      <Breadcrumb.Item>
                          <Breadcrumb.Link>{childItem.fullName}</Breadcrumb.Link>
                      </Breadcrumb.Item>
                  </Breadcrumb.List>
              </Breadcrumb.Root>
          ) : null}
          <Heading fontSize="24px" mb="10px">{childItem.fullName} ({classItem?.class})</Heading>
          {/*<Text mb="20px">Всего наград: 3 (🥇1 🥈1 📜1)</Text>*/}
          <Grid templateColumns="repeat(3, 1fr)" gap="6">
            <GridItem colSpan={1}>
              <Heading mb="10px">Список наград</Heading>
                <Flex gap="10px" direction="column">
                    {childItem?.awards?.length ? (
                        <>
                            {childItem?.awards?.map((item, index) => (
                                <CardChakra.Root variant='elevated' key={'award' + index}>
                                    <Flex padding="10px" direction="row" gap="1" alignItems="center"
                                          justifyContent="space-between">
                                        <Flex padding="10px" gap="1" direction="column">
                                            <CardChakra.Title>{item.title}</CardChakra.Title>
                                            <CardChakra.Description color="fg.muted">
                                                {item.description}
                                            </CardChakra.Description>
                                        </Flex>

                                        <Image
                                            src={getImage(item.type)}
                                            w="40px"
                                            h='40px'
                                            objectFit="contain"
                                            rounded="100%"
                                        />

                                        {/*<Avatar.Root>*/}
                                        {/*    <Avatar.Fallback name={item.type}/>*/}
                                        {/*    <Avatar.Image src={getImage(item.type)}/>*/}
                                        {/*</Avatar.Root>*/}
                                    </Flex>
                                </CardChakra.Root>
                            ))}
                        </>
                    ) : (<Text>Нет наград</Text>)}
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
                            {childItem?.history?.map((item) => (
                                <Table.Row key={item.olympiadId}>
                                    <Table.Cell>{item.olympiadName}</Table.Cell>
                                    <Table.Cell>{Moment(item.date).format('DD.MM.YYYY')}</Table.Cell>
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
