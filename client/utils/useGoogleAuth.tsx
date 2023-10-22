import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { postRequest } from "./httpHandlers";
import { variables } from "./apiUrls";

const useGoogleAuth = () => {
  const [googleAccessToken, setGoogleAccessToken] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (googleAccessToken) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleAccessToken}`, {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          let data = {
            email: res.data.email,
            name: res.data.name,
          };
          handleSocialLogin(data);
        })
        .catch((err) => console.log(err));
    }
  }, [googleAccessToken]);

  const authenticate: any = useGoogleLogin({
    onSuccess: (tokenResponse) => setGoogleAccessToken(tokenResponse.access_token),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleSocialLogin = async (credintials: {}) => {
    const res = await postRequest(variables.socialLogin, credintials);
    if (res.success) {
      setAccessToken(res.token);
    } else {
      // handle success and errors
    }
  };

  return [authenticate, accessToken];
};

export default useGoogleAuth;
