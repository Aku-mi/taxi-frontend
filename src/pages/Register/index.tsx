import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Form from "../../components/Form";
import { State } from "../../components/Form/interfaces";
import { initState, fields } from "./options";
import { Post } from "../../services";

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const submit = async (state: State) => {
    try {
      const res = await Post("auth/sign-up", state);
      if (res && res.data) {
        if (res.data.ok) {
          history.push("/login");
        } else {
          alert("Something went wrong!");
        }
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Form
        txtBtn="Sign Up"
        submit={submit}
        initState={initState}
        fields={fields}
      />
    </div>
  );
};
