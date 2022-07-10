import React from "react";
import shallow from "zustand/shallow";

import { FORM_DATA, FORM_URLENCODED, RAW } from "../../../constants/request";
import CodeEditor from "../../../shared/CodeEditor";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodyMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const { bodyOption, bodyRawData } = useRequestStore(
    (state) => ({
      bodyOption: state.bodyOption,
      bodyRawData: state.bodyRawData,
    }),
    shallow,
  );

  switch (bodyOption) {
    case FORM_DATA:
    case FORM_URLENCODED:
      return (
        <KeyValueTable
          type={bodyOption}
          title={bodyOption}
          {...keyValueProps}
        />
      );
    case RAW:
      return <CodeEditor requestFormValue={bodyRawData} requestForm />;

    default:
      return <RequestNoBody />;
  }
};

export default RequestBodyMenuOption;
