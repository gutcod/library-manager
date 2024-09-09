import React from 'react';
import { TableRow, TableCell, IconButton, Tooltip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Book } from '../../types/Book';

interface BookTableRowProps {
    book: Book;
    onEdit: (book: Book) => void;
    onDelete: (id: number) => void;
}

const BookTableRow: React.FC<BookTableRowProps> = ({ book, onEdit, onDelete }) => (
    <TableRow>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.author}</TableCell>
        <TableCell>{book.genre}</TableCell>
        <TableCell
            sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '150px' // Adjust as needed
            }}
        >
            <Tooltip title={book.description} arrow>
                <span>{book.description}</span>
            </Tooltip>
        </TableCell>
        <TableCell>
            <IconButton onClick={() => onEdit(book)} size="small">
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(book.id)} size="small">
                <DeleteIcon />
            </IconButton>
        </TableCell>
    </TableRow>
);

export default BookTableRow;