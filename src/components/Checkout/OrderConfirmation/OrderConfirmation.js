import styles from "./OrderConfirmation.module.css";

export const OrderConfirmation = ({
                                        completeOrder
                                  }) => {
    return (
        <div className={styles.orderConfirmation}>
            <h1>Congratulations!</h1>
            <h2>Your order it’s on its way.</h2>
            <button onClick={completeOrder}>Ok</button>
        </div>
    )
}