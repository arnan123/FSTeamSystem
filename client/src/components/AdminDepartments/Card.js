import React from 'react';
import {
  Flex,
  Box,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import DeleteModal from './DeleteModal.js';
import {PropTypes} from 'prop-types';

export default function Card({departments}) {
  return (
    <Flex px="10" w="full" alignItems="center" display="block">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <DeleteModal id={departments.id}/>
        <Image
          src="https://i.ibb.co/6BvPD2L/logo.png"
          roundedTop="lg"
          boxShadow="md"
        />

        <Box p="6" textAlign="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              <Link fontSize="sm" href={" departments/" + departments.id}>{departments.name}</Link>
            </Box>
        </Box>
      </Box>
    </Flex>
  );
}

Card.propTypes={
  departments:PropTypes.any
}