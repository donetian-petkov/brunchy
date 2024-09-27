import styles from "../Checkout.module.css";

export const OrderConfirmation = ({
                                        completeOrder
                                  }) => {
    return (
        <div className={styles.order}>
            <h1>Congratulations</h1>
            <h2>Your order it’s on its way.</h2>
            <button onClick={completeOrder}>Ok</button>
        </div>
    )
}