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
  flex-direction: row;

  width: 90%;

  .lines {
    width: 85%;
  }

  .empty {
    width: 20%;
  }
`;
