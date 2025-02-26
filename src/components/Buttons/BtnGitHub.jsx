import gitHubIcon from "../../img/icons/gitHub-black.svg";
import webflowIcon from "../../img/icons/icons8-webflow.svg";
import PropTypes from "prop-types";
import { BtnOutline } from "./Buttons.styled";

const BtnGitHub = ({ link, type }) => {
  const gitHubLink = type === "gitHubLink";

  return (

    <>
    {gitHubLink ?  (<BtnOutline href={link} target="_blank" rel="noreferrer">
          <img src={gitHubIcon} alt="gitHubIcon" />
           GitHub repo
         </BtnOutline>) : ( <BtnOutline href={link} target="_blank" rel="noreferrer">
      <img src={webflowIcon} alt="webflowIcon" />
      Webflow
    </BtnOutline>)}
     </>
    // {gitHubLink &&  <BtnOutline href={link} target="_blank" rel="noreferrer">
    //   <img src={gitHubIcon} alt="gitHubIcon" />
    //   GitHub repo
    // </BtnOutline>}
    // <BtnOutline href={link} target="_blank" rel="noreferrer">
    //   <img src={gitHubIcon} alt="gitHubIcon" />
    //   GitHub repo
    // </BtnOutline>
  );
};

BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BtnGitHub;
