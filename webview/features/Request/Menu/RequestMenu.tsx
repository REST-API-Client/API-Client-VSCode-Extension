import React, { Fragment, MouseEvent } from "react";
import shallow from "zustand/shallow";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import { COMMON, OPTION, REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";
import RequestMenuOption from "./RequestMenuOption";

const RequestMenu = () => {
  const { requestOption, keyValueTableData, changeRequestOption } = useStore(
    (state) => ({
      requestOption: state.requestOption,
      keyValueTableData: state.keyValueTableData,
      changeRequestOption: state.handleRequestOptionChange,
    }),
    shallow,
  );

  const headersCount = keyValueTableData.filter(
    (data) => data.optionType === COMMON.HEADERS && data.isChecked,
  ).length;

  const handleOptionChange = (event: MouseEvent<HTMLHeadElement>) => {
    const clickedTarget = event.target as HTMLHeadElement;

    changeRequestOption(clickedTarget.innerText);
  };

  return (
    <>
      <DetailOption requestMenu>
        {OPTION.REQUEST_MENU_OPTIONS.map((requestMenuOption, index) => (
          <Fragment key={REQUEST.REQUEST + index}>
            <MenuOption
              currentOption={requestOption}
              menuOption={requestMenuOption}
            >
              <h3 onClick={handleOptionChange}>{requestMenuOption}</h3>
            </MenuOption>
            {requestMenuOption === COMMON.HEADERS && <p>({headersCount})</p>}
          </Fragment>
        ))}
      </DetailOption>
      <RequestMenuOption />
    </>
  );
};

export default RequestMenu;
