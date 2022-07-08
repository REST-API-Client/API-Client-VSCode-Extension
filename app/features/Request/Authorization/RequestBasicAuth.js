import React, { useState } from "react";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import useRequestStore from "../../../store/useRequestStore";

function RequestBasicAuth() {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const { authData, handleRequestUsernameData, handleRequestPasswordData } =
    useRequestStore((state) => state);

  const handlePasswordDisplayOption = () => {
    setShouldShowPassword((state) => !state);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="authInputBox"
          value={authData.username}
          onChange={(event) => handleRequestUsernameData(event.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Password</label>
        <input
          type={shouldShowPassword ? "text" : "password"}
          placeholder="password"
          name="password"
          className="authInputBox"
          value={authData.password}
          onChange={(event) => handleRequestPasswordData(event.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <input type="checkbox" onChange={handlePasswordDisplayOption} />
        <label>Show Password</label>
      </InputWrapper>
    </Wrapper>
  );
}

export default RequestBasicAuth;
