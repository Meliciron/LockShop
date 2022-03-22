import React from 'react';
import "./pochtaRossii.css";

function PochtaRossii({userData, checkDataFunction}) {

    const [invalidInput, setInvalidInput] = React.useState([]);

    function zipValidation(data){
        if (data.value.length === 0 || data.value.search(/^\d{6}$/) === -1) {
            invalidInput.push(data.name)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else if (invalidInput.includes(data.name)) {
            invalidInput.splice(invalidInput.indexOf(data.name), 1)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else {
            userData.deliveryService.zip = data.value
            checkDataFunction()
        }
    }

    function addressValidation(data){
        if (data.value.length === 0 || data.value.search(/^[-а-яА-ЯёЁ0-9\s]+$/) === -1) {
            invalidInput.push(data.name)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else if (invalidInput.includes(data.name)) {
            invalidInput.splice(invalidInput.indexOf(data.name), 1)
            setInvalidInput([...new Set(invalidInput)]);
        }
        else {
            switch(data.name){
                case "city":  
                    userData.deliveryService.city = data.value
                    break;
                case "oblast":
                    userData.deliveryService.oblast = data.value
                    break;
                case "street":
                    userData.deliveryService.street = data.value
                    break;
                case "region":
                    userData.deliveryService.region = data.value
                    break;
                case "apartment":
                    userData.deliveryService.apartment = data.value
                    break
                default: break;
            }
            checkDataFunction()
        }
    }

    return (
        <div className="pochta-rossii">
            <form action="" className="pochta-rossii__form">
                <div className="pochta-rossii__label-wrapper">
                    <label className="pochta-rossii__label">
                        <span>Индекс</span>
                        <input
                            type="text"
                            name="zip"
                            onChange={(e) => zipValidation(e.target)}
                            onBlur={(e) => zipValidation(e.target)}
                            className={invalidInput.includes("zip") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
                <div className="pochta-rossii__label-wrapper">
                    <label>
                        <span>Город / населенный пункт</span>
                        <input
                            type="text"
                            name="city"
                            onChange={(e) => addressValidation(e.target)}
                            onBlur={(e) => addressValidation(e.target)}
                            className={invalidInput.includes("city") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
                <div className="pochta-rossii__label-wrapper">
                    <label>
                        <span>Область</span>
                        <input
                            type="text"
                            name="oblast"
                            onChange={(e) => addressValidation(e.target)}
                            onBlur={(e) => addressValidation(e.target)}
                            className={invalidInput.includes("oblast") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
                <div className="pochta-rossii__label-wrapper">
                    <label>
                        <span>Улица</span>
                        <input
                            type="text"
                            name="street"
                            onChange={(e) => addressValidation(e.target)}
                            onBlur={(e) => addressValidation(e.target)}
                            className={invalidInput.includes("street") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
                <div className="pochta-rossii__label-wrapper">
                    <label>
                        <span>Регион / район</span>
                        <input
                            type="text"
                            name="region"
                            onChange={(e) => addressValidation(e.target)}
                            onBlur={(e) => addressValidation(e.target)}
                            className={invalidInput.includes("region") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
                <div className="pochta-rossii__label-wrapper">
                    <label>
                        <span>Дом</span>
                        <input
                            type="text"
                            name="apartment"
                            onChange={(e) => addressValidation(e.target)}
                            onBlur={(e) => addressValidation(e.target)}
                            className={invalidInput.includes("apartment") ? "pochta-rossii__text-input checkout-page__input_invalid" : "pochta-rossii__text-input"} />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default PochtaRossii;