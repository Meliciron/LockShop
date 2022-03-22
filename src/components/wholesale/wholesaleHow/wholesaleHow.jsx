import React from "react";

import "./wholesaleHow.css";

import howImageFirst from "../../../assets/img/how1.png";
import howImageSecond from "../../../assets/img/how2.png";
import howImageThird from "../../../assets/img/how3.png";

function WholesaleHow() {
    return (
        <div className="wholesale__how-we-work">
            <div className="wholesale__how-we-work-inner">
                <h3 className="wholesale__section-title">Как мы работаем</h3>
                <div className="wholesale__how-we-work-main-content">
                    <div className="wholesale__how-we-work-card how-first">
                        <img src={howImageFirst} alt="" className="wholesale__how-we-work-card-image" />
                        <div className="wholesale__how-we-work-card-title-wrapper">
                            <h4 className="wholesale__how-we-work-card-title">Оформление заявки</h4>
                        </div>
                        <p className="wholesale__how-we-work-card-description">
                            Вы оставляете заявку на сайте или связываетесь с нами по указанному на сайте номеру телефона
                        </p>
                    </div>
                    <div className="wholesale__how-we-work-card how-second">
                        <img src={howImageSecond} alt="" className="wholesale__how-we-work-card-image" />
                        <div className="wholesale__how-we-work-card-title-wrapper">
                            <h4 className="wholesale__how-we-work-card-title">Согласование</h4>
                        </div>
                        <p className="wholesale__how-we-work-card-description">
                            Мы консультируем Вас, согласовываем стоимость и точное время приезда нашего специалиста
                        </p>
                    </div>
                    <div className="wholesale__how-we-work-card how-third">
                        <img src={howImageThird} alt="" className="wholesale__how-we-work-card-image" />
                        <div className="wholesale__how-we-work-card-title-wrapper">
                            <h4 className="wholesale__how-we-work-card-title">Отправка товара и установка</h4>
                        </div>
                        <p className="wholesale__how-we-work-card-description">
                            Наш специалист по монтажу замков выезжает к Вам в точно зазначеное время по согласованному адресу
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WholesaleHow;