import axios from 'axios';
import { Book,ApiResponse } from '../types/Book';

const API_URL = 'http://localhost:3001/api'; // Adjust as needed

export const fetchBooks = () =>
    axios.get<ApiResponse<Book[]>>(`${API_URL}/books`).then(res => res.data.data);
export const addBook = (book: Omit<Book, 'id'>) => axios.post<ApiResponse<Book>>(`${API_URL}/books`, book).then(res => res.data.data);
export const updateBook = (book: Book) => axios.put<ApiResponse<Book>>(`${API_URL}/books/${book.id}`, book).then(res => res.data.data);
export const deleteBook = (id: number) => axios.delete(`${API_URL}/books/${id}`);
