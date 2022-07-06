import React from "react";

import KeyValueTable from "../../../components/KeyValueTable";
import { AUTH, PARAMS } from "../../../constants/request";
import { BODY, HEADERS } from "../../../constants/shared";
import useKeyValueStore from "../../../store/useKeyValueStore";
import useRequestStore from "../../../store/useRequestStore";

function RequestMenuOption() {
  const currentOption = useRequestStore((state) => state.requestOption);
  const {
    requestKeyValueTableData,
    handleRequestCheckbox,
    handleRequestKey,
    handleRequestValue,
    handleRequestDescription,
    addNewTableRow,
    deleteTableRow,
  } = useKeyValueStore((state) => state);

  switch (currentOption) {
    case PARAMS:
    case HEADERS:
      return (
        <KeyValueTable
          type={currentOption}
          tableData={requestKeyValueTableData}
          handleCheckboxInput={handleRequestCheckbox}
          handleKeyInput={handleRequestKey}
          handleValueInput={handleRequestValue}
          handleDescriptionInput={handleRequestDescription}
          handleAddButton={addNewTableRow}
          handleDeleteButton={deleteTableRow}
        />
      );
    case AUTH:
      return <h1>Auth</h1>;
    case BODY:
      return <h1>Body</h1>;
    default:
      return <h1>Options </h1>;
  }
}

export default RequestMenuOption;
