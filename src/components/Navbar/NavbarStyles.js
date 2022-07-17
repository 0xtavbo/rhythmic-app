import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  border-bottom: 1px #3d3d3d solid;
  position: relative;
  transform-style: preserve-3d;
  margin-bottom: 50px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      103.53deg,
      #f4f4f4 -9.33%,
      #bba4bd -9.32%,
      #5b545c 104.42%
    );
    filter: blur(17px);
    border-radius: 3px;
    transform: translateZ(-1px);
  }
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }
`;

export const LinkContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  align-items: center;
  margin-right: 25px;
`;

export const LogoContainerStyled = styled.div`
  img {
    height: 75px;
  }
`;

export const TitleStyled = styled(motion.h4)`
  margin-left: 8px;
  font-weight: 300;
  background: linear-gradient(94.71deg, #a6a5a2 -7.45%, #ffffe1 94.7%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
