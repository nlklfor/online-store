import Root from "../../Routes/Root";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import './item.scss';
import fav from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import '../../styles/bundle.scss'
import {itemStore} from "../../stores/ItemsStore";
import {useCartStore} from "../../stores/CartStore";
import {Item as ItemType} from "../../stores/ItemsStore.ts";
import {useAuthStore} from "../../stores/AuthStoreContext.tsx";
import Toast from "../../components/toast/toast.tsx";

const Item = observer(() => {
    const {itemId} = useParams();
    const [selectedSize, setSelectedSize] = useState<number | null>(null); // Ensure size is a number
    const [quantity, setQuantity] = useState(1)
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; } | null>(null);
    const cartStore = useCartStore();
    const authStore = useAuthStore();

    useEffect(() => {
        if (itemId) {
            itemStore.getItemById(itemId);
        }
    }, [itemId]);

    const item = itemStore.items.find((item: ItemType) => item._id === itemId);

    if (!item) {
        return (
            <Root>
                <section className={'section-item'}>
                    <div className={'item-info'}>
                        <p>Item not found.</p>
                    </div>
                </section>
            </Root>
        );
    }

    const handleAddToCart = async () => {
        if (selectedSize !== null) { // Checking if a size is selected
            await cartStore.addToCart({...item, size: [selectedSize], amount: quantity});
        } else {
            showToast('Please select your size', "error");
        }

    };

    const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setQuantity(value)
    }

    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
        setToast({message, type});
    };

    const handleAddToWishlist = async () => {
        await cartStore.addToWishlist(item);
    };

    return (
        <>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)}/>}
            {!itemStore.isLoading ? (
                <Root>
                    <section className={'section-item'}>
                        <div className={'item-photo'}>
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {item.img_url.map((url, index) => (
                                    <SwiperSlide key={index}><img src={url} alt={'item-photo'}/></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={'item-info'}>
                            <div className={'item-desc'}>
                                <p className={'item-brand'}>{item.brand}</p>
                                <p className={'item-title'}>{item.title}</p>
                                <p className={'item-sex'}>{item.gender}</p>
                                <p className={'item-price'}>{item.price + " " + item.currency}</p>
                            </div>
                            <div className={'item-size'}>
                                <p className={'size-title'}>Choose your size</p>
                                {item.size.map((size) => (
                                    <button key={size} onClick={() => setSelectedSize(size)}>{size}</button>
                                ))}
                            </div>
                            <div className={'item-amount'}>
                                <p className={'amount-title'}>Amount of products</p>
                                <input type={"number"} onChange={onChangeQuantity} value={quantity} id="quantity" name="quantity" min="1" max="10"/>
                            </div>
                            <div className={'item-btns'}>
                                {authStore.isAuth ? (
                                    <button className={'btn-cart'} onClick={handleAddToCart}>Add to cart<img src={cart}
                                                                                                             alt={'cart'}/>
                                    </button>) : (
                                    <button className={'btn-cart'}
                                            style={{cursor: 'not-allowed'}}>Add to cart<img src={cart}
                                                                                            alt={'cart'}/>
                                    </button>)}
                                {authStore.isAuth ? (
                                    <button className={'btn-fav'} onClick={handleAddToWishlist}>Add to favourite<img
                                        src={fav} alt={'favourite'}/></button>) : (
                                    <button className={'btn-fav'}
                                            style={{cursor: 'not-allowed'}}>Add to favourite<img
                                        src={fav} alt={'favourite'}/></button>)}


                            </div>
                        </div>
                    </section>
                </Root>
            ) : <h2>LOADING...</h2>}
        </>
    );
});

export default Item;
