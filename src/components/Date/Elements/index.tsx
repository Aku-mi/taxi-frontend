import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  padding: 10px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    margin: 5px 0;
  }
  #d11 {
    margin-right: 6px;
  }
  #d22 {
    margin-right: 24px;
  }
`;

export const Btn = styled.button`
  margin: 2px;
  padding: 2px 20px;
  border: none;
  background: #d6d6d6;
`;
