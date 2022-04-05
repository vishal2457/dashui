import Box from "@ui/Box/Box";
import { Button } from "@ui/Button/Button";
import Group from "@ui/Group/Group";
import Spacer from "@ui/Spacer/Spacer";
import Text from "@ui/Text/Text";
import Layout from "components/Layout/Layout";
import InitContent from "components/Shared/InitContent";
import PropsInfo from "components/Shared/PropsInfo";
import React, { Fragment } from "react";

let propsData = [
  {
    attribute: "children*",
    type: "ReactNode",
    description: "Any react component can be rendered inside a button",
    default: "-",
  },
  {
    attribute: "color",
    type: "default | error",
    description: "Change color of the button",
    default: "default",
  },
  {
    attribute: "bordered",
    type: "boolean",
    description: "get a bordered button, with transperant button",
    default: "false",
  },
  {
    attribute: "size",
    type: "xs | sm | md | lg | xl",
    description: "Get buttons in different sizes",
    default: "md",
  },
  {
    attribute: "loading",
    type: "boolean",
    description: "toggle if button is loading or not",
    default: "false",
  },
];

function ButtonComponent() {
  return (
    <Layout>
      <InitContent
        title="Button"
        shortDesc="used to perform action in an application by user."
        importS="import { Button } from '@ui/Button/Button'"
        code={`
 <Button>
 <Text>Default</Text>
 </Button>
        `}
      >
        <Fragment>
          <Button>
            <Text>Default</Text>
          </Button>
          <Button bordered>
            <Text>Bordered</Text>
          </Button>
          <Button disabled>
            <Text>Disabled</Text>
          </Button>
          <Button color="error">
            <Text space="xl">Error</Text>
          </Button>
          <Button loading>
            <Text space="xl">Loading</Text>
          </Button>
        </Fragment>
      </InitContent>
      <Spacer y={10} />
      <PropsInfo info={propsData} />
    </Layout>
  );
}

export default ButtonComponent;
