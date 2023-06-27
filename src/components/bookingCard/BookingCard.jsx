import { Button, Typography } from '@mui/material';
import React from 'react';
import CommonButton from '../button/CommonButton';
import { getBookingCardStyles } from './BookingCard.Styles';
import { motion } from 'framer-motion';

const BookingCard = ({ image, heading, caption, actionName, animationDuration, onClick, textColor, backgroundColor, borderColor }) => {

    const { classes } = getBookingCardStyles();

    return (
        <motion.div
            className={classes.getCardStyles}
            initial={{ translateY: '30px', opacity: 0}}
            animate={{ translateY: '0px', opacity: 1}}
            whileHover={{ scale: 1.015 }}
            transition={{
                duration: animationDuration,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        >
            <img src={image} alt="" className={classes.getMemberPictureStyles} />
            <Typography className={classes.getHeadingStyles}>{heading}</Typography>
            <Typography className={classes.getCaptionStyles}>{caption}</Typography>
            <CommonButton
                children={actionName}
                type=""
                customStyles={{
                    fontWeight:"normal",
                    background: backgroundColor ? backgroundColor : "transparent",
                    color: textColor ? textColor : "#ef5d36",
                    borderRadius:"4px",
                    border:"1px solid",
                    borderColor: borderColor ? borderColor : "ef5d36",
                    margin:"1rem 0rem 2rem 0rem",
                    fontSize:"0.9rem",
                    "&:hover": {
                        background: backgroundColor ? backgroundColor : "#ef5d36",
                        color:"#FFF",
                    },
                    "&:focus": {
                        outline:"none",
                    },
                    "@media screen and (max-width: 399px)": {
                        fontSize:"0.85rem",
                    },
                }}
                onClick={onClick ? onClick : null}
            />
        </motion.div>
    );
}

export default BookingCard;