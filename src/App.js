import logo from './logo.svg';
import './App.scss';
import {Hero} from "./components/Hero/Hero";
import {Header} from "./components/Header/Header";
import {MenuList} from "./components/MenuList/MenuList";
import {Cart} from "./components/Cart/Cart";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);

    return (
        <div className="App">
            <Header/>
            <Hero/>
            <MenuList setCart={setCart}/>
            <Cart cart={cart}/>
        </div>
    );
}

export default App;
