import styles from './Cart.module.sass';

export const Cart = ({
    cart,
    setIsCheckout
                     }) => {

    return (
        <div className={styles.cart}>
            <img src='/images/basket.png' alt="basket"/>
            <h1>{cart.reduce((acc, item) => acc + item.price, 0)}$</h1>
            <button onClick={() => setIsCheckout(true)}>Order Now</button>
        </div>
    )

}