import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import InviteButton from '../inviteButton/InviteButton';
import { getInviteMemberCardStyles } from './InviteMemberCard.Styles';
import DoneIcon from '@mui/icons-material/Done';

const InviteMemberCard = ({ key, memberAvatar, memberName, memberEmail }) => {

    const { classes } = getInviteMemberCardStyles();

    const [isInvited, setIsInvited] = useState(false);
    const [children, setChildren] = useState("Invite");

    const handleMemberInvitation = () => {
        setIsInvited(true);
        setChildren("Success");
        // setTimeout(() => {
        //     setIsInvited(false);
        //     setChildren("Invite");
        // }, 3000);
    };

    return (
        <Box
            className={classes.getMemberCardStyles}
            key={key}
        >
            <Box className={classes.getMemberAvatarContStyles}>
                <Avatar
                    src={memberAvatar}
                    alt=""
                    sx={{
                        width: 52,
                        height: 52,
                    }}
                />
            </Box>
            <Box className={classes.getMemberNameContStyles}>
                <Typography className={classes.getMemberNameStyles}>{memberName}</Typography>
            </Box>
            <Box className={classes.getMemberEmailContStyles}>
                <Typography className={classes.getMemberEmailStyles}>{memberEmail}</Typography>
            </Box>
            <Box className={classes.getInviteButtonContStyles}>
            {
                isInvited
                ?
                <InviteButton
                    children={<DoneIcon />}
                    type=""
                    styles={{
                        background:"#4caf50",
                        borderColor:"#4caf50",
                        color:"#FFF",
                        "&:hover": {
                            background:"#4caf50",
                            color:"#FFF",
                        },
                    }}
                />
                :
                <InviteButton
                    children={children}
                    type=""
                    handleMemberInvitation={handleMemberInvitation}
                />
            }
            </Box>
        </Box>
    );
}

export default InviteMemberCard;