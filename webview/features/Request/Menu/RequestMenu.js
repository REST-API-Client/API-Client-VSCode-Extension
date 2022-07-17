import React from "react";
import shallow from "zustand/shallow";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import { COMMON, OPTION, REQUEST } from "../../../constants/";
import useKeyValueTableStore from "../../../store/keyValueTableStore";
import useRequestStore from "../../../store/requestStore";
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
    (data) => data.optionType === COMMON.HEADERS && data.isChecked,
  ).length;

  const handleOptionChange = (event) => {
    changeRequestOption(event.target.innerText);
  };

  return (
    <>
      <DetailOption requestMenu>
        {OPTION.REQUEST_MENU_OPTIONS.map((requestMenuOption, index) => (
          <React.Fragment key={REQUEST.REQUEST + index}>
            <MenuOption
              currentOption={requestOption}
              menuOption={requestMenuOption}
            >
              <h3 onClick={handleOptionChange}>{requestMenuOption}</h3>
            </MenuOption>
            {requestMenuOption === COMMON.HEADERS && <p>({headersCount})</p>}
          </React.Fragment>
        ))}
      </DetailOption>
      <RequestMenuOption />
    </>
  );
};

export default RequestMenu;
