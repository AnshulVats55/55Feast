import React from 'react';
import { Button } from '@mui/material';
import { getInviteButtonStyles } from './InviteButton.Styles';
import CircularProgress from '@mui/material/CircularProgress';

const InviteButton = ({ children, type, handleMemberInvitation, styles }) => {

    const { classes } = getInviteButtonStyles(styles);

    return (
        <Button
            className={classes.getButtonStyles}
            type={type}
            onClick={handleMemberInvitation}
        >
            {children}
        </Button>
    );
}

export default InviteButton;