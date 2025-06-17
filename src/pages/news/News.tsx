import {Badge, Card, Flex, Grid, Heading, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {newsList} from "./news-list";
import Moment from "moment/moment";

export const News = () => {
  return (
    <Flex direction="column">
      <Heading mb="10px">Новости</Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap="20px">
        {newsList.map((item, index) => (
          <Card.Root variant='elevated' key={'news' + index}>
            <Card.Body gap="2">
              <Text fontSize="16px">{Moment(item.date).format('DD.MM.YYYY')}</Text>
              <Card.Title mb="1">{item.title}</Card.Title>
              <Text fontSize="16px">{item.description}</Text>
              <Text fontSize="12px" color="#52525b">{item.requirements}</Text>
              <Stack direction="row">
                {item.tag.map((tag, index) => (
                  <Badge colorPalette="purple" key={'tag' + index}>{tag}</Badge>
                ))}
              </Stack>
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>

    </Flex>
  );
};
