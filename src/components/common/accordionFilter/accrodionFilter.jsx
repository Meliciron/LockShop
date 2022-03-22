import React from 'react';
import ArrowDownImage from "../../../assets/img/Nav-arrow.svg";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from 'react-redux';
import { addFilteringTag, setLastChosenCategory } from "../../../redux/store/sortingAndFiltering";
import SetFilterButton from '../../catalogueFull/setFilterButton/setFilterButton';

import "./accordionFilter.css";

function AccrodionFilter({ title, content, checkbox = true, filterFunction, priceClicked, setPriceClicked }) {
    const dispatch = useDispatch();
    let lastChosenCategory = useSelector(state => state.filteringAndSorting.lastChosenCategory);
    let filters = useSelector(state => state.filteringAndSorting)
    let id = Number(Date.now());

    let initialAccrodionClass = "accrodion-filter";
    switch (title) {
        case "Цена":
            (filters.price[0] !== 2940 || filters.price[1] !== 34500) ? initialAccrodionClass = "accrodion-filter_active" : initialAccrodionClass = "accrodion-filter";
            break;
        case "Особенности":
            filters.featuries.length > 0 ? initialAccrodionClass = "accrodion-filter_active" : initialAccrodionClass = "accrodion-filter";
            break;
        case "Цвет":
            filters.color.length > 0 ? initialAccrodionClass = "accrodion-filter_active" : initialAccrodionClass = "accrodion-filter";
            break;
        case "Установка":
            filters.installation.length > 0 ? initialAccrodionClass = "accrodion-filter_active" : initialAccrodionClass = "accrodion-filter";
            break;
        default: break;
    }

    const [accordionClass, setAccordionClass] = React.useState(initialAccrodionClass);
    const [filterBtnClass] = React.useState("accrodion-filter__set-filter-btn-wrapper_hidden");
    const [activeBtnClass, setActiveBtnClass] = React.useState("accrodion-filter__set-filter-btn-wrapper");

    function changeAccordionClass() {
        accordionClass === "accrodion-filter" ? setAccordionClass("accrodion-filter_active") : setAccordionClass("accrodion-filter");
    };

    function categoryHandler(item, title) {
        dispatch(addFilteringTag({ item, title }));
        dispatch(setLastChosenCategory(item));
        setActiveBtnClass("accrodion-filter__set-filter-btn-wrapper");
    }

    function clickPriceHandler(e) {
        e.stopPropagation();
        filterFunction();
        setPriceClicked(false);
    }

    return (
        <div className={accordionClass}>
            <div className="accrodion-filter__top-row" onClick={changeAccordionClass}>
                <div className="accrodion-filter__top-row-title">
                    {title}
                </div>
                <img src={ArrowDownImage} alt="arrow" className="top-row__arrow-img" />
            </div>
            <div className="accrodion-filter__content">
                {
                    checkbox ?
                        <div className="accrodion-filter__content-item">
                            {
                                (content.length > 0) ?
                                    content.map((item, index) => {
                                        return <div
                                            key={index}
                                            onClick={() => { categoryHandler(item, title) }}
                                            className="accrodion-filter__wrapper"
                                        >
                                            <div className="accrodion-filter__content-item-wrapper" >
                                                <Checkbox
                                                    checked={
                                                        title === "Особенности" ? filters.featuries.includes(item) ? true : false :
                                                            title === "Цвет" ? filters.color.includes(item) ? true : false :
                                                                title === "Установка" ? filters.installation.includes(item) ? true : false : false
                                                    }
                                                    id={`${item}`}
                                                    className="accrodion-filter__content-item-checkbox"
                                                />
                                                <div className="accrodion-filter__content-item-text" onClick={(e) => e.stopPropagation()}>
                                                    <label
                                                        htmlFor={`${item}`}
                                                        className="accrodion-filter__content-item-label"
                                                    >
                                                        {item}
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                className={lastChosenCategory === item ? activeBtnClass : filterBtnClass}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    filterFunction();
                                                    setActiveBtnClass("accrodion-filter__set-filter-btn-wrapper_hidden");
                                                }}
                                            >
                                                <SetFilterButton />
                                            </div>
                                        </div>
                                    }) :
                                    <div key={id}>
                                        <Checkbox type="checkbox" className="accrodion-filter__content-item-checkbox" />
                                        {content}
                                    </div>
                            }
                        </div> :
                        <div
                            key={id}
                            className="accrodion-filter__wrapper"
                        >
                            <div onClick={(e) => { setActiveBtnClass("accrodion-filter__set-filter-btn-wrapper"); e.stopPropagation()}}>
                                {content}
                            </div>
                            <div
                                className={(lastChosenCategory === "Цена" && priceClicked) ? "accrodion-filter__set-filter-btn-wrapper" : "accrodion-filter__set-filter-btn-wrapper_hidden"}
                                onClick={(e) => { clickPriceHandler(e) }}
                            >
                                <SetFilterButton />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default AccrodionFilter;