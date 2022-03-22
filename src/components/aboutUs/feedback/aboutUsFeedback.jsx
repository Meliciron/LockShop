import React from 'react';
import { useForm } from 'react-hook-form';

import "./aboutUsFeedback.css";

import Button from "../../common/button/button";
import Modal from "../../common/modal/modal";
import AdressImg from "../../../assets/img/adress.png";
import PhoneImg from "../../../assets/img/phones.png";
import EmailImg from "../../../assets/img/emails.png";


function AboutUsFeedback() {

    const [modalIsOpened, setModalIsOpened] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => { setModalIsOpened(true); reset() };

    return (
        <div className="about-us__feedback-wrapper">
            <div className="about-us__feedback">
                <div className="about-us__feedback-column">
                    <h4 className="about-us__feedback-column-title">
                        Остались вопросы?
                    </h4>
                    <p className="about-us__feedback-column-info">
                        Если у вас возникли какие-то вопросы по поводу оптовых заказов, заполните форму и мы Вам перезвоним.
                    </p>
                    <form className="about-us__feedback-backcall" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('name', { required: true })} className={`${errors.name ? "back-call__input_invalid" : "back-call__input_valid"}`} type="text" placeholder="Ваше имя" />
                        <input {...register('phone', { required: true, pattern: { value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ } })} className={`${errors.phone ? "back-call__input_invalid" : "back-call__input_valid"}`} type="tel" placeholder="+7 (_ _ _) _ _  _ _  _ _ _" />
                        <Button name={"Отправить"} />
                    </form>
                </div>
                <div className="about-us__feedback-column">
                    <h4 className="about-us__feedback-column-title">
                        Контакты
                    </h4>
                    <div className="about-us__feedback-subcolumns-wrapper">
                        <div className="about-us__feedback-subcolumn">
                            <h5 className="about-us__feedback-subcolumn-subtitle">
                                Наш адрес
                            </h5>
                            <a href="https://goo.gl/maps/8ZHxSZ7y12EVJPwd6" target="_blank" rel="noopener noreferrer" className="about-us__feedback-subcolumn-link">
                                Россия, Ростов-на-Дону ул. Богачева, 16
                            </a>
                            <img src={AdressImg} alt="adress" className="about-us__feedback-subcolumn-img" />
                        </div>
                        <div className="about-us__feedback-subcolumn">
                            <h5 className="about-us__feedback-subcolumn-subtitle">
                                Телефоны
                            </h5>
                            <a href="https://goo.gl/maps/8ZHxSZ7y12EVJPwd6" target="_blank" rel="noopener noreferrer" className="about-us__feedback-subcolumn-link">
                                Россия, Ростов-на-Дону ул. Богачева, 16
                            </a>
                            <img src={PhoneImg} alt="phone" className="about-us__feedback-subcolumn-img" />
                        </div>
                        <div className="about-us__feedback-subcolumn">
                            <h5 className="about-us__feedback-subcolumn-subtitle">
                                Email
                            </h5>
                            <a href="https://goo.gl/maps/8ZHxSZ7y12EVJPwd6" target="_blank" rel="noopener noreferrer" className="about-us__feedback-subcolumn-link">
                                Россия, Ростов-на-Дону ул. Богачева, 16
                            </a>
                            <img src={EmailImg} alt="email" className="about-us__feedback-subcolumn-img" />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Мы вам перезвоним"
                isOpened={modalIsOpened}
                setOpened={setModalIsOpened}
            />
        </div>
    )
}

export default AboutUsFeedback;