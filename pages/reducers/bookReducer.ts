type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = 'CREATE_BOOK',
  Delete = 'DELETE_DELETE',
}

type BookPayload = {
  [Types.Create]: {
    title: string;
    author: string;
  };
  [Types.Delete]: {
    title: string;
  };
};

export const initialState = {
  title: '',
  author: '',
};
type State = typeof initialState;

export type BookActions = ActionMap<BookPayload>[keyof ActionMap<BookPayload>];

export const bookReducer = (state: State[], action: BookActions) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
      break;
    case Types.Delete:
      return state.filter((book) => book.title !== action.payload.title);
    default:
      return state;
  }
};
