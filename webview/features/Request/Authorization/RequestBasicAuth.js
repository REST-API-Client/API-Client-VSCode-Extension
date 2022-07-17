import React from "react";
import shallow from "zustand/shallow";

import InputWrapper from "../../../components/InputWrapper";
import Wrapper from "../../../components/Wrapper";
import { REQUEST } from "../../../constants";
import useRequestStore from "../../../store/requestStore";

const RequestBasicAuth = () => {
  const {
    authData,
    handleRequestAuthData,
    shouldShowPassword,
    handleShouldShowPassword,
  } = useRequestStore(
    (state) => ({
      authData: state.authData,
      handleRequestAuthData: state.handleRequestAuthData,
      shouldShowPassword: state.shouldShowPassword,
      handleShouldShowPassword: state.handleShouldShowPassword,
    }),
    shallow,
  );

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="authInputBox"
          value={authData.username}
          onChange={(event) =>
            handleRequestAuthData(REQUEST.USERNAME, event.target.value)
          }
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Password:</label>
        <input
          type={shouldShowPassword ? "text" : "password"}
          name="password"
          placeholder="password"
          className="authInputBox"
          value={authData.password}
          onChange={(event) =>
            handleRequestAuthData(REQUEST.PASSWORD, event.target.value)
          }
        />
      </InputWrapper>
      <InputWrapper>
        <input
          type="checkbox"
          checked={shouldShowPassword}
          onChange={handleShouldShowPassword}
        />
        <label>Show Password</label>
      </InputWrapper>
    </Wrapper>
  );
};

export default RequestBasicAuth;
