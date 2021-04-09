import styled from "styled-components";

interface Btn {
  block?: boolean;
  primary?: boolean;
}

export const Container = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 62vh;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BtnContainer = styled.div`
  margin: 20px 0;
  width: 25%;
  height: 30px;
`;

export const InputContainer = styled.div`
  margin: 20px 0;
  width: 25%;
  position: relative;
  height: 60px;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    color: #2e2e2e;
    padding-top: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    &:focus + label span,
    &:valid + label span {
      transform: translateY(-150%);
      font-size: 14px;
      color: #646464;
    }
  }
  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid black;

    &::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -2px;
      height: 100%;
      width: 100%;
      border-bottom: 3px solid #646464;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }
  }
  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
  }

  & input:focus + label::after,
  & input:valid + label::after {
    transform: translateX(0%);
  }
`;

export const Button = styled.button<Btn>`
  width: ${(p) => (p.block ? "100%" : "")};
  background: ${(p) => (p.primary ? "#646464" : "red")};
  color: white;
  font-size: 18px;
  &:hover {
    background: #2c2c2c;
  }
  border: none;
  height: 100%;
  margin-top: 20px;
`;
