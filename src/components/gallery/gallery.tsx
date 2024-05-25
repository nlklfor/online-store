import './gallery.scss'
import {FreeMode, Mousewheel} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'

function Gallery() {
    return (
        <>
            <section className={'section-gallery'}>
                <h3 className={'gallery-title'}>Our photos</h3>
                <ul className={'gallery-list'}>
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={3}
                        freeMode={true}
                        mousewheel={true}
                        modules={[FreeMode, Mousewheel]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <li className={'galley-item'}><img src={gallery1} alt="gallery-photo1"/></li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className={'galley-item'}><img src={gallery2} alt="gallery-photo2"/></li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className={'galley-item'}><img src={gallery3} alt="gallery-photo3"/></li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li className={'galley-item'}><img src={gallery4} alt="gallery-photo3"/></li>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </section>
        </>
    )
}

export default Gallery;