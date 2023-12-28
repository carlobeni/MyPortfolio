import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;


export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
`;

export const ServiceWrapper = styled("div")`
  margin: 10px;
  display: flex
  flex-wrap:wrap
  justify-content:center
  align-items:center
`;


export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;