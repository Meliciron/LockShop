import React from 'react';
import "./deliveryPage.css";
import Delivery from "./delivery/delivery";
import Payment from "./payment/payment";
import Guarantees from "./guarantees/guarantees";
import Refund from "./refund/refund";
import { useSelector } from "react-redux";

function DeliveryPage() {
    document.title = "Интернет магазин дверных замков. Дополнительная информация | The project of Egor Kolentsionok";
    const section = useSelector(state => state.scroll.selectedSection)
    React.useEffect(() => {
        switch(section){
            case "Доставка": window.scroll(0, 0); break;
            case "Оплата": window.scroll(0, 700); break;
            case "Гарантии": window.scroll(0, 1090); break;
            case "Возврат товара": window.scroll(0, 1350); break;
            default: window.scroll(0, 0); break;
        }
    })

    return (
        <div className="delivery-page__wrapeper">
            <div className="delivery-page">
                <div className="delivery-page__section-wrapper">
                    <Delivery></Delivery>
                </div>
                <div className="delivery-page__section-wrapper">
                    <Payment></Payment>
                </div>
                <div className="delivery-page__section-wrapper">
                    <Guarantees></Guarantees>
                </div>
                <div className="delivery-page__section-wrapper">
                    <Refund></Refund>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPage;