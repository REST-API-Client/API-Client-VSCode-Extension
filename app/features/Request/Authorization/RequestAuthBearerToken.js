import React from "react";
import shallow from "zustand/shallow";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import useRequestStore from "../../../store/useRequestStore";

const RequestAuthBearerToken = () => {
  const { authDataToken, handleRequestTokenData } = useRequestStore(
    (state) => ({
      authDataToken: state.authData.token,
      handleRequestTokenData: state.handleRequestTokenData,
    }),
    shallow,
  );

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="token">Token</label>
        <input
          placeholder="token"
          name="token"
          className="authInputBox"
          value={authDataToken}
          onChange={(event) => handleRequestTokenData(event.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default RequestAuthBearerToken;
