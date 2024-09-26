import logo from './logo.svg';
import './App.scss';
import {Hero} from "./components/Hero/Hero";
import {Header} from "./components/Header/Header";
import {MenuList} from "./components/MenuList/MenuList";
import {Cart} from "./components/Cart/Cart";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <MenuList/>
            <Cart/>
        </div>
    );
}

export default App;
