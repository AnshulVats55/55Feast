import React from 'react';
import { Button, Skeleton } from '@mui/material';
import { getInviteButtonStyles } from './InviteButton.Styles';
import CircularProgress from '@mui/material/CircularProgress';

const InviteButton = ({ children, type, handleBookMealForBuddy, styles }) => {

    const { classes } = getInviteButtonStyles(styles);

    return (
        <Button
            className={classes.getButtonStyles}
            type={type}
            onClick={handleBookMealForBuddy}
        >
            {children}
        </Button>
    );
}

export default InviteButton;