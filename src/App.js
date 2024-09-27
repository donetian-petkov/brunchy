import logo from './logo.svg';
import './App.scss';
import {Hero} from "./components/Hero/Hero";
import {Header} from "./components/Header/Header";
import {MenuList} from "./components/MenuList/MenuList";
import {Cart} from "./components/Cart/Cart";
import {useState} from "react";
import {Checkout} from "./components/Checkout/Checkout";
import {CheckoutProcess} from "./hoc/CheckoutProcess";

function App() {

    const [cart, setCart] = useState([]);
    const [isCheckout, setIsCheckout] = useState(false);

    return (
        <div className="App">
            <CheckoutProcess isCheckout={isCheckout} setIsCheckout={setIsCheckout}>
                <Header/>
                <Hero/>
                <MenuList setCart={setCart}/>
            </CheckoutProcess>
            <Cart cart={cart} setIsCheckout={setIsCheckout}/>
            {isCheckout && <Checkout cart={cart}/>}
        </div>
    );
}

export default App;
