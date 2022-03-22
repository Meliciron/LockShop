import React from "react";
import "./wholeSaleIntro.css";
import Button from "../../common/button/button";
import { Checkbox } from "@mui/material";
import Modal from "../../common/modal/modal";


function WholeSaleIntro() {

    const [modalIsOpened, setModalIsOpened] = React.useState(false);
    const [validForm, setValidForm] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const [modalWindowData, setModalWindowData] = React.useState({});
    const [invalidInputs, setInvalidInputs] = React.useState([]);

    function onChangeHandler(e) {
        let value = e.target.value;
        let name = e.target.name;
        switch (name) {
            case "name":
                if (value.length === 0 || value.search(/\d/) !== -1) {
                    invalidInputs.push(name)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    setValidForm(false)
                }
                else if (invalidInputs.includes(name)) {
                    invalidInputs.splice(invalidInputs.indexOf(name), 1)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    checkFields()
                }
                else {
                    modalWindowData.name = value;
                    checkFields()
                }
                break;
            case ("company"):
                if (value.length === 0) {
                    invalidInputs.push(name)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    setValidForm(false)
                }
                else if (invalidInputs.includes(name)) {
                    invalidInputs.splice(invalidInputs.indexOf(name), 1)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    checkFields()
                }
                else {
                    modalWindowData.company = value
                    checkFields()
                }
                break;
            case ("productName"):
                if (value.length === 0) {
                    invalidInputs.push(name)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    setValidForm(false)
                }
                else if (invalidInputs.includes(name)) {
                    invalidInputs.splice(invalidInputs.indexOf(name), 1)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    checkFields()
                }
                else {
                    modalWindowData.productName = value
                    checkFields()
                }
                break;
            case "phoneNumber":
                if (value.length === 0 || value.search(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) === -1) {
                    invalidInputs.push(name)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    setValidForm(false)
                }
                else if (invalidInputs.includes(name)) {
                    invalidInputs.splice(invalidInputs.indexOf(name), 1)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    checkFields()
                }
                else {
                    modalWindowData.phoneNumber = value;
                    checkFields()
                }
                break;
            case "amount":
                if (value.length === 0 || value.search(/^\d+$/) === -1 || (+value <= 0 || +value > 1000)) {
                    invalidInputs.push(name)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    setValidForm(false)
                }
                else if (invalidInputs.includes(name)) {
                    invalidInputs.splice(invalidInputs.indexOf(name), 1)
                    setInvalidInputs([...new Set(invalidInputs)]);
                    checkFields()
                }
                else {
                    modalWindowData.amount = value;
                    checkFields()
                }
                break;
            default: break;
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        if (validForm) {
            setModalIsOpened(true);
            e.target.reset();
            setValidForm(false);
            setUserData(modalWindowData);
            setModalWindowData({});
        }
    }

    function checkFields() {
        if (
            modalWindowData.amount != null &&
            modalWindowData.phoneNumber != null &&
            modalWindowData.company != null &&
            modalWindowData.productName != null &&
            modalWindowData.name != null &&
            invalidInputs.length === 0
        ) {
            setValidForm(true)
        }
    }

    return (
        <div className="wholesale__intro">
            <div className="wholesale__intro-inner">
                <div className="wholesale__content-wrapper">
                    <div className="wholesale__intro-description-wrapper">
                        <h2 className="wholesale__intro-description-title">Оформите заявку и мы вам перезвоним</h2>
                        <p className="wholesale__intro-description">Vitae, urna, massa dictumst morbi ut id dui nulla.
                            Purus a velit sem viverra. Nunc ac quis donec nunc eu blandit ante nibh. Sit felis nulla donec
                            mauris quis nulla velit.</p>
                    </div>
                    <div className="wholesale__intro-form-wrapper">
                        <form className="wholesale__intro-form" onSubmit={(e) => submitHandler(e)}>
                            <h3 className="wholesale__intro-form-title">
                                Оформление заявки
                            </h3>
                            <div className="wholesale__intro-form-inputs-wrapper">
                                <div className="wholesale__inputs-row">
                                    <div className="wholesale__intro-form-input-wrapper">
                                        <label htmlFor="name">Имя</label>
                                        <input
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Ваше имя"
                                            className={invalidInputs.includes("name") ? "input input_invalid" : "input"}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                    <div className="wholesale__intro-form-input-wrapper">
                                        <label htmlFor="company">Название компании</label>
                                        <input
                                            name="company"
                                            id="company"
                                            type="text"
                                            placeholder="Ваша компания"
                                            className={invalidInputs.includes("company") ? "input input_invalid" : "input"}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                    <div className="wholesale__intro-form-input-wrapper">
                                        <label htmlFor="phoneNumber">Номер телефона</label>
                                        <input
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            type="tel"
                                            placeholder="+7 (_ _ _) _ _  _ _  _ _ _"
                                            className={invalidInputs.includes("phoneNumber") ? "input input_invalid" : "input"}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="wholesale__inputs-row">
                                    <div className="wholesale__intro-form-input-wrapper wholesale__intro-form-input-wrapper_long">
                                        <label htmlFor="productName">Название товара</label>
                                        <input
                                            name="productName"
                                            id="productName"
                                            type="text"
                                            placeholder="Введите название товара"
                                            className={invalidInputs.includes("productName") ? "input input_invalid" : "input"}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                    <div className="wholesale__intro-form-input-wrapper">
                                        <label htmlFor="amount">Количество</label>
                                        <input
                                            name="amount"
                                            id="amount"
                                            type="text"
                                            placeholder="Количество товара"
                                            className={invalidInputs.includes("amount") ? "input input_invalid" : "input"}
                                            onChange={(e) => onChangeHandler(e)}
                                        />
                                    </div>
                                </div>
                                <div className="wholesale__intro-form-input-checkobox-wrapper">
                                    <Checkbox className="wholesale__intro-form-checkbox" id="print-logo" name="personal-logo" />
                                    <label className="wholesale__intro-form-checkbox-label" htmlFor="print-logo">Нанесение персонального логотипа (бесплатно)</label>
                                </div>
                                <div className="wholesale__intro-form-input-checkobox-wrapper">
                                    <Checkbox className="wholesale__intro-form-checkbox" id="help" name="montage-help" />
                                    <label className="wholesale__intro-form-checkbox-label" htmlFor="help" >Помощь в монтажных работах (бесплатно)</label>
                                </div>
                            </div>
                            <div className={validForm ? "wholesale__intro-form-submit-button-wrapper" : "wholesale__intro-form-submit-button-wrapper wholesale__intro-form-submit-button-wrapper_nonactive"}>
                                <Button name={"Отправить заявку"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <Modal
                title="Ваша заявка успешно принята"
                isOpened={modalIsOpened}
                data={userData}
                setOpened={setModalIsOpened}
            ></Modal>
        </div>
    )
}

export default WholeSaleIntro