import React from "react";
import "./deliveryService.css";

function DeliveryService({ userData, checkDataFunction }) {

    const [invalidInput, setInvalidInput] = React.useState([]);

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
                case "otdelenie":
                    userData.deliveryService.otdelenie = data.value
                    break;
                default: break;
            }
            checkDataFunction()
        }
    }

    return (
        <div className="delivery-service">
            <div className="delivery-service__label-wrapper">
                <label>
                    <span>Город / населенный пункт</span>
                    <input
                        type="text"
                        name="city"
                        onChange={(e) => addressValidation(e.target)}
                        onBlur={(e) => addressValidation(e.target)}
                        className={invalidInput.includes("city") ? "delivery-service__text-input checkout-page__input_invalid" : "delivery-service__text-input"} />
                </label>
            </div>
            <div className="delivery-service__label-wrapper">
                <label>
                    <span>Пункт выдачи</span>
                    <input
                        type="text"
                        name="otdelenie"
                        onChange={(e) => addressValidation(e.target)}
                        onBlur={(e) => addressValidation(e.target)}
                        className={invalidInput.includes("otdelenie") ? "delivery-service__text-input checkout-page__input_invalid" : "delivery-service__text-input"} />
                </label>
            </div>
        </div>
    )
}

export default DeliveryService;