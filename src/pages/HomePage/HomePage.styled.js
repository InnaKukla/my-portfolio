import styled from "styled-components";
import {
  ProjectLink,
  ProjectLinkImg,
  ProjectLinkTitle,
} from "../../components/Project/Project.styled";

export const HomePageWrapper = styled.div`
  background-color: var(--header-bg);
  padding-top: 100px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomePageContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
  }
`;

export const HomeHeroWrapper = styled.div`
  margin: auto;
  cursor: pointer;
  padding-bottom: 70px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    max-width: 50%;
  }
`;

export const HomeProjectLinkWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 15px;
  &:hover {
    gap: 10px;
    li {
      max-width: 175px;
    }
    img {
      width: 175px;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &:hover {
      gap: 20px;
      li {
        max-width: 180px;
      }
      img {
        width: 180px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HomeProjectLink = styled(ProjectLink)`
  list-style: none;
  max-width: 170px;
`;

export const HomeProjectLinkImg = styled(ProjectLinkImg)`
  width: 170px;
  height: 140px;
`;

export const HomeProjectLinkTitle = styled(ProjectLinkTitle)`
  font-size: 16px;
  padding: 4px 18px 7px;
`;
