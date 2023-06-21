import { styled } from "styled-components";

export const Container = styled.div`
  outline: 1px solid red;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-left: ${(p) => p.theme.space[3]}px;
  padding-right: ${(p) => p.theme.space[3]}px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.mobile}) {
    max-width: ${(p) => p.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    max-width: ${(p) => p.theme.breakpoints.table};
    padding-left: ${(p) => p.theme.space[4]}px;
    padding-right: ${(p) => p.theme.space[4]}px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: ${(p) => p.theme.breakpoints.desktop};
  }
`;
