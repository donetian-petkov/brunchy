import logo from './logo.svg';
import './App.scss';
import {Hero} from "./components/Hero/Hero";
import {Header} from "./components/Header/Header";
import {MenuList} from "./components/MenuList/MenuList";
import {Cart} from "./components/Cart/Cart";
import {useState} from "react";
import {Checkout} from "./components/Checkout/Checkout";
import {WithBlurEffect, withBlurEffect} from "./hoc/WithBlurEffect";

function App() {

    const [cart, setCart] = useState([]);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isOrdered, setIsOrdered] = useState(false);

    return (
        <div className="App">
            <WithBlurEffect
                isCheckout={isCheckout}
                setIsCheckout={setIsCheckout}
                setIsOrdered={setIsOrdered}
            >
                <Header/>
                <Hero/>
                <MenuList setCart={setCart}
                />
            </WithBlurEffect>
            <Cart
                  isCheckout={isCheckout}
                  cart={cart}
                  setIsCheckout={setIsCheckout}
                  setCart={setCart}
                  isOrdered={isOrdered}
                  setIsOrdered={setIsOrdered}
            />

        </div>
    );
}

export default App;
