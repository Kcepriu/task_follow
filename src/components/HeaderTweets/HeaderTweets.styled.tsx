import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const WrapHeaderTweets = styled.div`
  margin-bottom: ${(p) => p.theme.space[4]}px;
`;

export const LinkBack = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;

  color: ${(p) => p.theme.colors.darkColor};
  font-size: ${(p) => p.theme.fontWeights.bold};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-decoration: none;
`;
