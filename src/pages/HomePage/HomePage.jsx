import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
import { projects } from "../../helpers/projectsList";
import {
  HomeProjectLink,
  HomePageContentWrapper,
  HomeHeroWrapper,
  HomeProjectLinkImg,
  HomePageWrapper,
  HomeProjectLinkTitle,
  HomeProjectLinkWrapper,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomePageContentWrapper>
        <Header />

        <HomeHeroWrapper>
          <NavLink to={`/projects`}>
            <HomeProjectLinkWrapper>
              {projects.map((project, index) => {
                return (
                  <HomeProjectLink key={index}>
                    <HomeProjectLinkImg
                      src={project.img}
                      alt="img"
                      width={250}
                      height={200}
                    />
                    <HomeProjectLinkTitle>{project.title}</HomeProjectLinkTitle>
                  </HomeProjectLink>
                );
              })}
            </HomeProjectLinkWrapper>
          </NavLink>
        </HomeHeroWrapper>
      </HomePageContentWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;
