import {Card, Flex, Heading} from '@chakra-ui/react';
import React from 'react';
import {newsList} from "./news-list";

export const News = () => {
  return (
    <Flex direction="column">
      <Heading mb="10px">Новости</Heading>

      <Flex gap="10px" wrap="wrap" justifyContent="space-between">
        {newsList.map((item, index) => (
          <Card.Root width="520px" variant='elevated' key={'news' + index}>
            <Card.Body gap="2">
              <Card.Title mb="2">{item.title}</Card.Title>
              <Card.Description>
                {item.description}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>

    </Flex>
  );
};
