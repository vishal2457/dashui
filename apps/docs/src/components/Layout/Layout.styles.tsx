import { styled } from "theme/stitches.config";

export const MainContainer = styled('div', {})

//export wrapper
export const Wrapper = styled('div', {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    height: "65px"
});


export const ContentContainer = styled('div', {
    width: "100%",
    pb: "$10",
    minHeight:"calc(100vh - 64px)",
    transition: "all 0.3s",
    backgroundColor: "$whiteA1",
    overflowY: "auto",
    overflowX: "hidden"
})