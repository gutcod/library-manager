import useSWR from 'swr';
import { fetchBooks, addBook, updateBook, deleteBook } from '../services/api';
import { Book } from '../types/Book';

export const useBooks = () => {
    const { data: books, error, mutate } = useSWR<Book[]>('/books', fetchBooks);

    console.log({books, error, mutate});

    const addNewBook = async (book: Omit<Book, 'id'>) => {
        const newBook = await addBook(book);
        mutate([...(books || []), newBook]);
    };

    const updateExistingBook = async (book: Book) => {
        await updateBook(book);
        mutate(books?.map(b => b.id === book.id ? book : b));
    };

    const removeBook = async (id: number) => {
        await deleteBook(id);
        mutate(books?.filter(b => b.id !== id));
    };

    return { books, error, addNewBook, updateExistingBook, removeBook };
};