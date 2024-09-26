export const MenuItem = ({item}) => {

    return (
        <div>
            <img src={`/images/${item.image}.png`} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.caption}</p>
            <p>$ {item.price}</p>
            <img src='/images/basket.png' alt="basket"/>
        </div>
    )
}