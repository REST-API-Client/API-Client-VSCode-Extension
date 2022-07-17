import React from "react";

import { REQUEST } from "../../../constants";
import useRequestStore from "../../../store/requestStore";
import RequestBearerToken from "./RequestAuthBearerToken";
import RequestBasicAuth from "./RequestBasicAuth";
import RequestNoAuth from "./RequestNoAuth";

const RequestAuthSelectMenuOption = () => {
  const authOption = useRequestStore((state) => state.authOption);

  switch (authOption) {
    case REQUEST.BASIC_AUTH:
      return <RequestBasicAuth />;
    case REQUEST.BEARER_TOKEN:
      return <RequestBearerToken />;
    default:
      return <RequestNoAuth />;
  }
};

export default RequestAuthSelectMenuOption;
