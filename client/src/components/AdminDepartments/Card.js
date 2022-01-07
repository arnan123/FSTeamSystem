import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import DeleteModal from './DeleteModal.js';

const data = {
  imageURL:
    'https://i.ibb.co/6BvPD2L/logo.png',
  name: 'Department 1',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export default function Card() {
  return (
    <Flex px="10" w="full" alignItems="center" display="block">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <DeleteModal/>
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
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
              <Link href="/admin/departments/teams">{data.name}</Link>
            </Box>
        </Box>
      </Box>
    </Flex>
  );
}