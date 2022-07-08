import React from "react";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import useRequestStore from "../../../store/useRequestStore";

function RequestAuthBearerToken() {
  const { authData, handleRequestTokenData } = useRequestStore(
    (state) => state,
  );

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="token">Token</label>
        <input
          placeholder="token"
          name="token"
          className="authInputBox"
          value={authData.token}
          onChange={(event) => handleRequestTokenData(event.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default RequestAuthBearerToken;
