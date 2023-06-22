import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapHeaderTweets = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.space[4]}px;
`;

export const LinkBack = styled(NavLink)`
  display: flex;
  /* align-items: center; */
  padding: ${(p) => p.theme.space[3]}px;
  gap: ${(p) => p.theme.space[3]}px;

  color: ${(p) => p.theme.colors.darkColor};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-decoration: none;
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[4]}px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  gap: ${(p) => p.theme.space[5]}px;
`;
