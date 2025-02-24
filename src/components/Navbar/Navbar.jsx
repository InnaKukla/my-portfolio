import { NavLink, useLocation } from "react-router";
import {
  Nav,
  NavWrapper,
  NavLinkLogo,
  NavLinkLogoText,
  NavList,
  NavListWrapper,
} from "./Navbar.styled";

import BtnDarkMode from "../Buttons/BtnDarkMode";
import { Container } from "../../main.styled";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <Container>
        <NavWrapper>
          <NavLinkLogo to="/">
            <NavLinkLogoText>Freelancer</NavLinkLogoText> portfolio
          </NavLinkLogo>

          <NavListWrapper>
            <BtnDarkMode />

            <NavList>
              <li>
                <NavLink
                  to="/"
                  style={{
                    color: pathname === "/" ? "#d54b4b" : "var(--white)",
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  style={{
                    color:
                      pathname === "/projects" ? "#d54b4b" : "var(--white)",
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink> */}
              </li>
            </NavList>
          </NavListWrapper>
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
