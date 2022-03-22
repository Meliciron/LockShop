import React from 'react';
import "./ItemInCart.css";
import CartIcon from "../../../assets/img/cartIcon.svg";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantityInCart } from '../../../redux/store/cartSlice';
import { Link } from 'react-router-dom';

function ItemInCart({ itemInCart }) {
    let product = itemInCart.item;
    const [quantity] = React.useState(itemInCart.quantity);

    const dispatch = useDispatch();
    const imagesPath = '/img/cardsImages/';

    function increaseItemsInCart(){
        dispatch(setQuantityInCart({item: product, quantity: quantity + 1}));
    }

    function decreaseItemsInCart(){
        if(quantity > 1){
           dispatch(setQuantityInCart({item: product, quantity: quantity - 1}));
        }
    }

    return (
        <div className="item-in-cart">
            <div className="item-in-cart__wrapper">
                <Link to={"/Catalogue/CatalogueFull/CardDetails/:art" + product.art}>
                    <img src={imagesPath + product.pictures + "/small.png"} alt="product" className="item-in-cart__image" />
                </Link>
                <div className="item-in-cart__name-wrapper">
                    <p className="item-in-cart__name">
                        <Link className="item-in-cart__link" to={"/Catalogue/CatalogueFull/CardDetails/:art" + product.art}>
                            {product.name}
                        </Link>
                    </p>
                    <p className="item-in-cart__article">
                         {product.art}
                    </p>
                </div>
                <div className="item-in-cart__price-wrapper">
                    <p className="item-in-cart__price">
                        {product.price[0].replace(/\s/g, '')} руб.
                    </p>
                </div>
                <div className="item-in-cart__quantity-wrapper">
                    <div className="item-in-cart__quantity-decrease" onClick={() => decreaseItemsInCart()}>
                        –
                    </div>
                    <div className="item-in-cart__quantity-value">
                        {quantity}
                    </div>
                    <div className="item-in-cart__quantity-increase" onClick={()=>increaseItemsInCart()}>
                        +
                    </div>
                </div>
                <div className="item-in-cart__total-cost">
                    {quantity * Number(product.price[0].replace(/\s/g, ''))} руб.
                </div>
                <div className="item-in-cart__cart-icon-wrapper">
                    <img src={CartIcon} alt="cart" className="item-in-cart_cart-icon" onClick={() => dispatch(removeFromCart({item: product, quantity: quantity}))} />
                </div>
            </div>
        </div>
    )
}

export default ItemInCart;