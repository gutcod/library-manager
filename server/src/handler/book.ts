import prisma from "../db"

// Get all
export const getBooks = async (req, res) => {
    const book = await prisma.book.findMany()

    res.json({data: book})
}

// Get one
export const getOneBook = async (req, res) => {
    const id = parseInt(req.params.id)

    const book = await prisma.book.findFirst({
        where: {
            id,
        }
    })

    res.json({data: book})
}

// Create one
export const createBook = async (req, res) => {
    const book = await prisma.book.create({
        data: {
           title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description
        }
    })

    res.json({data: book})
}


// Update one
export const updateBook = async (req, res) => {
    const id = parseInt(req.params.id)
    const updated = await prisma.book.update({
        where: {
            id,
        },
        data: {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description
        }
    })

    res.json({data: updated})
}

// Delete one
export const deleteBook = async (req, res) => {
    const id = parseInt(req.params.id)
    const deleted = await prisma.book.delete({
        where: {
                id,
        }
    })

    res.json({data: deleted})
}