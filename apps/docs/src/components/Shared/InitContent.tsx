
import React from "react";
import { Showcase } from "./Showcase.styles";
import { Text, Box, Spacer } from "@dash/core";
import DisplayCode from "../DisplayCode";

type props = {
  title: string;
  shortDesc: string;
  importS: string;
  children: React.ReactNode;
  code: string;
};

function InitContent({ title, shortDesc, importS, children, code }: props) {
  return (
    <Box css={{ p: "$10" }}>
      <Text size="h1" weight="bold">
        {title}
      </Text>

      <Text size="h6" mute>
        {shortDesc}
      </Text>
      <Text size="h5" css={{ mt: "$5" }}>
        {importS}
      </Text>
      <Showcase position="center">{children}</Showcase>
      <Spacer b={5} />
      <DisplayCode code={code} />
    </Box>
  );
}

export default InitContent;
