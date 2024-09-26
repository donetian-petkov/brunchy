import styles from './MenuItem.module.sass';

export const MenuItem = ({item}) => {

    return (
        <div className={styles.product}>
            <div className={styles.productDescr}>
                <h2>{item.name}</h2>
                <h3>{item.caption}</h3>
                <h4>$ {item.price}</h4>
            </div>
            <button className={styles.productBasket}>
                <img src='/images/basket.png' alt="basket"/>
            </button>
        </div>
    )
}