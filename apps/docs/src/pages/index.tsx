
import React from "react";
import styles from "../components/home/home.module.css";
import { useRouter } from "next/router";
import { Box, Text } from "@dash/core";
import { CenterContainer, MainContainer } from "../components/home/home.styles";

function Home() {
  const router = useRouter();
  return (
    <Box>
      <MainContainer className={styles.mainContainer}>
        <CenterContainer>
          <Text className="text" size="h1">
            dash-ui
          </Text>
          <Text color="white" size="h3">
            React components build with stitches css and radix-ui.
          </Text>
          <Box css={{mt: "$10"}}>
          <button className="button pointer" onClick={() => router.push("/docs")} >
            <span>get started</span>
            <div className="liquid"></div>
          </button>
          </Box>
          {" "}
        </CenterContainer>
      </MainContainer>
    </Box>
  );
}

export default Home;
