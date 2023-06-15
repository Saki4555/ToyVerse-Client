import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Pagination, Navigation } from 'swiper';
import HomeSlider from './Homeslider';

import slide1 from '../../../assets/Home/banner-1.png'
import slide2 from '../../../assets/Gallery/g-6.jpg'
import slide4 from '../../../assets/Gallery/g-1.jpg'

const HomeBanner = () => {
    return (
        <>
            <div className='pt-[70px]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HomeSlider img={slide1}></HomeSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeSlider img={slide2}></HomeSlider>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeSlider img={slide4}></HomeSlider>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default HomeBanner;