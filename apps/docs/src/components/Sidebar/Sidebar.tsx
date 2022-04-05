import React, { useContext, useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import { MENU } from "./metaData";

import {
  ChildLi,
  MainSidebar,
  Parent,
  ParentContainer,
  ParentElement,
} from "./Sidebar.styles";
import Text from "@ui/Text/Text";
import { ArrowDownIcon } from "@radix-ui/react-icons";


export type SidebarProps = {
  user: any;
  arr: any[];
};

function Sidebar() {
  const router: NextRouter = useRouter();

  useEffect(() => {
    
  }, []);

  const onMenuClick = (link:string) => {
      router.push(link)
  };

  return (
    <MainSidebar>
      <ParentContainer>
        {MENU.map((item) => {
          return   <Parent key={item.name}>
          <ParentElement>
          <ArrowDownIcon style={{marginTop: 3}} />
            <Text weight="bold" size="h5" css={{pl: '$4'}}  >{item.name}</Text>
          </ParentElement>
          {item.children?.map((child) => {
         return <ChildLi key={child.name} onClick={() => onMenuClick(child.link)} active={child.link == router.asPath}>
           {child.name}</ChildLi>
          })}
        </Parent>
        })}
      </ParentContainer>
    </MainSidebar>
  );
}

export default React.memo(Sidebar);
