import React from 'react';
import {Box,CircularProgress} from "@mui/material";

const Spinner: React.FC = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"  // or a specific height like "400px"
    >
        <CircularProgress size={60} thickness={4} color="secondary" />
    </Box>
);

export default Spinner;