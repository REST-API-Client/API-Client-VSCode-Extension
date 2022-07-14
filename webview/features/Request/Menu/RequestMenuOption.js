import React from "react";

import { COMMON, REQUEST } from "../../../constants";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthSelectMenu from "../Authorization/RequestAuthSelectMenu";
import RequestBodySelectMenu from "../Body/RequestBodySelectMenu";

const RequestMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const requestOption = useRequestStore((state) => state.requestOption);

  switch (requestOption) {
    case REQUEST.PARAMS:
    case COMMON.HEADERS:
      return <KeyValueTable type={requestOption} {...keyValueProps} />;
    case REQUEST.AUTH:
      return <RequestAuthSelectMenu />;
    default:
      return <RequestBodySelectMenu />;
  }
};

export default RequestMenuOption;
