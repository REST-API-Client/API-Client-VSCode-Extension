import React from "react";

import KeyValueTable from "../../../components/KeyValueTable";
import { FORM_DATA, FORM_URLENCODED, RAW } from "../../../constants/request";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestNoBody from "./RequestNoBody";

function RequestBodyMenuOption() {
  const { bodyOption } = useRequestStore((state) => state);
  const {
    requestKeyValueTableData,
    handleRequestCheckbox,
    handleRequestKey,
    handleRequestValue,
    handleRequestDescription,
    addNewTableRow,
    deleteTableRow,
  } = useKeyValueTableStore((state) => state);

  switch (bodyOption) {
    case FORM_DATA:
    case FORM_URLENCODED:
      return (
        <KeyValueTable
          type={bodyOption}
          title={bodyOption}
          tableData={requestKeyValueTableData}
          handleCheckboxInput={handleRequestCheckbox}
          handleKeyInput={handleRequestKey}
          handleValueInput={handleRequestValue}
          handleDescriptionInput={handleRequestDescription}
          handleAddButton={addNewTableRow}
          handleDeleteButton={deleteTableRow}
        />
      );
    case RAW:
      return <h1>Raw Data Input</h1>;
    default:
      return <RequestNoBody />;
  }
}

export default RequestBodyMenuOption;
