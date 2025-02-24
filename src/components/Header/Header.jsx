import { Btn } from "../Buttons/Buttons.styled";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleMainText,
  HeaderWrapper,
} from "./Header.styled";

import {
  Section,
  Container,
  Title,
  ContentList,
  ContentListItem,
} from "../../main.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>
          <HeaderTitleMainText>Inna Kukla</HeaderTitleMainText>
          <br />a frontend developer.
        </HeaderTitle>
        <Btn href="Junior Resume.pdf" download>
          Download CV
        </Btn>
      </HeaderWrapper>

      <Section>
        <Container>
          <ContentList>
            <ContentListItem>
              <Title>Frontend</Title>
              <p>
                JavaScript, ReactJS, ViteReactJS, HTML, CSS, NPM, MaterialUI,
                StyledComponents, WebFlow, Axios, EmailJS, REST API, Hooks,
                Routers, Redux, Redux Toolkit
              </p>
            </ContentListItem>
            <ContentListItem>
              <Title>Backend</Title>
              <p>NodeJS, MongoDB</p>
            </ContentListItem>
          </ContentList>
        </Container>
      </Section>
    </HeaderContainer>
  );
};

export default Header;
