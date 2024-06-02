import { createContext } from 'react';

const postContext = createContext([]);
const deletePostContext = createContext(false);
const deleteIdContext = createContext(null);

export { postContext, deletePostContext, deleteIdContext };
