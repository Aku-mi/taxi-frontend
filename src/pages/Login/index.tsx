import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { storage } from "../../services/storage";
import { Post } from "../../services";
import Form from "../../components/Form";
import { State } from "../../components/Form/interfaces";

import { initState, fields } from "./options";

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const submit = async (state: State) => {
    try {
      const res = await Post("auth/sign-in", state);
      if (res && res.data) {
        if (res.data.ok) {
          storage.saveUser({
            userName: res.data.user.user as string,
            id: res.data.user.id as string,
            role: res.data.user.role as string,
            accessToken: res.data.accessToken as string,
          });
          history.push("/home");
        } else {
          alert("Wrong!");
        }
      } else {
        alert("Wrong!");
      }
    } catch (err) {
      alert("Wrong!");
    }
  };

  return (
    <div>
      <Form
        txtBtn="Sign In"
        submit={submit}
        initState={initState}
        fields={fields}
      />
    </div>
  );
};
