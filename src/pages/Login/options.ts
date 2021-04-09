import { State, Field, FormNames } from "../../components/Form/interfaces";

export const initState: State = {
  name: "",
  user: "",
  password: "",
};

export const fields: Field[] = [
  {
    name: FormNames.USER,
    placeholder: "User",
    type: "text",
    id: 0,
  },
  {
    name: FormNames.PASSWORD,
    placeholder: "Password",
    type: "password",
    id: 1,
  },
];
