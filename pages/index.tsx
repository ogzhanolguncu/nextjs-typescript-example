import Head from 'next/head';
import Link from 'next/link';

import { useEffect, useContext } from 'react';
import styles from '../styles/Home.module.css';
import { Flex, Text, Box, Heading, Stack, Button } from '@chakra-ui/core';

import { BookContext } from './context/BookContext';
import { Types } from './reducers/bookReducer';

type HomeProps = {
  bookList: BookProps[] | undefined;
};

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export default function Home({ bookList = [] }: HomeProps) {
  const {
    dispatch,
    state: { books },
  } = useContext(BookContext);

  useEffect(() => {
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Book List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex alignItems='center' justifyContent='center' d='flex' mt={10}>
        <Box
          fontSize={['sm', 'md', 'lg', 'xl']}
          minW={[
            '100%', // base
            '50%', // 480px upwards
            '25%', // 768px upwards
            '15%', // 992px upwards
          ]}
        >
          <Box d='flex' flexDirection='row' justifyContent='space-between'>
            <Heading color='purple.500' mb={5} size='xl'>
              Famous Books
            </Heading>
            <Button variantColor='purple' variant='outline' ml={20}>
              <Link href='/book/create'>
                NEW
              </Link>
            </Button>
          </Box>
          <Box rounded='md' bg='purple.500' color='white' px={15} py={15}>
            <Stack spacing={8}>
              {books.map((item) => (
                <Feature title={item.title} desc={item.author} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

type BookProps = {
  title: string;
  author: string;
};

Home.getInitialProps = () => {
  const bookList: BookProps[] = [
    {
      title: '1984',
      author: 'George Orwell',
    },
    {
      title: 'Harry Potter and the Philosopher’s Stone',
      author: 'J.K. Rowling',
    },
    {
      title: ' The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
  ];
  return { bookList };
};
