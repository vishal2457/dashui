import Box from "../../Box/Box";
import Spacer from "../../Spacer/Spacer";
import Text from "../../Text/Text";
import React from "react";
import { styled } from "theme/stitches.config";
import { Code } from "./Code.styles";

const Table = styled("table", {
  width: "100%",
});

const Thead = styled("thead", {
  height: "2rem",
  backgroundColor: "$gray5",
  borderRadius: "$md",
});

let center = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const Th = styled("th", {});
const Td = styled("th", {});
const DataRow = styled('tr', {
  height: "3rem"
})

function PropsInfo({
  info,
}: {
  info: {
    attribute: string;
    type: string;
    description: string;
    default: string;
  }[];
}) {
  return (
    <Box css={{ p: "$10" }}>
      <Text space="xl">Possible Props.</Text>
      <Spacer b={5} />
      <Table>
        <Thead>
          <tr>
            <Th>Attribute</Th>
            <Th>type</Th>
            <Th>Description</Th>
            <Th>Default</Th>
          </tr>
        </Thead>
        <tbody>
          {info.map((item) => {
            return (
              <DataRow>
                <Td><Text>{item.attribute}</Text></Td>
                <Td> <Code> {item.type}</Code></Td>
                <Td> <Text>{item.description}</Text> </Td>
                <Td><Code>{item.default}</Code></Td>
              </DataRow>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
}

export default PropsInfo;
