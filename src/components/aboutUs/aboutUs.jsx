import React from 'react';
import { Link } from "react-router-dom";

import "./aboutUs.css";

import AboutUsIntro from './intro/aboutUsIntro';
import AboutUsAdvatages from './advantages/aboutUsAdvantages';
import AboutUsMission from './mission/aboutUsMission';
import AboutUsFeedback from './feedback/aboutUsFeedback';

function AboutUs() {
    document.title = "Интернет магазин дверных замков. О компании | The project of Egor Kolentsionok";

    return (
        <div className="about-us__wrapper">
            <div className="about-us__navigation-wrapper">
                <div className="catalogue-full-page__nav-path">
                    <Link to="/" className="catalogue-full-page__nav-path-link">Главная </Link>
                    /
                    <Link to="/AboutUs" className="catalogue-full-page__nav-path-link catalogue-full-page__nav-path-link_active"> О нас</Link>
                </div>
            </div>
            <AboutUsIntro></AboutUsIntro>
            <AboutUsAdvatages></AboutUsAdvatages>
            <AboutUsMission></AboutUsMission>
            <AboutUsFeedback></AboutUsFeedback>
        </div>
    )
}

export default AboutUs;