
import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { ContentContainer, MainContainer, Wrapper } from "./Layout.styles";

function Layout({ children }: { children: React.ReactNode }) {
 

  return (
    <MainContainer>
      <Header />
      <Wrapper>
       <Sidebar />
        <ContentContainer>{children}</ContentContainer>
      </Wrapper>
    </MainContainer>
  );
}

export default Layout;
