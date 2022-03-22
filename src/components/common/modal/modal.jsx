import React from "react";

import './modal.css';

import Button from "../button/button";
import ModalImage from "../../../assets/img/modalImg.svg";

function Modal(props) {
    return (
        <div className={`modal__wrapper ${props.isOpened ? "opened" : "closed"}`}>
            <div className="modal__body">
                <div className="modal__image-wrapper">
                    <img src={ModalImage} alt="tick" className="modal__image" />
                </div>
                <p className="modal__title">
                    Спасибо!
                </p>
                <p className="modal__title">
                    {props.data !== undefined ?
                        props.data.name + ", " + props.title : props.title !== undefined ? props.title : ""}.
                </p>
                <p className="modal__title">
                    Наш специалист свяжется с Вами.
                </p>
                <div className="modal__description">

                </div >
                <div className="modal__button-wrapper" onClick={() => props.setOpened(false)} >
                    <Button className="modal__button" name="Хорошо"></Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;