import React from "react";
import Group from "../../Group/Group";
import { ActionButtonWrapper, SingleAction } from "../DataGrid.styles";
import { actionButtonType, actionTitleTypes, POSITION_TYPE } from "../type";
type propTypes = {
  actionButtons: actionButtonType[];
  onActionClick: (title: actionTitleTypes, data_index:number) => void;
  position?: POSITION_TYPE;
  data_index: number
};
function ActionButtons({
  actionButtons,
  onActionClick,
  position = "center",
  data_index
}: propTypes) {
  return (
    <ActionButtonWrapper>
      <Group position={position}>
        {actionButtons.map((items) => {
          return (

            <SingleAction
              key={items.title}
              onClick={() => onActionClick(items.title, data_index)}
            >
              {items.icon}
            </SingleAction>
          );
        })}
      </Group>
    </ActionButtonWrapper>
  );
}

export default React.memo(ActionButtons);
