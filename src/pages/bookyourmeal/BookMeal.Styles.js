import { makeStyles } from "tss-react/mui";

export const getMealBookingStyles = makeStyles()((theme)=>({
    getGridContStyles: {
        background:"green",
        width:"100%",
    },

    getGridItemStyles: {
        background:"orange",
        display:"flex",
        justifyContent:"center",
    },

    getCardOneStyles: {
        background:"cyan",
        width:"75%",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        alignItems:"center",
        border:"none",
        borderRadius:"10px",
    },

    getMemberPictureStyles: {
        width:"25%",
        borderRadius:"50px",
    },

    getMemberNameStyles: {
        fontSize:"1.5rem",
        fontFamily: theme.typography.fontFamily,
    },

    getCaptionOneStyles: {
        fontSize:"0.9rem",
        textAlign:"center",
    },

    getCardTwoStyles:{

    },

    getCardThreeStyles: {

    },
}));