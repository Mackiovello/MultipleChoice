import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 3px 3px #ccc;
`;

export const Headline = styled.h1`
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

export const Question = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;
