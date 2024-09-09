import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Button,
    Box,
} from '@mui/material';
import { Book } from '../../types/Book';
import { useBooks } from '../../hooks/useBooks';

interface BookFormProps {
    book?: Book | null;
    onSubmitSuccess?: () => void;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    genre: Yup.string().required('Genre is required'),
    description: Yup.string().required('Description is required'),
});

const BookForm: React.FC<BookFormProps> = ({ book, onSubmitSuccess }) => {
    const { addNewBook, updateExistingBook } = useBooks();

    const formik = useFormik({
        initialValues: {
            title: book?.title || '',
            author: book?.author || '',
            genre: book?.genre || '',
            description: book?.description || '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (book) {
                await updateExistingBook({ ...book, ...values });
            } else {
                await addNewBook(values);
            }
            if (onSubmitSuccess) onSubmitSuccess();
            formik.resetForm();
        },
    });

    return (
        <Box
            sx={{
                width: 'calc(100vw / 3)',
            }}
        >
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="author"
                    name="author"
                    label="Author"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                    error={formik.touched.author && Boolean(formik.errors.author)}
                    helperText={formik.touched.author && formik.errors.author}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="genre"
                    name="genre"
                    label="Genre"
                    value={formik.values.genre}
                    onChange={formik.handleChange}
                    error={formik.touched.genre && Boolean(formik.errors.genre)}
                    helperText={formik.touched.genre && formik.errors.genre}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ mb: 2 }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {book ? 'Update Book' : 'Add Book'}
                </Button>
            </Box>
        </Box>
    );
};

export default BookForm;