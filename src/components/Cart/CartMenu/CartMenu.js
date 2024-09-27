import styles from "./CartMenu.module.sass";

export const CartMenu = (
    {
        cart,
        order,
        setIsCheckout
    }
) => {

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <button onClick={() => setIsCheckout(true)}>
                <img src='/images/basket.png' alt="basket"/>
            </button>
            <h1>${totalPrice.toFixed(2)}</h1>
            <button className={styles.orderButton} onClick={order}>Order Now</button>
        </>
    );
}