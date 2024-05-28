import Root from "../../Routes/Root";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import './item.scss'
import fav from '../../assets/star.svg'
import cart from '../../assets/cart.svg'
import {items} from "../../../public/db/items";
import {useParams} from "react-router-dom";

function Item() {

    const {itemId} = useParams();
    const item = items.find((item) => item.id === itemId);

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

    return (
        <Root>
            <section className={'section-item'}>
                <div className={'item-photo'}>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={item.img_url[0]} alt={'item-photo'}/></SwiperSlide>
                        <SwiperSlide><img src={item.img_url[1]} alt={'item-photo'}/></SwiperSlide>
                        <SwiperSlide><img src={item.img_url[2]} alt={'item-photo'}/></SwiperSlide>
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
                            <button key={size}>{size}</button>
                        ))}
                    </div>
                    <div className={'item-btns'}>
                        <button className={'btn-cart'}>Add to cart<img src={cart} alt={'favourite'}/></button>
                        <button className={'btn-fav'}>Add to favourite<img src={fav} alt={'favourite'}/></button>
                    </div>
                </div>
            </section>
        </Root>
    )
}

export default Item