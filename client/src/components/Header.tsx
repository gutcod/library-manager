import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Header: React.FC = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Personal Library Manager
            </Typography>
            <IconButton color="inherit">
                <AccountCircle />
            </IconButton>
        </Toolbar>
    </AppBar>
);

export default Header;