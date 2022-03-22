import React from "react";

import './wholesale.css';

import BackCallForm from "../backCallForm/backCallForm";
import WholeSaleIntro from "./wholeSaleIntro/wholeSaleIntro";
import WholesaleHow from "./wholesaleHow/wholesaleHow";
import WholesaleWhy from "./wholesaleWhy/wholesaleWhy";
import IntroSlider from "../mainPage/introSlider/introSlider";
import ProjectCard from "../mainPage/introSlider/projectCard/projectCard";


function Wholesale({locks}) {
    document.title = "Интернет магазин дверных замков. Оптовая продажа | The project of Egor Kolentsionok";

    React.useEffect(()=>{
        window.scroll(0, 0);
    }, []);

    return (
        <div className="wholesale">
            <WholeSaleIntro locks={locks} />
            <WholesaleHow />
            <WholesaleWhy />
            <div className="wholesale__our-projects">
                <div className="wholesale__our-projects-inner">
                    <h3 className="wholesale__section-title">
                        Наши крупные проекты
                    </h3>
                </div>
            </div>
            <IntroSlider card={<ProjectCard/>}/>
            <BackCallForm />
        </div>
    )
}

export default Wholesale