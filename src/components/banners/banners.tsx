import './banners.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
// import bannerSlider1 from '../../assets/banner-slider1.jpeg'
// import bannerSlider2 from '../../assets/banner-slider2.jpeg'
import bannerSlider3 from '../../assets/banner-slider3.jpeg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

function Banners() {
    return (
        <>
            <section className={'section-banners'}>
                <figure className={'banner-figure a'}>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={bannerSlider3} alt={'bannerSlider1'}/></SwiperSlide>
                        <SwiperSlide><img src={bannerSlider3} alt={'bannerSlider2'}/></SwiperSlide>
                        <SwiperSlide><img src={bannerSlider3} alt={'bannerSlider3'}/></SwiperSlide>
                    </Swiper>
                </figure>
                <figure className={'banner-figure b'}>
                    <img id={'banner2'} src={banner2} alt={'banner2'}/>
                </figure>
                <figure className={'banner-figure c'}>
                    <img id={'banner3'} src={banner3} alt={'banner3'}/>
                </figure>
            </section>
        </>
    )
}

export default Banners;