import styles from './MenuItem.module.sass';

export const MenuItem = ({
    item,
    setCart
                         }) => {


    const addProduct = (e) => {

        e.preventDefault();

        setCart((prev) => {
            return [...prev, item]
        })

    }

    return (
        <div className={styles.product}>
            <div className={styles.productDescr}>
                <h2>{item.name}</h2>
                <h3>{item.caption}</h3>
                <h4><span>$</span> {item.price.toFixed(2)}</h4>
            </div>
            <button onClick={addProduct} className={styles.productBasket}>
                <img src='/images/basket.png' alt="basket"/>
            </button>
        </div>
    )
}