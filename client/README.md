# Book Management System

## Overview

This Book Management System is a React-based web application that allows users to manage a collection of books. Users can view, add, edit, and delete books, with a user-friendly interface built using Material-UI components.

## Features

- View a list of books with pagination
- Add new books to the collection
- Edit existing book information
- Delete books from the collection

## Technologies Used

- React
- TypeScript
- Material-UI
- Formik (for form management)
- Yup (for form validation)

## Setup and Installation

1. Navigate to the project directory:
   ```
   cd library-manager
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Navigate to the server directory:
   ```
   cd server

   ```
4. Create a .env file inside the server directory::
   ```
   touch .env
   ```
5. Add the following to the .env file:
   ```
   DATABASE_URL="postgresql://library_app_21t7_user:AoHSws3B5VjTTwtGHiWUSzsO6XfenTwW@dpg-cre0tilsvqrc73fcgn5g-a.oregon-postgres.render.com/library_app_21t7"
   ```
6. Return to the root project directory:
   ```
   cd ..
   ```
7. Start the the project:
   ```
   npm start

   ```

## Usage

- To view books: Navigate to the main page to see the list of books.
- To add a book: Click the "Add New Book" button and fill out the form.
- To edit a book: Click the edit icon next to a book in the table and modify the information in the form.
- To delete a book: Click the delete icon next to a book in the table.
