import React, { SyntheticEvent } from "react";
import { SINGLE_MENU } from "./metaData";
import styles from "./Sidebar.module.scss"
import clsx from "clsx";

type propType = {
  item: SINGLE_MENU;
  handleClick: (e: SyntheticEvent) => void;
  active: boolean;
};

function SingleMenu({ item, handleClick, active }: propType) {
  return (
    <li onClick={handleClick}>
      <a className={clsx({ [styles.active]: active })}>
        <div className={`${styles.menuIcon}`}>{item.icon}</div>
        <div>{item.name}</div>
      </a>
    </li>
  );
}

export default SingleMenu;
