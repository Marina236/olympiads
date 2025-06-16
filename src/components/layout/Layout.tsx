import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {Header} from "../header/Header";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {

  return (
    <Flex flexDirection="column" minH="100vh" backgroundColor="background" overflow="hidden">
      <Box position="sticky" top="0" zIndex={1}>
        <Header />
      </Box>

      <Flex flexGrow={1} h={`calc(100vh - 50px)`} maxH={`calc(100vh - 50px)`}>
        <Box
          as="main"
          marginTop={3}
          backgroundColor="white"
          alignSelf="stretch"
          flexGrow={1}
          flex={4}
          overflow="hidden"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  )
};
