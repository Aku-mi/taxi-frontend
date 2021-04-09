export interface Field {
  name: FormNames;
  placeholder?: string;
  type: string;
  id?: number;
}

export interface FormProps {
  submit: (param: State) => void;
  fields: Field[];
  txtBtn: string;
  initState: State;
}

export interface State {
  name?: string;
  user?: string;
  password?: string;
}

export enum FormNames {
  NAME = "name",
  USER = "user",
  PASSWORD = "password",
}
