import React from "react";
import shallow from "zustand/shallow";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import { REQUEST_MENU_OPTIONS } from "../../../constants/request";
import { HEADERS } from "../../../constants/shared";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestMenuOption from "./RequestMenuOption";

const RequestMenu = () => {
  const keyValueTableData = useKeyValueTableStore(
    (state) => state.keyValueTableData,
  );
  const { requestOption, changeRequestOption } = useRequestStore(
    (state) => ({
      requestOption: state.requestOption,
      changeRequestOption: state.handleRequestOptionChange,
    }),
    shallow,
  );

  const headersCount = keyValueTableData.filter(
    (data) => data.optionType === HEADERS && data.isChecked,
  ).length;

  const handleOptionChange = (event) => {
    changeRequestOption(event.target.innerText);
  };

  return (
    <>
      <DetailOption requestMenu>
        {REQUEST_MENU_OPTIONS.map((requestMenuOption, index) => (
          <React.Fragment key={index}>
            <MenuOption
              currentOption={requestOption}
              menuOption={requestMenuOption}
            >
              <h3 onClick={handleOptionChange}>{requestMenuOption}</h3>
            </MenuOption>
            {requestMenuOption === HEADERS && <p>({headersCount})</p>}
          </React.Fragment>
        ))}
      </DetailOption>
      <RequestMenuOption />
    </>
  );
};

export default RequestMenu;
