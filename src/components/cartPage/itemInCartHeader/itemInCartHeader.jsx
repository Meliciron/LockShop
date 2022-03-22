import React from 'react';
import './itemInCartHeader.css';

function ItemInCartHeader(){
    return(
        <div className="item-in-cart-header__wrapper">
           <div className="item-in-cart-header__item item-in-cart-header__item-product">
               Товар
           </div>
           <div className="item-in-cart-header__item item-in-cart-header__item-price">
               Цена
           </div>
           <div className="item-in-cart-header__item item-in-cart-header__item-quantity">
               Количество
           </div>
           <div className="item-in-cart-header__item item-in-cart-header__item-total-price">
               Итого
           </div>
        </div>
    )
}

export default ItemInCartHeader;