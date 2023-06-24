import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { getMealBookingStyles } from './BookMeal.Styles';
import { motion } from 'framer-motion';
import MemberProfilePicture from '../../assets/male avatar.jpg';

const BookMeal = () => {

    const { classes } = getMealBookingStyles();

    // const time = new Date();
    // const currentTime = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds();

    return (
        <Grid container className={classes.getGridContStyles}>
            <Grid item lg={4} md={4} sm={4} xs={12} className={classes.getGridItemStyles}>
                <motion.div className={classes.getCardOneStyles}>
                    <img src={MemberProfilePicture} alt="" className={classes.getMemberPictureStyles} />
                    <Typography className={classes.getMemberNameStyles}>Anshul Vats</Typography>
                    <Typography className={classes.getCaptionOneStyles}>Booking your lunch meal is just a click away !</Typography>
                </motion.div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12} className={classes.getGridItemStyles}>
                <motion.div className={classes.getCardTwoStyles}>
                    Grid item two
                </motion.div>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12} className={classes.getGridItemStyles}>
                <motion.div className={classes.getCardThreeStyles}>
                    Grid item three
                </motion.div>
            </Grid>
        </Grid>
    );
}

export default BookMeal;