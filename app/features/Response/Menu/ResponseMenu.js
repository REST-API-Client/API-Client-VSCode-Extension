import React from "react";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import SelectWrapper from "../../../components/SelectWrapper";
import { RESPONSE_MENU_OPTIONS } from "../../../constants/response";
import { HEADERS } from "../../../constants/shared";
import useResponseDataStore from "../../../store/useResponseDataStore";
import useResponseOptionStore from "../../../store/useResponseOptionStore";
import ResponseMenuOption from "./ResponseMenuOption";

const ResponseMenu = () => {
  const { responseData } = useResponseDataStore((state) => state);
  const { responseOption, handleResponseOptionChange } = useResponseOptionStore(
    (state) => state,
  );

  const handleOptionChange = (event) => {
    handleResponseOptionChange(event.target.innerText);
  };

  return (
    <>
      <DetailOption>
        <SelectWrapper>
          {RESPONSE_MENU_OPTIONS.map((responseMenuOption, index) => (
            <React.Fragment key={index}>
              <MenuOption
                currentOption={responseOption}
                menuOption={responseMenuOption}
              >
                <h3 onClick={handleOptionChange}>{responseMenuOption}</h3>
              </MenuOption>
              {responseMenuOption === HEADERS && (
                <p>({responseData.headersLength})</p>
              )}
            </React.Fragment>
          ))}
        </SelectWrapper>
      </DetailOption>
      <ResponseMenuOption />
    </>
  );
};

export default ResponseMenu;
