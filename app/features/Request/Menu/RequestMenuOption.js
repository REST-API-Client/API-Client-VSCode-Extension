import React from "react";

import { AUTH, PARAMS } from "../../../constants/request";
import { BODY, HEADERS } from "../../../constants/shared";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthMenu from "../Authorization/RequestAuthSelectMenu";
import RequestBodyMenu from "../Body/RequestBodySelectMenu";

const RequestMenuOption = () => {
  const keyValueProps = useKeyValueTableStore();
  const requestOption = useRequestStore((state) => state.requestOption);

  switch (requestOption) {
    case PARAMS:
    case HEADERS:
      return <KeyValueTable type={requestOption} {...keyValueProps} />;
    case AUTH:
      return <RequestAuthMenu />;
    case BODY:
      return <RequestBodyMenu />;
    default:
      return <h1>Options </h1>;
  }
};

export default RequestMenuOption;
