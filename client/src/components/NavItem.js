import React from 'react';
import { Flex, Icon, Link } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

export default function NavItem(props, { ...rest }) {
  return (
    <Link
      href={props.address}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.800',
          color: 'white',
        }}
        {...rest}>
        {props.icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={props.icon}
          />
        )}
        {props.children}
      </Flex>
    </Link>
  );
}

NavItem.propTypes = {
  icon: PropTypes.any,
  children: PropTypes.any,
  address: PropTypes.any,
};
