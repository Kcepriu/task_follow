import { styled } from "styled-components";

import { ReactComponent as EllipseImg } from "../../images/ellipse.svg";
import { ReactComponent as LineImg } from "../../images/line.svg";
import background from "../../images/background.png";
import background_go_it from "../../images/background_go_it.png";

export const WrapCard = styled.div`
  position: relative;

  display: block;
  width: 100%;
  height: 100%;
  padding: ${(p) => p.theme.space[4]}px;
  padding-top: 284px;
  border-radius: 20px;

  text-align: center;

  background-image: url(${background_go_it}), url(${background}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-position: 20px 20px, 36px 28px, top left;

  background-repeat: no-repeat, no-repeat;
  box-shadow: ${(p) => p.theme.shadows.cardShadow};

  background-color: green;
`;

export const Ellipse = styled(EllipseImg)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Avatar = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 64px;
  border-radius: 50%;
`;

export const Line = styled(LineImg)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.space[4]}px;
  margin-bottom: 26px;
`;

export const Title = styled.p`
  display: flex;
  gap: 10px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: ${(p) => p.theme.lineHeights.body};
  text-transform: uppercase;

  color: ${(p) => p.theme.colors.primary};
`;

export const Button = styled.button`
  color: red;
  padding: 14px;
  width: 196px;

  border-radius: ${(p) => p.theme.radii.small};
  cursor: pointer;

  color: ${(p) => p.theme.colors.darkColor};
  background-color: ${(p) => p.theme.colors.primary};

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  box-shadow: ${(p) => p.theme.shadows.buttonShadow};
  text-transform: uppercase;

  &:hover {
    transform: scale(1.03);
  }
  &.follow {
    background-color: ${(p) => p.theme.colors.backgroundActiveButton};
  }
`;
