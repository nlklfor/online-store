import {observer} from "mobx-react-lite";
import {useCartStore} from "../../stores/CartStore";
import './Wishlist.scss';
import Root from "../../Routes/Root.tsx";

const Wishlist = observer(() => {
    const cartStore = useCartStore();

    const handleRemoveFromWishlist = (itemId: string) => {
        cartStore.removeFromWishlist(itemId);
    };

    return (
        <Root>
            <div className="wishlist">
                <h2>Your Wishlist</h2>
                {cartStore.wishlistItems.length > 0 ? (
                    <div>
                        {cartStore.wishlistItems.map(item => (
                            <div key={item._id} className="wishlist-item">
                                <img src={item.img_url[0]} alt={item.title}/>
                                <div className="item-details">
                                    <p>{item.title}</p>
                                    <p>{item.price} {item.currency}</p>
                                    <button onClick={() => handleRemoveFromWishlist(item._id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </div>
        </Root>
    );
});

export default Wishlist;
