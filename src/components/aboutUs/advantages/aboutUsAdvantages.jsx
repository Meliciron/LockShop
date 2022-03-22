import React from 'react';

import "./aboutUsAdvantages.css";

function AboutUsAdvatages(){
    return(
        <div className="about-us__advantages-wrapper">
                <div className="about-us__advantages">
                    <div className="about-us__advantages-column">
                        <h3 className="about-us__advantages-column-title">
                            5,567
                        </h3>
                        <p className="about-us__advantages-column-description">
                            Счастливых клиентов
                        </p>
                    </div>
                    <div className="about-us__advantages-column">
                        <h3 className="about-us__advantages-column-title">
                            1245
                        </h3>
                        <p className="about-us__advantages-column-description">
                            Продуктов на выбор
                        </p>
                    </div>
                    <div className="about-us__advantages-column">
                        <h3 className="about-us__advantages-column-title">
                            372
                        </h3>
                        <p className="about-us__advantages-column-description">
                            Продаж в день
                        </p>
                    </div>
                    <div className="about-us__advantages-column">
                        <h3 className="about-us__advantages-column-title">
                            20
                        </h3>
                        <p className="about-us__advantages-column-description">
                            Лет на рынке
                        </p>
                    </div>
                </div>
            </div>
    )
};

export default AboutUsAdvatages;