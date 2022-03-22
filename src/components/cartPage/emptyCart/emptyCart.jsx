import React from 'react';
import "./emptyCart.css";
import Button from "../../common/button/button";
import {useNavigate} from "react-router-dom";

function EmptyCart() {
    const navigate = useNavigate();

    function buttonHandler(){
        navigate("/Catalogue/CatalogueFull", {replace: true});
    }

    return(
        <div className="empty-cart">
            <div className="empty-cart__text">
                В корзине пока пусто    
            </div>
            <div className="empty-cart__cart__text">
               Посмотрите предложения в нашем каталоге  
            </div>
            <div className="empty-cart__btn-wrapper" onClick={()=> buttonHandler()}>
                <Button name={"Перейти в каталог"}/>    
            </div>
        </div>
    )
}

export default EmptyCart;