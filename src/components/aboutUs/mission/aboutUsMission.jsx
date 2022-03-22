import React from 'react';

import "./aboutUsMission.css";

import Decoration1 from "../../../assets/img/videoDecor.svg";
import Decoration2 from "../../../assets/img/videoDecor2.svg";
import Quotations from "../../../assets/img/quotations.svg";
import MissionBigImg from "../../../assets/img/missionBig.png";
import MissionSmallImg from "../../../assets/img/missionSmall.png";

function AboutUsMission() {
    return (
        <div className="about-us-mission__wrapper">
            <div className="about-us-mission">
                <div className="about-us-mission__description">
                    <div className="about-us-mission__subtitle-wrapper">
                        <h4 className="about-us-mission__subtitle">
                            Наша миссия
                        </h4>
                    </div>
                    <div className="about-us-mission__quotations-wrapper">
                        <img src={Quotations} alt="quotations" />
                    </div>
                    <p className="about-us-mission__paragraph">
                        Sit tempor ante justo amet duis. Ultricies cras eleifend elit, posuere et risus non. Id et ut pellentesque consequat, amet erat gravida euismod pharetra.
                    </p>
                </div>
                <div className="about-us-mission__images-wrapper">
                    <img className="about-us-mission__big-image" src={MissionBigImg} alt="big" />
                    <img className="about-us-mission__decoration about-us-mission__decoration-small-image" src={MissionSmallImg} alt="small" />
                    <img className="about-us-mission__decoration about-us-mission__decoration-upper-dots" src={Decoration1} alt="dots" />
                    <img className="about-us-mission__decoration about-us-mission__decoration-lower-dots" src={Decoration2} alt="dots" />
                </div>
            </div>
        </div>
    )
}

export default AboutUsMission;