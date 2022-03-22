import React from "react";

import "./costSection.css";

function CostSection({cost}){
    return(
        <div className="cost-section">
            <div className="cost-section__new-cost">
                {cost[0]}₽
            </div>
            <div className="cost-section__old-cost">
                {cost[1]}₽
            </div>
        </div>
    )
}

export default CostSection