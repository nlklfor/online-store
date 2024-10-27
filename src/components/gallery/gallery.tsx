import './gallery.scss'
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'

function Gallery() {

    const ourGallery = [gallery1, gallery2, gallery3, gallery4];
    return (
        <>
            <section className={'section-gallery'}>
                <h3 className={'gallery-title'}>Our social</h3>
                <ul className={'gallery-list'}>
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={3}
                        freeMode={true}
                        mousewheel={true}
                        modules={[FreeMode, Mousewheel]}
                        className="mySwiper"
                    >
                        {/* {
                            ourGallery.map((photo, index) => {
                                return (
                                    <SwiperSlide>
                                        <li className={'galley-item'}><img width={600} height={350} src={photo} key={index} alt={`gallery-photo${index}`} /></li>
                                    </SwiperSlide>
                                )
                            })
                        } */}
                    </Swiper>
                </ul>
            </section>
        </>
    )
}

export default Gallery;