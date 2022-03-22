import React from 'react';

import "./tabs.css";

function Tabs({firstTab, secondTab, thirdTab}) {

    const [tabState, setTabState] = React.useState(1);

    function changeActiveTab(index){
        setTabState(index);
    }

    return (
        <div className="tabs">
            <div className="tabs__titles-wrapper">
                <div 
                className={tabState === 1 ? "tabs__title tabs__title_active" :  "tabs__title"}
                onClick={()=>changeActiveTab(1)}
                >Характеристики</div>
                <div 
                 className={tabState === 2 ? "tabs__title tabs__title_active" :  "tabs__title"}
                 onClick={()=>changeActiveTab(2)}
                >Описание</div>
                <div 
                 className={tabState === 3 ? "tabs__title tabs__title_active" :  "tabs__title"}
                 onClick={()=>changeActiveTab(3)}
                >Отзывы</div>
            </div>
            <div className="tabs__content-wrapper">
                <div className={tabState === 1 ? "tabs__content tabs__content_active" :  "tabs__content"}>
                    {firstTab}
                </div>
                <div className={tabState === 2 ? "tabs__content tabs__content_active" :  "tabs__content"}>
                    {secondTab}
                </div>
                <div className={tabState === 3 ? "tabs__content tabs__content_active" :  "tabs__content"}>
                    {thirdTab}
                </div>
            </div>
        </div>
    )
}

export default Tabs;