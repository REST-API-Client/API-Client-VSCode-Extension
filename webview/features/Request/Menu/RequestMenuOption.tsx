import React from "react";
import shallow from "zustand/shallow";

import LoadButtonsBlock from "../../../components/LoadButtonsBlock";
import { COMMON, REQUEST } from "../../../constants";
import KeyValueTable from "../../../shared/KeyValueTable";
import useStore from "../../../store/useStore";
import RequestAuthSelectMenu from "../Authorization/RequestAuthSelectMenu";
import RequestBodySelectMenu from "../Body/RequestBodySelectMenu";
import RequestCodeSnippet from "../CodeSnippet/RequestCodeSnippet";

const RequestMenuOption = () => {
  const { requestOption, keyValueProps } = useStore(
    (state) => ({
      requestOption: state.requestOption,
      keyValueProps: {
        addNewTableRow: state.addNewTableRow,
        deleteTableRow: state.deleteTableRow,
        handleRequestKey: state.handleRequestKey,
        keyValueTableData: state.keyValueTableData,
        handleRequestValue: state.handleRequestValue,
        addRequestBodyHeaders: state.addRequestBodyHeaders,
        handleRequestCheckbox: state.handleRequestCheckbox,
        handleRequestDescription: state.handleRequestDescription,
        removeRequestBodyHeaders: state.removeRequestBodyHeaders,
      },
    }),
    shallow,
  );

  switch (requestOption) {
    case REQUEST.PARAMS:
    case COMMON.HEADERS:
      return (
        <>
          <LoadButtonsBlock optionsType={requestOption} />
          <KeyValueTable
            type={requestOption}
            {...keyValueProps}
            readOnly={false}
            title=""
          />
        </>
      );
    case REQUEST.AUTH:
      return <RequestAuthSelectMenu />;
    case COMMON.BODY:
      return <RequestBodySelectMenu />;
    default:
      return <RequestCodeSnippet />;
  }
};

export default RequestMenuOption;
