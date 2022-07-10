import React from "react";

import { FORM_DATA, FORM_URLENCODED, RAW } from "../../../constants/request";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestNoBody from "./RequestNoBody";

const RequestBodyMenuOption = () => {
  const { bodyOption } = useRequestStore((state) => state);
  const keyValueProps = useKeyValueTableStore((state) => state);

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

export default RequestBodyMenuOption;
