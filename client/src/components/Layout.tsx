import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
    }}>
        <CssBaseline />
        <Header />
        <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            {children}
        </Container>
        <Footer />
    </Box>
);

export default Layout;