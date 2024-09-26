import styles from './MenuItem.module.sass';

export const MenuItem = ({item}) => {

    return (
        <div className={styles.product}>
            <div className={styles.productDescr}>
                <h2>{item.name}</h2>
                <p>{item.caption}</p>
                <p>$ {item.price}</p>
            </div>
            <img src='/images/basket.png' alt="basket"/>
        </div>
    )
}