import { makeStyles } from "tss-react/mui";

export const getCircularProgressStyles = makeStyles()((theme)=>({
    getLoaderContStyles: {
        background:"#000",
        width:"100%",
        height:"100vh",
        position:"absolute",
        top:"0",
        left:"0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        opacity:"0.7",
        zIndex:"1000",
    },

    getLoaderStyles: {
        color:"#ef5d36",
    },
}));