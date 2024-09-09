import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import BookTable from './components/BookTable/BookTable';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App: React.FC = () => (
    <ThemeProvider theme={darkTheme}>
        <Layout>
            <BookTable />
        </Layout>
    </ThemeProvider>
);

export default App;