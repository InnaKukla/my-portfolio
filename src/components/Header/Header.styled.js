import styled from "styled-components";
import HeaderBG from "../../img/header-bg.png";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--header-bg);

  background-image: url(${HeaderBG});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  color: var(--header-text);
  text-align: center;

  @media screen and (min-width: 768px) {
    min-height: unset;
  }

  @media screen and (min-width: 1280px) {
    width: 50%;
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 660px;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4;
  font-family: "Bogart", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const HeaderTitleMainText = styled.strong`
  font-size: 60px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 60px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
  }
`;

export const HeaderTitleHighlightText = styled.span`
  font-style: normal;
  color: var(--accent);
`;
export const HeaderTextWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.333;
  p {
    margin-top: 0.5em;
    font-size: 18px;
    line-height: 1.333;
  }
`;
