import React, { useState } from 'react';
import { Typography, Skeleton, Grid } from '@mui/material';
import InviteButton from '../inviteButton/InviteButton';
import { getInviteMemberCardStyles } from './InviteMemberCard.Styles';
import DoneIcon from '@mui/icons-material/Done';
import { motion } from 'framer-motion';

const InviteMemberCard = ({ indexNumber, memberName, memberEmail, children, animationDuration, isDataLoaded , bookMealForBuddy}) => {

    const { classes } = getInviteMemberCardStyles();

    const [isInvited, setIsInvited] = useState(false);
    const handleMemberInvitation = () => {
        setIsInvited(true);
    };

    const handleMemberName = () => {
        const finalName = memberName.split(" ");
        if(finalName.length === 1){
            memberName = finalName[0];
        }
        else if(finalName.length >= 2){
            memberName = finalName[0] + " " + finalName[1];
        }
    };

    const handleMemberEmail = () => {
        if(memberEmail.length > 24){
            memberEmail = memberEmail.substring(0, 24) + "...";
        }
    };

    handleMemberEmail();
    handleMemberName();

    return (
        <>
            {
                isDataLoaded
                ?
                <motion.div
                    className={classes.getMemberCardStyles}
                    key={indexNumber}
                    initial={{ translateY: '25px', opacity: 0 }}
                    whileInView={{ translateY: '0px', opacity: 1}}
                    transition={{
                        duration: animationDuration,
                        repeatType: 'reverse',
                        ease:'easeInOut',
                    }}
                >
                    <Grid container className={classes.getGridContStyles}>
                        <Grid item lg={1} md={1} sm={1} xs={0} className={classes.getMemberNumberContStyles}>
                            <Typography className={classes.getMemberNumberStyles}>{indexNumber}</Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={9} className={classes.getMemberNameContStyles} >
                            <Typography className={classes.getMemberNameStyles}>{memberName}</Typography>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5} xs={0} className={classes.getMemberEmailContStyles}>
                            <Typography className={classes.getMemberEmailStyles}>{memberEmail}</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={3} className={classes.getInviteButtonContStyles}>
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
                                "@media screen and (max-width: 615px)": {
                                    fontSize:"0.8rem !important",
                                },
                                "@media screen and (max-width: 370px)": {
                                    padding:"0.15rem 0rem !important",
                                },
                            }}
                        />
                        :
                        <InviteButton
                            children={children}
                            type=""
                            handleBookMealForBuddy={bookMealForBuddy}
                            styles={{
                                "@media screen and (max-width: 615px)": {
                                    fontSize:"0.8rem",
                                },
                                "@media screen and (max-width: 370px)": {
                                    padding:"0.15rem 0rem",
                                },
                            }}
                        />
                        }
                        </Grid>
                    </Grid>
                </motion.div>
                :
                <Skeleton animation="wave">
                <motion.div
                    className={classes.getMemberCardStyles}
                    key={indexNumber}
                    initial={{ translateY: '25px', opacity: 0 }}
                    whileInView={{ translateY: '0px', opacity: 1}}
                    transition={{
                        duration: animationDuration,
                        repeatType: 'reverse',
                        ease:'easeInOut',
                    }}
                >
                    <Grid container>

                        <Skeleton animation="wave">
                            <Grid item lg={1} md={1} sm={1} xs={0} className={classes.getMemberAvatarContStyles}>
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberNumberStyles}>{indexNumber}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item lg={4} md={4} sm={4} xs={4} className={classes.getMemberNameContStyles} >
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberNameStyles}>{memberName}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item lg={5} md={5} sm={5} xs={5} className={classes.getMemberEmailContStyles}>
                                <Skeleton animation="wave">
                                    <Typography className={classes.getMemberEmailStyles}>{memberEmail}</Typography>
                                </Skeleton>
                            </Grid>
                        </Skeleton>

                        <Skeleton animation="wave">
                            <Grid item className={classes.getInviteButtonContStyles}>
                            {
                            isInvited
                            ?
                            <Skeleton animation="wave">
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
                            </Skeleton>
                            :
                            <Skeleton animation="wave">
                                <InviteButton
                                    children={children}
                                    type=""
                                    handleMemberInvitation={handleMemberInvitation}
                                    styles={{
                                        "@media screen and (max-width: 532px)": {
                                            fontSize:"0.8rem !important",
                                            padding:"0.15rem 0rem",
                                        },
                                    }}
                                />
                            </Skeleton>
                            }
                            </Grid>
                        </Skeleton>
                    </Grid>
                </motion.div>
                </Skeleton>
            }
        </>
    );
}

export default InviteMemberCard;