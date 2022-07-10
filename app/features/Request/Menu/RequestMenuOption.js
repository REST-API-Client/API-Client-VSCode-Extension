import React from "react";

import { AUTH, PARAMS } from "../../../constants/request";
import { BODY, HEADERS } from "../../../constants/shared";
import KeyValueTable from "../../../shared/KeyValueTable";
import useKeyValueTableStore from "../../../store/useKeyValueTableStore";
import useRequestStore from "../../../store/useRequestStore";
import RequestAuthMenu from "../Authorization/RequestAuthMenu";
import RequestBodyMenu from "../Body/RequestBodyMenu";

const RequestMenuOption = () => {
  const currentOption = useRequestStore((state) => state.requestOption);
  const keyValueProps = useKeyValueTableStore((state) => state);

  switch (currentOption) {
    case PARAMS:
    case HEADERS:
      return <KeyValueTable type={currentOption} {...keyValueProps} />;
    case AUTH:
      return <RequestAuthMenu />;
    case BODY:
      return <RequestBodyMenu />;
    default:
      return <h1>Options </h1>;
  }
};

export default RequestMenuOption;
