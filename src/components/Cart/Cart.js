import styles from './Cart.module.sass';

export const Cart = ({
    cart
                     }) => {

    return (
        <div className={styles.cart}>
            <img src='/images/basket.png' alt="basket"/>
            <h1>0.00$</h1>
            <button>Order Now</button>
        </div>
    )

}