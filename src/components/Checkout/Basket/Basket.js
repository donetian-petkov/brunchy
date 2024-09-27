import styles from "./Basket.module.css";

export const Basket = ({
                            cart,
                            totalPrice
                       }) => {
    return (
        <div className={styles.basket}>
            {
                cart && cart.map(item => {
                    return (
                        <div className={styles.basketItem}>
                            <h1>{item.name}</h1> <span>$</span> {item.price.toFixed(2)}
                        </div>
                    )
                })
            }
            <hr/>
            <div className={styles.totalPrice}>
                <h1>Total:</h1> <span>$</span>{totalPrice.toFixed(2)}
            </div>
        </div>
    )
}