import React from "react";
import ActionButtons from "./components/ActionButtons";
import { DataParent, DataRow } from "./DataGrid.styles";
import SingleCell from "./components/SingleCell";
import {
  actionButtonType,
  actionTitleTypes,
  DENSITY_TYPE,
  headerObject,
  IS_ACTION,
} from "./type";
import Group from "../Group/Group";
import Text from "../Text/Text";

type propTypes = {
  headers: headerObject[];
  data: any[];
  actionButtons: actionButtonType[];
  onActionClick: (title: actionTitleTypes) => void;
  density: DENSITY_TYPE;
  loading: boolean;
};

function Data({
  data,
  headers,
  actionButtons,
  onActionClick,
  density,
  loading,
}: propTypes) {
  if (loading) {
    return (
      <Group position="center">
        <Text>Loading</Text>
      </Group>
    );
  }

  //handle no data
  if (!data || !data.length) {
    return (
      <Group position="center">
        <Text>No data</Text>
      </Group>
    );
  }

  return (
    <DataParent>
      {data.map((d, data_index) => {
        return (
          <DataRow density={density}>
            {headers.map((h) => {
              if (h.field == IS_ACTION) {
                return (
                  <ActionButtons
                    position={h.align}
                    actionButtons={actionButtons}
                    onActionClick={onActionClick}
                    data_index={data_index}
                  />
                );
              }
              return (
                <SingleCell
                  cell={d[h.field]}
                  position={h.align}
                  formatter={h.formatter}
                  header={h}
                />
              );
            })}
          </DataRow>
        );
      })}
    </DataParent>
  );
}

export default Data;
