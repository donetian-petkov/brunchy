import styles from './Cart.module.sass';
import {Checkout} from "../Checkout/Checkout";
import {useState} from "react";
import {CartMenu} from "./CartMenu/CartMenu";

export const Cart = ({
                         cart,
                         isCheckout,
                         setIsCheckout,
                         setCart,
                         isOrdered,
                         setIsOrdered
                     }) => {

    const order = () => {
        setIsCheckout(true);
        setIsOrdered(true);
        setCart([]);
    }

    return (
        <div className={styles.cart}>
            {
                isCheckout &&
                <Checkout isOrdered={isOrdered}
                          cart={cart}
                          setIsOrdered={setIsOrdered}
                          setIsCheckout={setIsCheckout}
                />
            }
            <CartMenu
                cart={cart}
                setIsCheckout={setIsCheckout}
                order={order}
            />
        </div>
    )

}