import React from "react";

import "./refund.css";

import MarkedList from "../markedList/markedList";

function Refund() {
    const markedListTitles = [
        `выданный продавцом расчетный документ (чек / акт приема-передачи / накладная или др.), подтверждающий факт приобретения;`,
        `гарантийный талон;`,
        `документ, удостоверяющий личность;`,
        `идентификационный налоговый номер (ИНН);`,
        `в случае оплаты покупки банковской картой – актуальные реквизиты карточного счета.`
    ]

    return (
        <div className="refund">
            <div className="refund__title-wrapper">
                <h3 className="delivery-page__section-title">
                    Возврат товара
                </h3>
            </div>
            <span className="refund__subtitle">
                Подготовьте, пожалуйста, все необходимые документы:
            </span>
            <div className="refund__marked-list-wrapper">
                {markedListTitles.map((title, index) => <MarkedList key={index} name={title}></MarkedList>)}
            </div>
            <span className="refund__subtitle">
                Передайте товар на гарантийное обслуживание, обязательно приложите указанные выше документы.
            </span>
            <div className="refund__text-info-wrapper">
                <p className="refund__text-info">
                    Полезная информация о правах потребителя в случае приобретения им товара ненадлежащего качества –{" "}
                    <a href="http://www.consultant.ru/document/cons_doc_LAW_305/" target="_blank" rel="noopener noreferrer" className="refund__text-link">
                        Закона РФ «О защите прав потребителей»
                    </a>.
                </p>
            </div>
            <div className="refund__text-info-wrapper">
                <p className="refund__text-info">
                    Уважаемый покупатель, приносим извинения за неудобства, случившиеся в связи с выходом из строя. По вашему обращению будут приняты все меры для быстрого решения вашей проблемы.
                </p>
            </div>
        </div>
    )
}

export default Refund;