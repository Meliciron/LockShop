import React from 'react';

import "./guarantees.css";

import MarkedList from "../markedList/markedList";

function Guarantees() {
    const markedListTitles = [
        "обмен или возврат товара в срок до 14 дней с момента приобретения;",
        `обмен или возврат товара на основании акта, выданного Авторизованным сервисным центром по результатам гарантийного обслуживания (в соответствии с Законом РФ «О защите прав потребителей»).`
    ];

    return (
        <div className="guarantees" id="guarantees">
            <div className="guarantees__title-wrapper">
                <h3 className="delivery-page__section-title">
                    Гарантии
                </h3>
            </div>
            <span className="guarantees__text">
                На все товары, приобретенные в нашем магазине, предоставляется гарантия, дающая право на:
            </span>
            <div className="guarantees__marked-list-wrapper">
                {markedListTitles.map((title, index) => <MarkedList key={index} name={title}></MarkedList>)}
            </div>
        </div>
    )
}

export default Guarantees;