import React from "react";

import { COMMON, REQUEST } from "../../../constants";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthSelectMenu from "../Authorization/RequestAuthSelectMenu";
import RequestBodySelectMenu from "../Body/RequestBodySelectMenu";
import RequestCodeSnippet from "../CodeSnippet/RequestCodeGenerator";

const RequestMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const requestOption = useRequestStore((state) => state.requestOption);

  switch (requestOption) {
    case REQUEST.PARAMS:
    case COMMON.HEADERS:
      return <KeyValueTable type={requestOption} {...keyValueProps} />;
    case REQUEST.AUTH:
      return <RequestAuthSelectMenu />;
    case COMMON.BODY:
      return <RequestBodySelectMenu />;
    default:
      return <RequestCodeSnippet />;
  }
};

export default RequestMenuOption;
