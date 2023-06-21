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
  border-radius: 20px;

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
export const Line = styled(LineImg)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
