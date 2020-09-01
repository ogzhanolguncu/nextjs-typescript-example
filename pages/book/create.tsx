import { useForm } from 'react-hook-form';
import React, { useContext } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
} from '@chakra-ui/core';

import { BookContext, BookType } from '../context/BookContext';
import { Types } from '../reducers/bookReducer';
import Link from 'next/link';

export default function Create() {
  const { dispatch } = useContext(BookContext);

  const { handleSubmit, errors, register, formState } = useForm();

  function validateTitle(title: string) {
    let error;
    if (!title) {
      error = 'Author is required';
    }
    return error || true;
  }

  function validateAuthor(author: string) {
    let error;
    if (!author) {
      error = 'Title is required';
    }
    return error || true;
  }

  function onSubmit({ title, author }: BookType) {
    dispatch({ type: Types.Create, payload: { title, author } });
  }

  return (
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.title}>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input name='title' placeholder='Title' ref={register({ validate: validateTitle })} />
            <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.author}>
            <FormLabel htmlFor='author'>Author</FormLabel>
            <Input
              name='author'
              placeholder='Author'
              ref={register({ validate: validateAuthor })}
            />
            <FormErrorMessage>{errors.author && errors.author.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} variantColor='purple' isLoading={formState.isSubmitting} type='submit'>
            Submit
          </Button>
         
        </form>
      </Box>
    </Flex>
  );
}
