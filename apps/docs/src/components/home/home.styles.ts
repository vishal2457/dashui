import {keyframes, styled} from "../../theme/stitches.config"
import Box from "@ui/Box/Box"
import { Button } from "@ui/Button/Button";
import Text from "@ui/Text/Text";
export const MainContainer = styled(Box, {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh"
});


export const CenterContainer = styled(Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    flexDirection: "column"
});


export const GradientText = styled(Text, {
    background: "$gradient",
    backgroundClip: "text"
})

export const LiquidButton = styled(Button, {
position: "relative",
borderRadius: "$md",
border: "none",

    
});


export const LiquidSpan = styled('span', {
    position: "relative",
    color: "#fff",
    letterSpacing: "$normal",
    zIndex: "$1"
});

const waves = keyframes({
    '0%': {
        transform: 'translate(-50%, -75%) rotate(0deg)'
       },
      
       '100%': {
        transform: 'translate(-50%, -75%) rotate(360deg)'
       }
})

export const LiquidDiv = styled('div',  {
    // position: "absolute",
    top: "-80px",
    left: 0,
    width: "100%",
    height: "200px",
    background: "$bgSolid1",
    boxShadow: "inset 0 0 50px rgba(0, 0, 0, .5)",
    transition: "0.5s",
    "::after": {
        content: '',
        width: "200%",
        height: "200%",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -75%)",
        borderRadius: "40%",
        background: "rgba(20, 20, 20, .5)",
        animation: `${waves} 10s linear infinite`
       },
       "::before": {
        content: '',
        width: "200%",
        height: "200%",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -75%)",
        borderRadius: "45%",
        background: "rgba(20, 20, 20, .5)",
        animation: `${waves} 5s linear infinite`
       }

})


export const GetStarted = styled(Button, {
    
})