import React from 'react';
import { Button } from '@mui/material';
import { getButtonStyles } from './CommonButton.Styles';

const CommonButton = ({ children, type, customStyles }) => {

    const { classes } = getButtonStyles(customStyles);

    return (
        <Button className={classes.getCommonButtonStyles} type={type}>
            {children}
        </Button>
    );
}

export default CommonButton;