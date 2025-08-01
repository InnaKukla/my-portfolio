import { useParams } from "react-router";
import BtnGitHub from "../../components/Buttons/BtnGitHub";
import { projects } from "../../helpers/projectsList";

import { Container, MainTitle, Section } from "../../main.styled";
import {
  ProjectDetailsCover,
  ProjectDetailsSkills,
  ProjectDetailsWrapper,
} from "./ProjectPage.styled";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <Section>
        <Container>
          <ProjectDetailsWrapper>
            <MainTitle>{project.title}</MainTitle>

            <ProjectDetailsCover
              src={project.imgBig}
              alt={project.title}
              width={695}
              height={522}
            />

            <ProjectDetailsSkills>
              <p>Skills: {project.skills}</p>
            </ProjectDetailsSkills>

            {project.GitHubLink && (
              <BtnGitHub link={project.GitHubLink} type="GitHubLink"/>
            )}
            {project.WebflowLink && (
              <BtnGitHub link={project.WebflowLink}  type="WebflowLink"/>
            )}
             {project.NetlifyLink && (
              <BtnGitHub link={project.NetlifyLink}  type="NetlifyLink"/>
            )}
          </ProjectDetailsWrapper>
        </Container>
      </Section>
    </>
  );
};

export default ProjectPage;
