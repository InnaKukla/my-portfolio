import styled from "styled-components";

export const FooterSection = styled.footer`
  padding: 60px 0 50px;
  background-color: var(--footer-bg);
  color: var(--footer-text);

  @media screen and (min-width: 768px) {
    padding: 40px 0 30px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 27px;

  @media screen and (max-width: 620px) {
    row-gap: 20px;
  }
`;
export const FooterSocialList = styled.ul`
  display: flex;
  column-gap: 30px;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FooterSocialItem = styled.li`
  @media screen and (min-width: 768px) {
    width: 28px;
    a img {
      width: 35px;
    }
  }

  @media screen and (min-width: 1280px) {
    a img {
      width: 40px;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 16px;
  p {
    margin-top: 0.5em;
  }
`;
