import React from "react";

import "./installationTag.css";

import installationTagImage from "../../assets/img/installationAvailable.svg";

function InstallationTag({installationTag}){
    return(
        <div className="installation-tag">
            <img src={installationTagImage} alt="installation available" className="installation-tag__image" />
            <span className="installation-tag__text">
                {installationTag}
            </span>
        </div>
    )
}

export default InstallationTag;