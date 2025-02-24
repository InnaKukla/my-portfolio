import { NavLink } from "react-router";
import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px 30px;
  background-color: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  color: var(--nav-text);
  letter-spacing: normal;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavLinkLogo = styled(NavLink)`
  margin-right: auto;
  color: var(--nav-text);
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

export const NavLinkLogoText = styled.strong`
  font-weight: 700;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

export const NavListWrapper = styled.div`
  display: flex;
`;
