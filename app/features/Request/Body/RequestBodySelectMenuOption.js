import React from "react";
import shallow from "zustand/shallow";

import { FORM_DATA, FORM_URLENCODED, RAW } from "../../../constants/request";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodySelectMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const { bodyOption } = useRequestStore(
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
      return <h1>Raw</h1>;

    default:
      return <RequestNoBody />;
  }
};

export default RequestBodySelectMenuOption;
