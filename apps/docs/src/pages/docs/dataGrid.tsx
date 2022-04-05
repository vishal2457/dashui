import Datagrid from "@ui/DataGrid/DataGrid";
import Spacer from "@ui/Spacer/Spacer";
import Layout from "components/Layout/Layout";
import InitContent from "components/Shared/InitContent";
import React, { Fragment } from "react";

function DataGridComponent() {
  return (
    <Layout>
      <InitContent
        title="Datagrid"
        shortDesc="used to render huge lists of data."
        importS="import Datagrid from '@ui/DataGrid/DataGrid'"
        code={`
 <Datagrid />
        `}
      >
        <Fragment>
          <Datagrid />
        </Fragment>
      </InitContent>
      <Spacer y={10} />
    </Layout>
  );
}

export default DataGridComponent;
