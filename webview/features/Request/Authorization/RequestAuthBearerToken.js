import React from "react";
import shallow from "zustand/shallow";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import { REQUEST } from "../../../constants";
import useStore from "../../../store/useStore";

const RequestAuthBearerToken = () => {
  const { authDataToken, handleRequestAuthData } = useStore(
    (state) => ({
      authDataToken: state.authData.token,
      handleRequestAuthData: state.handleRequestAuthData,
    }),
    shallow,
  );

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="token">Token:</label>
        <input
          name="token"
          placeholder="token"
          className="authInputBox"
          value={authDataToken}
          onChange={(event) =>
            handleRequestAuthData(REQUEST.TOKEN, event.target.value)
          }
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default RequestAuthBearerToken;
