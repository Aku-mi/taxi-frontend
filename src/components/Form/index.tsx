import React, { Component } from "react";
import {
  BtnContainer,
  Button,
  Container,
  Form as Form1,
  InputContainer,
} from "./Elements";
import { FormProps } from "./interfaces";

class Form extends Component<FormProps> {
  state = this.props.initState;

  constructor(props: FormProps) {
    super(props);
    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e: React.FormEvent) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState(this.props.initState);
  }

  Change(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Container>
        <Form1 onSubmit={this.Submit}>
          {this.props.fields.map((f) => (
            <InputContainer key={f.id}>
              <input
                type={f.type}
                name={f.name}
                autoComplete="off"
                onChange={this.Change}
                value={this.state[f.name]}
                id={f.id?.toString()}
                required
              />
              <label htmlFor={f.id?.toString()}>
                <span>{f.placeholder}</span>
              </label>
            </InputContainer>
          ))}
          <BtnContainer>
            <Button primary block type="submit">
              {this.props.txtBtn}
            </Button>
          </BtnContainer>
        </Form1>
      </Container>
    );
  }
}
export default Form;
