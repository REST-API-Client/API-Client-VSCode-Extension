import React from "react";
import shallow from "zustand/shallow";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import SelectWrapper from "../../../components/SelectWrapper";
import { RESPONSE, RESPONSE_MENU_OPTIONS } from "../../../constants/response";
import { HEADERS } from "../../../constants/shared";
import useResponseDataStore from "../../../store/useResponseDataStore";
import useResponseOptionStore from "../../../store/useResponseOptionStore";
import ResponseMetaData from "../MetaData/ResponseMetaData";
import ResponseMenuOption from "./ResponseMenuOption";

const ResponseMenu = () => {
  const responseData = useResponseDataStore((state) => state.responseData);
  const { responseOption, handleResponseOptionChange } = useResponseOptionStore(
    (state) => ({
      responseOption: state.responseOption,
      handleResponseOptionChange: state.handleResponseOptionChange,
    }),
    shallow,
  );

  return (
    <>
      <DetailOption>
        <SelectWrapper>
          {RESPONSE_MENU_OPTIONS.map((responseMenuOption, index) => (
            <React.Fragment key={RESPONSE + index}>
              <MenuOption
                currentOption={responseOption}
                menuOption={responseMenuOption}
              >
                <h3
                  onClick={(event) =>
                    handleResponseOptionChange(event.target.innerText)
                  }
                >
                  {responseMenuOption}
                </h3>
              </MenuOption>
              {responseMenuOption === HEADERS && (
                <p>({responseData.headersLength})</p>
              )}
            </React.Fragment>
          ))}
        </SelectWrapper>
        <ResponseMetaData {...responseData} />
      </DetailOption>
      <ResponseMenuOption />
    </>
  );
};

export default ResponseMenu;
