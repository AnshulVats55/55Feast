import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { getMealBookingStyles } from './BookMeal.Styles';
// import { motion } from 'framer-motion';
import PrebookImage from '../../assets/prebook image.jpg';
import FriendImage from '../../assets/friends image.jpg';
import SoloImage from '../../assets/solo image.jpg';
import BookingCard from '../../components/bookingCard/BookingCard';
import BookForBuddyDialog from '../../components/dialog/BookForBuddy';
import PrebookDialog from '../../components/dialog/PrebookDialog';

const BookMeal = () => {

    const { classes } = getMealBookingStyles();

    const [bookForBuddyOpen, setBookForBuddyOpen] = useState(false);
    const [prebookOpen, setPrebookOpen] = useState(false);
    const [bookForBuddyScroll, setBookForBuddyScroll] = useState('paper');
    const [prebookScroll, setPrebookScroll] = useState('paper');
    const [isBooked, setIsBooked] = useState(false);

    const handleBookForBuddyOpen = (scrollType) => () => {
        setBookForBuddyOpen(true);
        setBookForBuddyScroll(scrollType);
    };

    const handleBookForBuddyClose = () => {
        setBookForBuddyOpen(false);
    };

    const handlePrebookOpen = (scrollType) => () => {
        setPrebookOpen(true);
        setPrebookScroll(scrollType);
    };

    const handlePrebookClose = () => {
        setPrebookOpen(false);
    };

    const handleMemberCountBooking = () => {
        setIsBooked(true);
    };

    return (
        <Grid container className={classes.getGridContStyles}>
            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.getGridItemStyles}>
                <BookingCard
                    image={PrebookImage}
                    heading="Wanna feel relaxed?"
                    caption="Pre-book your meal and enjoy your meal!"
                    actionName="Pre-Book your meal"
                    animationDuration={0.5}
                    onClick={handlePrebookOpen('paper')}
                />
                {
                    prebookOpen
                    ?
                    <PrebookDialog
                        open={prebookOpen}
                        scroll={prebookScroll}
                        handleClose={handlePrebookClose}
                    />
                    :
                    <></>
                }
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.getGridItemStyles}>
                <BookingCard
                    image={FriendImage}
                    heading="Friend indeed"
                    caption="Help your companions by booking their meal!"
                    actionName="Book for buddy"
                    animationDuration={0.6}
                    onClick={handleBookForBuddyOpen('paper')}
                />
                {
                    bookForBuddyOpen
                    ?
                    <BookForBuddyDialog
                        open={bookForBuddyOpen}
                        scroll={bookForBuddyScroll}
                        handleClose={handleBookForBuddyClose}
                    />
                    :
                    <></>
                }
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.getGridItemStyles}>
                <BookingCard
                    image={SoloImage}
                    heading="Automate the process"
                    caption="Reserve your lunch spot now without a fuss!"
                    actionName={isBooked ? "Meal Booked" : "Book your meal"}
                    animationDuration={0.7}
                    onClick={handleMemberCountBooking}
                    textColor={isBooked ? "#FFF" : ""}
                    backgroundColor={isBooked ? "#4caf50" : ""}
                    borderColor={isBooked ? "#4caf50" : ""}
                />
            </Grid>
        </Grid>
    );
}

export default BookMeal;