import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import InviteButton from '../inviteButton/InviteButton';
import { getInviteMemberCardStyles } from './InviteMemberCard.Styles';
import DoneIcon from '@mui/icons-material/Done';
import { motion } from 'framer-motion';

const InviteMemberCard = ({ key, memberAvatar, memberName, memberEmail, children, animationDuration }) => {

    const { classes } = getInviteMemberCardStyles();

    const [isInvited, setIsInvited] = useState(false);
    const handleMemberInvitation = () => {
        setIsInvited(true);
    };

    return (
        <motion.div
            className={classes.getMemberCardStyles}
            key={key}
            initial={{ translateY: '25px', opacity: 0 }}
            whileInView={{ translateY: '0px', opacity: 1}}
            transition={{
                duration: animationDuration,
                repeatType: 'reverse',
                ease:'easeInOut',
            }}
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
        </motion.div>
    );
}

export default InviteMemberCard;