import React, { useState, useEffect, useRef } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import { getBookForBuddyDialogStyles } from './BookForBuddy.Styles';
import MaleAvatar from '../../assets/male avatar.jpg';
import InviteButton from '../inviteButton/InviteButton';
import InviteMemberCard from '../card/InviteMemberCard';

const BookForBuddyDialog = ({ open, scroll, handleClose }) => {

    const { classes } = getBookForBuddyDialogStyles();
    
    const [searchTerm, setSearchTerm] = useState("");
    let animationDuration = 0.4;

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    const memberData = [//member's dummy data
        {
            memberAvatar: MaleAvatar,
            memberName: "Anshul Vats",
            memberEmail: "anshul.vats@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
        {
            memberAvatar: MaleAvatar,
            memberName: "Sameer",
            memberEmail: "sameer.srivastava@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
        {
            memberAvatar: MaleAvatar,
            memberName: "Md Ishaq",
            memberEmail: "mohammad.ishaq@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
        {
            memberAvatar: MaleAvatar,
            memberName: "Vipul Khanna",
            memberEmail: "vipul.khanna@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
        {
            memberAvatar: MaleAvatar,
            memberName: "Shakshi Agarwal",
            memberEmail: "shakshi.agarwal@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
        {
            memberAvatar: MaleAvatar,
            memberName: "Vishal Burnwal",
            memberEmail: "vishal.burnwal@fiftyfivetech.io",
            action: <InviteButton children="Invite" type="" />
        },
    ];

    const handleMemberSearch = event => {//handles member search
        setSearchTerm(event.target.value.toLowerCase());
    };
    const filteredUsers = memberData.filter(member => member.memberName.toLowerCase().includes(searchTerm));

    return (
        <div style={{background:"brown !important"}}>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className={classes.getDialogBoxStyles}
            >
                <DialogTitle
                    id="scroll-dialog-title"
                    className={classes.getDialogTitleStyles}
                >
                    Book for buddy
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'} className={classes.getDialogContentStyles}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        className={classes.getDialogContentTextStyles}
                    >
                        <Typography
                            sx={{
                                fontSize:"1rem",
                            }}
                        >
                            Book a lunch count for your buddy and invite them to have lunch with you
                        </Typography>
                        <TextField
                            type="search"
                            placeholder=""
                            variant="outlined"
                            multiline
                            className={classes.root}
                            inputProps={{ className: classes.input }}
                            onChange={handleMemberSearch}
                        />
                {
                    filteredUsers.length !== 0
                    ?
                    filteredUsers?.map((member, index)=>{
                        animationDuration = animationDuration + 0.05;
                        return(
                            <InviteMemberCard
                                key={index}
                                memberAvatar={member.memberAvatar}
                                memberName={member.memberName}
                                memberEmail={member.memberEmail}
                                animationDuration={animationDuration}
                                children="Book"
                            />
                        );
                    })
                    :
                    <Typography
                        sx={{
                            fontSize:"1rem",
                            marginTop:"2rem",
                        }}
                    >
                        No buddy found with this name !
                    </Typography>
                }
                    </DialogContentText>
            </DialogContent>
            <DialogActions
                className={classes.getDialogActionStyles}
            >
                <Button
                    onClick={handleClose}
                    className={classes.getCloseButtonStyles}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default BookForBuddyDialog;