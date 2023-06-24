import { makeStyles } from "tss-react/mui";

export const getInviteMemberCardStyles = makeStyles()((theme)=>({
    getMemberCardStyles: {
        minWidth:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        border:"none",
        borderRadius:"5px",
        margin:"0.5rem 0rem",
        padding:"0.25rem 0rem",
        cursor:"pointer",
        transition:"0.20s ease-in-out",
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            transform: "scale(1.015)",
        },
    },

    getMemberAvatarContStyles: {
        // background:"green",
        width:"10%",
    },

    getMemberNameContStyles: {
        // background:"red",
        width:"25%",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
    },

    getMemberNameStyles: {
        fontSize: "0.9rem",
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
        // background:"orange",
        // maxWidth:"250px",
        marginLeft:"0.5rem"
    },

    getMemberEmailContStyles: {
        // background:"brown",
        width:"55%",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
    },

    getMemberEmailStyles: {
        fontSize: "0.9rem",
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
        // background:"pink",
        // maxWidth:"350px",
        marginLeft:"0.5rem"
    },

    getInviteButtonContStyles: {
        // background:"cyan",
        width:"15%",
    },
}));