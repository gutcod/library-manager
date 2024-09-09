import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TablePagination,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useBooks } from '../../hooks/useBooks';
import BookTableRow from './BookTableRow';
import BookFormDialog from '../BookForm/BookFormDialog';
import { Book } from '../../types/Book';
import Spinner from "../Spinner";

const BookTable: React.FC = () => {
    const { books, error, removeBook } = useBooks();
    const [openForm, setOpenForm] = useState(false);
    const [editingBook, setEditingBook] = useState<Book | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleAddBook = () => {
        setEditingBook(null);
        setOpenForm(true);
    };

    const handleEditBook = (book: Book) => {
        setEditingBook(book);
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
        setEditingBook(null);
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (error) return <div>Error loading books.</div>;
    if (!books) return <Spinner />;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, books.length - page * rowsPerPage);

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddBook}
                sx={{ mb: 2 }}
            >
                Add New Book
            </Button>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : books
                        ).map((book) => (
                            <BookTableRow
                                key={book.id}
                                book={book}
                                onEdit={handleEditBook}
                                onDelete={removeBook}
                            />
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={4} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={books.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <BookFormDialog
                open={openForm}
                onClose={handleCloseForm}
                book={editingBook}
            />
        </>
    );
};

export default BookTable;