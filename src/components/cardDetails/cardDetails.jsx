import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/store/cartSlice";
import "./cardDetails.css";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "../common/starRating/starRating";
import InstallationTag from "../installationTag/installationTag";
import CostSecton from "../common/costSection/costSection";
import Accordion from "../common/accordion/accordion";
import BackCallForm from "../backCallForm/backCallForm";
import BlogSection from "../common/blogSection/blogSection";
import ProductSlider from "../common/productSlider/productSlider";
import Tabs from "../common/tabs/tabs";
import MarkedRow from "../common/markedRow/markedRow";
import { setLastChosenCategory } from "../../redux/store/sortingAndFiltering";
import ProductReviews from "./product-reviews/product-reviews";

function CardDetails() {
  const selectedCard = useSelector((state) => state.selectedCard.selectedCard);
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  document.title = `Интернет магазин дверных замков. ${selectedCard.name}`;

  React.useEffect(() => { dispatch(setLastChosenCategory("")) });

  let flag = false;
  for (let positionInCart of itemsInCart) {
    if (JSON.stringify(positionInCart.item) === JSON.stringify(selectedCard)) {
      flag = true;
      break;
    }
  }

  const [btnClassName, setBtnClassName] = React.useState(flag ? "card-details__add-to-cart-btn card-details__add-to-cart-btn_active" : "card-details__add-to-cart-btn")
  const [addToCartBtnName, setAddToCartBtnName] = React.useState(flag ? "В корзине" : "В корзину")

  const additionalInfo = [
    {
      title: "Оплата",
      content:
        "Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении",
    },
    {
      title: "Монтаж и доставка",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius ullam unde blanditiis totam distinctio illo quam quos nulla sint, quibusdam facere rerum eum impedit enim expedita inventore aperiam explicabo",
    },
    {
      title: "Гарантии и выгода",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius ullam unde blanditiis totam distinctio illo quam quos nulla sint, quibusdam facere rerum eum impedit enim expedita inventore aperiam explicabo",
    },
  ];

  let accordionList;

  function clearAllActiveAccordions() {
    accordionList = document.querySelectorAll(".accordion");
    accordionList.forEach((accordion) => {
      accordion.classList.remove("accordion_active");
    });
  }

  function addToCartHandler(e) {
    let inCart = false;
    e.stopPropagation();
    if (itemsInCart.length > 0) {
      for (let positionInCart of itemsInCart) {
        if (JSON.stringify(positionInCart.item) === JSON.stringify(selectedCard)) {
          inCart = true;
          break;
        }
      }
      if (inCart) {
        setAddToCartBtnName("В корзине");
        navigate("/Cart", { replace: true });
      }
      else {
        sendToCart()
      }
    }
    else {
      sendToCart();
    }
  }

  function sendToCart() {
    dispatch(addToCart({ item: selectedCard, quantity: 1 }))
    setAddToCartBtnName("В корзине")
    setBtnClassName('card-details__add-to-cart-btn card-details__add-to-cart-btn_active')
  }

  return (
    <div className="card-details__wrapper">
      <div className="card-details">
        <div className="card-details__inner">
          <div className="catalogue-full-page__nav-path">
            <Link to="/" className="catalogue-full-page__nav-path-link">
              Главная{" "}
            </Link>
            /
            <Link
              to="/Catalogue/CatalogueFull"
              className="catalogue-full-page__nav-path-link"
            >
              {" "}
              Каталог
            </Link>
            /{" "}
            <span className="catalogue-full-page__nav-path-link_active">
              {selectedCard.name}
            </span>
          </div>
          <div className="card-details__top-section">
            <div className="card-details__top-section-product-slider-wrapper">
              <ProductSlider images={selectedCard.pictures} />
            </div>
            <div className="card-details__top-section-description-wrapper">
              <div className="card-details__top-section-top-row">
                <div className="card-details__top-section-top-row-art">
                  {selectedCard.art}
                </div>
                <div className="card-details__top-section-top-row-rating">
                  <StarRating rating={selectedCard.rating} />
                </div>
                <div className="card-details__top-section-top-row-reviews">
                  ({selectedCard.reviews}) отзывов
                </div>
              </div>
              <div className="card-details__title">{selectedCard.name}</div>
              <div className="card-details__installation-for-wrapper">
                <p className="card-details__installation-for">
                  Подходит для установки на:
                </p>
                <div className="card-details__installation-for-tags-wrapper">
                  {selectedCard.installation.map((item, index) => {
                    return (
                      <InstallationTag key={index} installationTag={item} />
                    );
                  })}
                </div>
              </div>
              <div className="card-details__row-wrapper">
                <div className="card-details__row">
                  <p className="card-details__installation-for">Комплектация</p>
                  <select
                    name="complectation"
                    id="complectation"
                    className="card-details__complectation-select"
                  >
                    {selectedCard.features[
                      selectedCard.features.length - 1
                    ].map((item, index) => {
                      return index !== 0 ? (
                        <option key={index}>{item.toString()}</option>
                      ) : (
                        index
                      );
                    })}
                  </select>
                </div>
                <div className="card-details__row">
                  <p className="card-details__installation-for">Цвет</p>
                  <div className="card-details__available-colors-wrapper">
                    {selectedCard.color.map((item, index) => {
                      return (
                        <div
                          className="card-details__available-color"
                          style={{ background: `${item === "Черный" ? "black" : "white"}` }}
                          key={index}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="card-details__cost-section-wrapeer">
                <CostSecton cost={selectedCard.price} />
              </div>
              <div className="card-details__buy-button-wrapper" onClick={(e) => addToCartHandler(e)}>
                <button className={btnClassName}>
                  {addToCartBtnName}
                </button>
              </div>
              <div className="card-details__accordion-wrapper">
                {additionalInfo.map((item, index) => (
                  <div className="card-details__accordion-item-wrapper" onClick={() => clearAllActiveAccordions()} key={index}>
                    <Accordion
                      title={item.title}
                      content={item.content}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card-details__bottom-wrapper">
            <Tabs
              firstTab={
                <div className="card-details__bottom-content">
                  <div className="card-details__bottom-content-features-wrapper">
                    {selectedCard.features.map((feature, index) => {
                      return (
                        <div
                          className="card-details__bottom-content-feature-row"
                          key={index}
                        >
                          <div className="card-details__bottom-content-feature-row-title">
                            {feature[0]}
                          </div>
                          <div className="card-details__bottom-content-feature-row-value">
                            {feature[1]}
                            {feature[2] ? `, ${feature[2]}` : ""}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              }
              secondTab={
                <div className="card-details__description-wrapper">
                  <p className="card-details__description">
                    {selectedCard.description}
                  </p>
                  <span className="card-details__description-subtitle">
                    Приемущества товара:
                  </span>
                  <div className="card-details__description-advantages-wrapper">
                    {selectedCard.advantages.map((item, index) => {
                      return (
                        <div className="card-details__description-advantages-item-wrapper" key={index + 123}>
                          <MarkedRow text={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              }
              thirdTab={
              <div className="card-details__reviews-wrapper">
                <ProductReviews />
              </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="card-details__blog-section-wrapper">
        <BlogSection />
      </div>
      <div className="card-details__back-call-wrapper">
        <BackCallForm />
      </div>
    </div>
  );
}

export default CardDetails;