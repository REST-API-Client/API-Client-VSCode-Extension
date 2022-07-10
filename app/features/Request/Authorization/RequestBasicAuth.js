import React, { useState } from "react";
import shallow from "zustand/shallow";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import useRequestStore from "../../../store/useRequestStore";

const RequestBasicAuth = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const { authData, handleRequestUsernameData, handleRequestPasswordData } =
    useRequestStore(
      (state) => ({
        authData: state.authData,
        handleRequestUsernameData: state.handleRequestUsernameData,
        handleRequestPasswordData: state.handleRequestPasswordData,
      }),
      shallow,
    );

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
};

export default RequestBasicAuth;
