import React from 'react';
import {Dialog, DialogTitle, DialogContent, IconButton} from '@mui/material';
import BookForm from './BookForm.tsx';
import { Book } from '../../types/Book.ts';
import CloseIcon from "@mui/icons-material/Close";

interface BookFormDialogProps {
    open: boolean;
    onClose: () => void;
    book: Book | null;
}

const BookFormDialog: React.FC<BookFormDialogProps> = ({ open, onClose, book }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{book ? 'Edit Book' : 'Add New Book'}</DialogTitle>
        <IconButton
            aria-label="close"
            onClick={onClose}
            sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
            })}
        >
            <CloseIcon />
        </IconButton>
        <DialogContent>
            <BookForm book={book} onSubmitSuccess={onClose} />
        </DialogContent>
    </Dialog>
);

export default BookFormDialog;