import '../../styles/cartItem.css';

const CartItem = ({ item }) => {
    return(
        <>
        <div className="cart-item">
            <h3>{item.name}</h3>
            <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
            <p>Quantity: {item.quantity}</p>
            </div>
        </div>
        </>
    )
};

export default CartItem;