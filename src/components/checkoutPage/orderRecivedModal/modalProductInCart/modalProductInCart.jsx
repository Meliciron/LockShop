import React from 'react';
import "./modalProductInCart.css";

function ModalProductInCart({ img, name, art, quantity, price }) {

    const imagesPath = "./img/cardsImages/" + img + "/small.png"
    price = +price.replace(/\s/g, '');
    return (
        <div className="modal-product-in-cart">
            <div className="modal-product-in-cart__img-wrapper">
                <img src={imagesPath} alt="product" className="modal-product-in-cart__img" />
            </div>
            <div className="modal-product-in-cart__column">
                <div className="modal-product-in-cart__major-text">
                    {name}
                </div>
                <div className="modal-product-in-cart__minor-text">
                    {art}
                </div>
            </div>
            <div className="modal-product-in-cart__column">
                {`x ${quantity}`}
            </div>
            <div className="modal-product-in-cart__column modal-product-in-cart__column-price">
                {`${price} ₽`}
            </div>
        </div>
    )
}

export default ModalProductInCart