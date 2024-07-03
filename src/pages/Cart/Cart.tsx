import {observer} from "mobx-react-lite";
import {useCartStore} from "../../stores/CartStore";
import './Cart.scss';
import Root from "../../Routes/Root.tsx";
import {Link} from "react-router-dom";

const Cart = observer(() => {
    const cartStore = useCartStore();

    const handleRemoveFromCart = (itemId: string) => {
        cartStore.removeFromCart(itemId);
    };

    // const handleCheckout = () => {
    //     cartStore.checkout();
    // };

    return (
        <Root>
            <div className="cart">
                <h2>Your Cart</h2>
                {cartStore.cartItems.length > 0 ? (
                    <div>
                        {cartStore.cartItems.map(item => (
                            <div key={item._id} className="cart-item">
                                <img src={item.img_url[0]} alt={item.title}/>
                                <div className="item-details">
                                    <p>{item.title}</p>
                                    <p>{item.price} {item.currency}</p>
                                    <p>{item.size}EU SIZE</p>
                                    <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <Link to={'/checkout'}>
                            <button>Checkout</button>
                        </Link>

                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </Root>
    );
});

export default Cart;
