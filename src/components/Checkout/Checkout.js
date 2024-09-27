import style from './Checkout.module.css';

export const Checkout = (
    {
        cart
    }
) => {
    return (
        <div className={style.checkout}>
            {
                cart && cart.map(item => {
                    return (
                        <p>{item.name} {item.price}</p>
                    )
                })
            }
            <hr/>
            <h2>Total: {cart.reduce((acc, item) => acc + item.price, 0)}</h2>
        </div>
    );
}