import React from "react";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import { REQUEST_MENU_OPTIONS } from "../../../constants/request";
import { HEADERS } from "../../../constants/shared";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestMenuOption from "./RequestMenuOption";

function RequestMenu() {
  const currentOption = useRequestStore((state) => state.requestOption);
  const changeRequestOption = useRequestStore(
    (state) => state.handleRequestOptionChange,
  );
  const { requestKeyValueTableData } = useKeyValueTableStore((state) => state);
  const headersCount = requestKeyValueTableData.filter(
    (data) => data.optionType === HEADERS && data.isChecked,
  );

  const handleOptionChange = (event) => {
    changeRequestOption(event.target.innerText);
  };

  return (
    <>
      <DetailOption requestMenu>
        {REQUEST_MENU_OPTIONS.map((requestMenuOption, index) => (
          <React.Fragment key={index}>
            <MenuOption
              currentOption={currentOption}
              menuOption={requestMenuOption}
            >
              <h3 onClick={handleOptionChange}>{requestMenuOption}</h3>
            </MenuOption>
            {requestMenuOption === HEADERS && <p>({headersCount.length})</p>}
          </React.Fragment>
        ))}
      </DetailOption>
      <RequestMenuOption />
    </>
  );
}

export default RequestMenu;
