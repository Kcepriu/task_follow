import { styled } from "styled-components";
import background from "../../images/communication.webp";
import { NavLink } from "react-router-dom";

export const WrapPage = styled.div`
  background-image: linear-gradient(
      rgba(34, 35, 53, 0.8),
      rgba(34, 35, 53, 0.8)
    ),
    url(${background});
  background-repeat: no-repeat, no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: calc(100vh - 70px);

  color: ${(p) => p.theme.colors.primary};
  padding: ${(p) => p.theme.space[5]}px;
`;

export const Title = styled.h1`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: 64px;
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const Content = styled.p`
  margin-top: ${(p) => p.theme.space[3]}px;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.5;
`;

export const Link = styled(NavLink)`
  color: #42a3ca;
`;
