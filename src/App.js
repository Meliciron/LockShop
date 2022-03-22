import React from 'react';
import './reset.css';
import './App.css';
import { useDispatch} from 'react-redux';
import { fetchLocks } from './redux/store/getLocks'
import { Route, Routes } from 'react-router-dom';
import Wholesale from './components/wholesale/wholesale';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/mainPage/mainPage';
import Catalogue from './components/catalogue/calatolgue'
import CatalogueFull from './components/catalogueFull/catalogueFull';
import CardDetails from './components/cardDetails/cardDetails';
import AboutUs from './components/aboutUs/aboutUs';
import DeliveryPage from './components/deliveryPage/deliveryPage';
import CartPage from './components/cartPage/cartPage';
import CheckoutPage from './components/checkoutPage/checkoutPage';
import NotFoundedPage from "./components/notFoundedPage/notFoundedPage";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchLocks());
  }, [dispatch]);

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Catalogue/CatalogueFull" element={<CatalogueFull  />} />
          <Route path="/Wholesale" element={<Wholesale />} />
          <Route path="/Catalogue/CatalogueFull/CardDetails/:art" element={<CardDetails/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Delivery" element={<DeliveryPage />} />
          <Route path="/Cart" element={<CartPage/>}/>
          <Route path="/Checkout" element={<CheckoutPage/>}/>
          <Route path="*" element={<NotFoundedPage/>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;