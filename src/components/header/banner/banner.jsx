import React from "react";

import "./banner.css";

function Banner() {
    const [bannerVisibility, setBannerVisibility] = React.useState(true);
    return (
        <div className={bannerVisibility ? "header__banner" : "header__banner_hidden"}>
            <div className="header__banner-inner">
                <p className="header__banner-info">
                    Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
                </p>
               <div onClick={()=>{setBannerVisibility(false)}} className="header__banner-close">
                    &#215;
               </div>
            </div>
        </div>
    )
}

export default Banner;