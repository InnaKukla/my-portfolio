import styled from "styled-components";

export const ProjectLink = styled.li`
  max-width: 600px;
  background-color: var(--project-card-bg);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    /* max-width: 350px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ProjectLinkImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  /* width={350} height={278} */
`;

export const ProjectLinkTitle = styled.h3`
  padding: 15px 20px 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: var(--project-card-text);

  @media screen and (max-width: 620px) {
    font-size: 22px;
  }
`;
