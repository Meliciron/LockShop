import React from 'react';

import "./aboutUsIntro.css";
import Decoration1 from "../../../assets/img/videoDecor.svg";
import Decoration2 from "../../../assets/img/videoDecor2.svg";

function AboutUsIntro() {
    return (
        <div className="about-us__intro-wrapper">
            <div className="about-us__intro">
                <div className="about-us__intro-inner">
                    <div className="about-us__intro-video-wrapper">
                        <div className="about-us__intro-video-decoration about-us__intro-video-decoration_upper-dots">
                            <img src={Decoration1} alt="dots" />
                        </div>
                        <iframe width="605" height="425" src="https://www.youtube.com/embed/y7oaJ4l4Mn0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="about-us__intro-video-decoration about-us__intro-video-decoration_lower-dots">
                            <img src={Decoration2} alt="dots" />
                        </div>
                    </div>
                    <div className="about-us__intro-description">
                        <div className="about-us__intro-description-subtitle-wrapper">
                            <h4 className="about-us__intro-description-subtitle">
                                о нас
                            </h4>
                        </div>
                        <h2 className="about-us__intro-description-title">
                            Компания
                            <span className="about-us__intro-description-title about-us__intro-description-title_blue">
                                Golden Soft
                            </span>
                        </h2>
                        <p className="about-us__intro-description-paragraph">
                            Sit tempor ante justo amet duis. Ultricies cras eleifend elit, posuere et risus non. Id et ut pellentesque consequat, amet erat gravida euismod pharetra.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsIntro;