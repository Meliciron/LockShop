import React from "react";
import { useForm } from 'react-hook-form';

import "./backCallForm.css";

import Button from "../common/button/button";
import Modal from "../common/modal/modal";

function BackCallForm() {

    const [modalIsOpened, setModalIsOpened] = React.useState(false);
    const [data, setData] = React.useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => { setData(data); setModalIsOpened(true); reset(); console.log(data) };

    return (
        <div className="back-call__wrapper">
            <form className="back-call" onSubmit={handleSubmit(onSubmit)}>
                <div className="back-call__inner">
                    <h2 className="back-call__title">Мы Вам перезвоним</h2>
                    <p className="back-call__description">Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
                    <div className="back-call__inputs-wrapper">
                        <input {...register('name', { required: true, pattern: { value: /^[A-Za-zА-Яа-я]+$/ }})}
                            className={`${errors.name ? "back-call__input_invalid" : "back-call__input_valid"}`}
                            type="text" 
                            placeholder="Ваше имя"
                        />
                        <input {...register('phone', { required: true, pattern: { value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ }})}
                            className={`${errors.phone ? "back-call__input_invalid" : "back-call__input_valid"}`}
                            type="tel"
                            placeholder="+7 (_ _ _) _ _  _ _  _ _ _"
                        />
                        <Button name={"Отправить"} />
                    </div>
                </div>
            </form>
            <Modal
                title="Ваша заявка успешно принята"
                data={data}
                isOpened={modalIsOpened}
                setOpened={setModalIsOpened}
            />
        </div>
    )
}

export default BackCallForm