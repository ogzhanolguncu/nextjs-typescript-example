import React, { useContext } from 'react';
import { Box, Heading, Flex, Text, Button, Link as StyledLink } from '@chakra-ui/core';
import Link from 'next/link';

import { useBook } from '../context';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
    {children}
  </Text>
);

const Header = (props) => {
  const {
    state: { books },
  } = useBook();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='purple.500'
      color='white'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
          Books count
        </Heading>
        <Box
          d='flex'
          justifyContent='center'
          alignItems='center'
          h='100%'
          bg='orange.300'
          p={5}
          w='10%'
          color='white'
          ml={5}
        >
          <Text fontSize={30}>{books.length}</Text>
        </Box>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg fill='white' width='12px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
      >
        <MenuItems>
          <Link href='/'>Home</Link>
        </MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box display={{ sm: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <Button bg='transparent' border='1px'>
          Create account
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
