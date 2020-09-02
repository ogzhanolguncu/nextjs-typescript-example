import React, { createContext, Dispatch, useReducer, useContext } from 'react';

import { bookReducer, BookActions } from 'reducers';

export type BookType = {
  title: string;
  author: string;
};

type InitialStateType = {
  books: BookType[];
};

const initialState: InitialStateType = {
  books: [
    {
      author: 'George Orwell',
      title: '1984',
    },
    {
      author: 'Aldous Huxley',
      title: 'Brave New World',
    },
    {
      title: 'Harry Potter and the Philosopher’s Stone',
      author: 'J.K. Rowling',
    },
    {
      title: ' The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
  ],
};

const BookContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<BookActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ books }: InitialStateType, action: BookActions) => ({
  books: bookReducer(books, action),
});

const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <BookContext.Provider value={{ state, dispatch }}>{children}</BookContext.Provider>;
};

const useBook = () => useContext(BookContext);
export { BookContextProvider, BookContext, useBook };
