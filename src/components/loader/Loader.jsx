import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getCircularProgressStyles } from './Loader.Styles';

const Loader = () => {
    
    const { classes } = getCircularProgressStyles();

    return (
        <Box sx={{ display:"flex" }} className={classes.getLoaderContStyles}>
            <CircularProgress
                disableShrink={false}
                thickness={5}
                className={classes.getLoaderStyles}
            />
        </Box>
    );
}

export default Loader;