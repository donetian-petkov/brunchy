import styles from './Checkout.module.css';
import {Basket} from "./Basket/Basket";
import {OrderConfirmation} from "./OrderConfirmation/OrderConfirmation";

export const Checkout = (
    {
        cart,
        isOrdered,
        setIsOrdered,
        setIsCheckout
    }
) => {

    const completeOrder = () => {
        setIsOrdered(false);
        setIsCheckout(false);
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={styles.checkout}>

            {!isOrdered &&
               <Basket cart={cart} totalPrice={totalPrice}/>
            }

            {
                isOrdered && <OrderConfirmation completeOrder={completeOrder}/>
            }
        </div>
    );
}