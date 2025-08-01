import gitHubIcon from "../../img/icons/gitHub-black.svg";
import webflowIcon from "../../img/icons/icons8-webflow.svg";
import netlifyIcon from "../../img/icons/netlify-logo.svg";
import PropTypes from "prop-types";
import { BtnOutline } from "./Buttons.styled";

const BtnGitHub = ({ link, type }) => {
  const GitHubLink = type === "GitHubLink";
  const WebflowLink = type === "WebflowLink";
  const NetlifyLink = type === "NetlifyLink";

  return (
    <>
      {GitHubLink && (
        <BtnOutline href={link} target="_blank" rel="noreferrer">
          <img src={gitHubIcon} alt="gitHubIcon" />
          GitHub repo
        </BtnOutline>
      )}
      {WebflowLink && (
        <BtnOutline href={link} target="_blank" rel="noreferrer">
          <img src={webflowIcon} alt="webflowIcon" />
          Webflow
        </BtnOutline>
      )}
      {NetlifyLink && (
        <BtnOutline href={link} target="_blank" rel="noreferrer">
          <img
            src={netlifyIcon}
            alt="netlifyIcon"
            width={50}
            style={{ objectFit: "contain" }}
          />
          Netlify
        </BtnOutline>
      )}
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
