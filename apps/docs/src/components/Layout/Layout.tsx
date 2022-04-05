import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
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
