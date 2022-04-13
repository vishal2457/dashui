
import React, { Fragment } from "react";
import { Button } from "@dash/core";
import Layout from "../../components/Layout/Layout";
import InitContent from "../../components/Shared/InitContent";
import PropsInfo from "../../components/Shared/PropsInfo";

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
        importS="import { Button } from '../../Button/Button'"
        code={`
 <Button>
 <Text>Default</Text>
 </Button>
        `}
      >
        <Fragment>
         <Button>check</Button>
        </Fragment>
      </InitContent>
      <PropsInfo info={propsData} />
    </Layout>
  );
}

export default ButtonComponent;
