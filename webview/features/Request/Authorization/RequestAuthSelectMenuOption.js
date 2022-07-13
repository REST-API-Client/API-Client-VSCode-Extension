import React from "react";

import { BASIC_AUTH, BEARER_TOKEN } from "../../../constants/request";
import useRequestStore from "../../../store/useRequestStore";
import RequestBearerToken from "./RequestAuthBearerToken";
import RequestBasicAuth from "./RequestBasicAuth";
import RequestNoAuth from "./RequestNoAuth";

const RequestAuthSelectMenuOption = () => {
  const authOption = useRequestStore((state) => state.authOption);

  switch (authOption) {
    case BASIC_AUTH:
      return <RequestBasicAuth />;
    case BEARER_TOKEN:
      return <RequestBearerToken />;
    default:
      return <RequestNoAuth />;
  }
};

export default RequestAuthSelectMenuOption;
