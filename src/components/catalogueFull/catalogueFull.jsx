import React from "react";
import "./catalogueFull.css";
import { useSelector, useDispatch } from "react-redux";
import { clearAllTags, setLastChosenCategory, addFilteringTag, setRenderCards } from "../../redux/store/sortingAndFiltering";
import Slider from '@mui/material/Slider';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from "swiper";
import ReactPaginate from "react-paginate";
import BlogSection from "../common/blogSection/blogSection";
import Card from "../common/card/card";
import AccrodionFilter from "../common/accordionFilter/accrodionFilter";
import BackCall from "../backCallForm/backCallForm";
import { Link } from "react-router-dom";
import ArrowSideImage from "../../assets/img/arrow.svg";
import EmptyFilters from "./emptyFilters/emptyFilters";
import Loader from "../common/loader/loader";
import Button from "../common/button/button";

function CatalogueFull() {
    const cardPath = "/Catalogue/CatalogueFull/CardDetails/";
    document.title = "Интернет магазин дверных замков. Каталог товаров | The project of Egor Kolentsionok";

    /*Redux*/
    let loadingStatus = useSelector(state => state.fetchLocks.status);
    let locks = useSelector(state => state.fetchLocks.locks);
    let locksToShow = locks;
    let filteringTags = useSelector(state => state.filteringAndSorting);
    const dispatch = useDispatch();

    /*Pagination*/
    const [pageNumber, setPageNumber] = React.useState(0);
    const cardsPerPage = 9;
    const pagesVisited = pageNumber * cardsPerPage;
    const [pageCount, setPageCount] = React.useState(Math.ceil(locks.length / cardsPerPage));
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    // let ulList = document.getElementsByTagName("ul");

    /*Cards for rendering */
    let renderCards = useSelector(state => state.filteringAndSorting.renderCards)

    /*Sorting logic*/
    const [sortType, setSortType] = React.useState()
    function sorting(sortType) {
        setSortType(sortType);
        switch (sortType) {
            case "rating":
                dispatch(setRenderCards([...renderCards].sort((prev, next) => next.rating - prev.rating)));
                break;
            case "cheaper":
                dispatch(setRenderCards([...renderCards].sort((prev, next) => Number(prev.price[0].replace(/\s/g, '')) - Number(next.price[0].replace(/\s/g, '')))));
                break;
            case "expensively":
                dispatch(setRenderCards([...renderCards].sort((prev, next) => Number(next.price[0].replace(/\s/g, '')) - Number(prev.price[0].replace(/\s/g, '')))));
                break;
            default:
                dispatch(setRenderCards([...renderCards]));
                break;
        }
    }

    /*Filtering logic*/
    function setFilters() {
        let result = [];
        locksToShow.forEach((item) => {
            if (
                filteringTags.featuries.every(tag => item.tags.includes(tag)) &&
                filteringTags.color.every(tag => item.color.includes(tag)) &&
                filteringTags.installation.every(tag => item.installation.includes(tag)) &&
                (+item.price[0].replace(/\s/g, '') >= filteringTags.price[0]) &&
                (+item.price[0].replace(/\s/g, '') <= filteringTags.price[1])
            ) {
                result.push(item);
            }
        })
        dispatch(setRenderCards(result));
        changePage({ selected: 0 });
        setPageCount(Math.ceil(result.length / cardsPerPage));
        // ulList[1].getElementsByTagName("li")[1].classList.add("selected");
        // ulList[1].getElementsByTagName("li")[2].classList.remove("selected");
    }

    /*Reset filters*/
    function resetFilters() {
        dispatch(clearAllTags());
        setSortType("default");
        changePage({ selected: 0 });
        dispatch(setRenderCards(locksToShow));
        setPageCount(Math.ceil(locks.length / cardsPerPage));
        setPriceValue([priceArray[0], priceArray[priceArray.length - 1]])
        dispatch(setLastChosenCategory(''));
    }

    /*Filtering categories*/
    let priceArray = [];
    locks.forEach(item => priceArray.push(Number(item.price[0].replace(/\s/g, ''))));
    priceArray = [...new Set(priceArray.sort((prev, next) => prev - next))];

    let featuriesArray = [];
    locks.forEach(item => item.tags.forEach(item => featuriesArray.push(item)));
    featuriesArray = [...new Set(featuriesArray)];

    let colorsArray = [];
    locks.forEach(item => item.color.forEach(item => colorsArray.push(item)));
    colorsArray = [...new Set(colorsArray)];

    let installationArray = [];
    locks.forEach(item => item.installation.forEach(item => installationArray.push(item)));
    installationArray = [...new Set(installationArray)];

    /*Recomended cards*/
    let cardsToShow = locks.filter(item => item.rating >= 4);

    /*Price slider*/
    const [priceClicked, setPriceClicked] = React.useState(false);
    const [priceValue, setPriceValue] = React.useState([priceArray[0], priceArray[priceArray.length - 1]]);
    function handleChangePrice(event, newValue) {
        setPriceValue(newValue);
        dispatch(addFilteringTag({ title: "Цена", value: newValue }));
        dispatch(setLastChosenCategory("Цена"));
        setPriceClicked(true);
    };

    function valueText(value) {
        return `${value} Rub`
    }

    /*Loading locks on page reload*/
    React.useEffect(() => {
        if(renderCards.length === 0){
            dispatch(setRenderCards(locks))
            setPriceValue([priceArray[0], priceArray[priceArray.length - 1]])
            setPageCount(Math.ceil(locks.length / cardsPerPage));
            dispatch(addFilteringTag({ title: "Цена", value: [priceArray[0], priceArray[priceArray.length - 1]]}))
        }
        else{
            setPageCount(Math.ceil(renderCards.length / cardsPerPage));
            setPriceValue(filteringTags.price)
        }
    }, [loadingStatus]);

    return (
        <div className="catalogue-full-page">
            <div className="catalogue-full-page-inner">
                <div className="catalogue-full-page__content-wrapper">
                    <div className="catalogue-full-page__nav-path">
                        <Link to="/" className="catalogue-full-page__nav-path-link">Главная </Link>
                        /
                        <Link to="/Catalogue/CatalogueFull"
                            className="catalogue-full-page__nav-path-link catalogue-full-page__nav-path-link_active"> Каталог</Link>
                    </div>
                    <div className="catalogue-full-page__category-title-wrapper">
                        <h2 className="catalogue-full-page__category-title">Каталог</h2>
                    </div>
                    <div className="catalogue-full-page__wrapper">
                        <div className="catalogue-full-page__left-column">
                            <button className="catalogue-full-page__left-column-button"
                                onClick={() => resetFilters()}
                            >
                                Сбросить фильтр
                            </button>
                            <aside className="catalogue-full-page__left-column-aside">
                                <h3 className="catalogue-full-page__left-column-aside-title">Фильтр</h3>
                                <div className="catalogue-full-page__left-column-aside-accrodion-wrapper">
                                    <AccrodionFilter
                                        key={1}
                                        title={"Цена"}
                                        content={
                                            <div className="slider-wrapper">
                                                <Slider
                                                    onChange={handleChangePrice}
                                                    getAriaLabel={() => 'Price range'}
                                                    value={priceValue}
                                                    min={priceArray[0]}
                                                    max={priceArray[priceArray.length - 1]}
                                                    step={100}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={valueText}
                                                />
                                            </div>}
                                        checkbox={false}
                                        filterFunction={setFilters}
                                        priceClicked={priceClicked}
                                        setPriceClicked={setPriceClicked}
                                    />
                                    <AccrodionFilter
                                        key={2}
                                        title={"Особенности"}
                                        content={featuriesArray}
                                        filterFunction={setFilters}
                                    />
                                    <AccrodionFilter
                                        key={3}
                                        title={"Цвет"}
                                        content={colorsArray}
                                        filterFunction={setFilters} />
                                    <AccrodionFilter
                                        key={4}
                                        title={"Установка"}
                                        content={installationArray}
                                        filterFunction={setFilters}
                                    />
                                </div>
                                <div
                                    className="catalogue-full-page__left-column-aside-set-filters-btn-wrapper"
                                    onClick={() => {
                                        setFilters();
                                        dispatch(setLastChosenCategory(""));
                                    }}>
                                    <Button name={"Применить"} />
                                </div>
                            </aside>
                        </div>
                        <div className="catalogue-full-page__right-column">
                            <div className="catalogue-full-page__right-column-top-section">
                                <select className="catalogue-full-page__right-column-top-section-select"
                                    onChange={e => sorting(e.target.value)}
                                    value={sortType}
                                >
                                    <option value="default">По умолчанию</option>
                                    <option value="rating">По рейтингу</option>
                                    <option value="cheaper">Сначала дешевые</option>
                                    <option value="expensively">Сначала дорогие</option>
                                </select>
                            </div>
                            {loadingStatus === "loading"
                                ?
                                <div className="catalogue-full-page__loader-wrapper">
                                    <Loader />
                                </div>
                                :
                                (renderCards.length === 0 && loadingStatus) === "resolved"
                                    ?
                                    <div className="catalogue-full-page__no-such-cards">
                                        <EmptyFilters />
                                    </div>
                                    :
                                    <div className="wrappre">
                                        <div className="catalogue-full-page__right-column-cards-grid-wrapepr">
                                            <div className="catalogue-full-page__right-column-cards-grid">
                                                {
                                                    renderCards
                                                        .slice(pagesVisited, pagesVisited + cardsPerPage)
                                                        .map((item, index) => { return <Link key={index} className="cardLink" to={cardPath + item.art}> <Card {...item} /> </Link> })
                                                }
                                            </div>
                                            <div className="catalogue-full-page__right-column-paginator">
                                                <ReactPaginate
                                                    previousLabel={"<"}
                                                    nextLabel={">"}
                                                    pageCount={pageCount}
                                                    onPageChange={changePage}
                                                    containerClassName={"paginationButtons"}
                                                    previousLinkClassName={"paginationPrevious"}
                                                    nextLinkClassName={"paginationNext"}
                                                    disabledClassName={"paginationEdge"}
                                                    onClick={() => window.scrollTo(0, 200)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="catalogue-full-page__recomended-goods-wrapper">
                        <div className="catalogue-full-page__recomended-goods-top-section">
                            <h3 className="catalogue-full-page__recomended-goods-title">Рекомендуемые товары</h3>
                            <div className="catalogue-full-page__recomended-goods-arrows">
                                <img src={ArrowSideImage} alt="arrow prev"
                                    className="catalogue-full-page__recomended-goods-prev-arrow catalogue-full-page__slider-arrow"
                                />
                                <img src={ArrowSideImage} alt="arrow next"
                                    className="catalogue-full-page__recomended-goods-next-arrow catalogue-full-page__slider-arrow"
                                />
                            </div>
                        </div>
                        <div className="catalogue-full-page__recomended-goods-slider">
                            <Swiper
                                key={12131567453}
                                name="recomended-goods-slider"
                                loop={true}
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={4}
                                slidesPerGroup={1}
                                speed={800}
                                navigation={{ nextEl: '.catalogue-full-page__recomended-goods-next-arrow', prevEl: '.catalogue-full-page__recomended-goods-prev-arrow' }}
                            >
                                {
                                    cardsToShow.map((item => {
                                        return (
                                            <SwiperSlide key={item.art}>
                                                <Link key={item.art + 10} className="cardLink" to={cardPath + item.art}> <Card {...item} /> </Link>
                                            </SwiperSlide>
                                        )
                                    }))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="catalogue-full-page__blog-wrapper">
                        <BlogSection />
                    </div>
                </div>
            </div >
            <BackCall />
        </div >
    )
}

export default CatalogueFull;