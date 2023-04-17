import React from "react";

import { REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";
import RequestBearerToken from "./RequestAuthBearerToken";
import RequestBasicAuth from "./RequestBasicAuth";
import RequestNoAuth from "./RequestNoAuth";

const RequestAuthSelectMenuOption = () => {
  const authOption = useStore((state) => state.authOption);

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
