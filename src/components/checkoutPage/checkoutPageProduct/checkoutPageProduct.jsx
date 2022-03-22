import React from 'react';
import "./checkoutPageProduct.css";
import { useDispatch } from 'react-redux';
import { setQuantityInCart, removeFromCart } from '../../../redux/store/cartSlice';
import Price from '../../common/costSection/costSection';

function CheckoutPageProduct({ product }) {
    let imagePath = "./img/cardsImages/" + product.item.pictures + "/small.png";
    const dispatch = useDispatch();

    function increaseItemsInCart(){
        dispatch(setQuantityInCart({item: product.item, quantity: product.quantity + 1}));
    }

    function decreaseItemsInCart(){
        if(product.quantity > 1){
           dispatch(setQuantityInCart({item: product.item, quantity: product.quantity - 1}));
        }
    }

    return (
        <div className="checkout-page-product">
            <div className="checkout-page-product__img-wrapper">
                <img src={imagePath} alt="product in cart" className="checkout-page-product__img" />
            </div>
            <div className="checkout-page-product__description-wrapper">
                <div className="checkout-page-product__name">
                    {product.item.name}
                </div>
                <div className="checkout-page-product__art">
                    {product.item.art}
                </div>
                <div className="checkout-page-product__cost">
                    <div className="item-in-cart__quantity-wrapper">
                        <div className="item-in-cart__quantity-decrease" onClick={() => decreaseItemsInCart()}>
                            –
                        </div>
                        <div className="item-in-cart__quantity-value">
                            {product.quantity}
                        </div>
                        <div className="item-in-cart__quantity-increase" onClick={() => increaseItemsInCart()}>
                            +
                        </div>
                    </div>
                    <div className="checkout-page-product__cost-container">
                        <Price cost={product.item.price}/>
                    </div>
                </div>
            </div>
            <div className="checkout-page-product__remove-container" onClick={() => dispatch(removeFromCart({item: product.item, quantity: product.quantity}))}>
                &#215;
            </div>
        </div>
    )
}

export default CheckoutPageProduct;