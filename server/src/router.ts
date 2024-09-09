import {Router} from 'express'
import { body } from "express-validator"
import {createBook, deleteBook, getBooks, getOneBook, updateBook} from "./handler/book";
import { handleInputErrors } from './modules/middleware'

const router = Router()
/**
 * Books
 */

router.get('/books',getBooks)
router.get('/books/:id', getOneBook)
router.post(
    '/books',
    [
        body('title').isString(),
        body('author').isString(),
        body('genre').isString(),
        body('description').isString()
    ],
    handleInputErrors,
    createBook
);
router.put('/books/:id',
    [
        body('title').isString(),
        body('author').isString(),
        body('genre').isString(),
        body('description').isString()
    ],
    handleInputErrors,
    updateBook
)
router.delete('/books/:id', deleteBook)

export default router