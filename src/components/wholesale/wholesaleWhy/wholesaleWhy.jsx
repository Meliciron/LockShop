import React from "react";

import "./wholesaleWhy.css";
import whyWeImage from "../../../assets/img/why.png";
import whyWeFirstIcon from "../../../assets/img/why1.svg";
import whyWeSecondIcon from "../../../assets/img/why2.svg";
import whyWeThirdIcon from "../../../assets/img/why3.svg";

function WholesaleWhy() {
    return (
        <div className="wholesale__why-we">
            <div className="wholesale__why-we-inner">
                <h3 className="wholesale__section-title">
                    Почему стоит выбрать нас
                </h3>
                <div className="wholesale__why-we-main-content">
                    <div className="wholesale__why-we-image-wrapper">
                        <img src={whyWeImage} alt="why we" className="wholesale__why-we-image" />
                    </div>
                    <div className="wholesale__why-we-features-wrapper">
                        <div className="wholesale__why-we-feature">
                            <img src={whyWeFirstIcon} alt="why we" className="wholesale__why-we-feature-image" />
                            <h4 className="wholesale__why-we-feature-title">
                                Возврат удвоенной стоимости
                            </h4>
                            <p className="wholesale__why-we-feature-description">
                                За каждый отправленый товар, который окажется бракованным, мы вернем вам двойную стоимость.
                            </p>
                        </div>
                        <div className="wholesale__why-we-feature">
                            <img src={whyWeSecondIcon} alt="why we" className="wholesale__why-we-feature-image" />
                            <h4 className="wholesale__why-we-feature-title">
                                Монтаж
                            </h4>
                            <p className="wholesale__why-we-feature-description">
                                Проводим монтажные работы любой сложности и в любое удобное для Вас время
                            </p>
                        </div>
                        <div className="wholesale__why-we-feature">
                            <img src={whyWeThirdIcon} alt="why we" className="wholesale__why-we-feature-image" />
                            <h4 className="wholesale__why-we-feature-title">
                                Брендирование продукта
                            </h4>
                            <p className="wholesale__why-we-feature-description">
                                Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности
                            </p>
                        </div>
                        <div className="wholesale__why-we-feature">
                            <img src={whyWeFirstIcon} alt="why we" className="wholesale__why-we-feature-image" />
                            <h4 className="wholesale__why-we-feature-title">
                                Гарантия качества
                            </h4>
                            <p className="wholesale__why-we-feature-description">
                                Мы прекрасно понимаем насколько важно иметь безопасный замок, поэтому гарантируем качество
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WholesaleWhy;