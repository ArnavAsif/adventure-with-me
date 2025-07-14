import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { useContext } from 'react';
import { HomeDataContext } from './HomePage';
const HomeDetails = () => {

    const { adventureData } = useContext(HomeDataContext);
    console.log(adventureData)

    return (
        <div className="py-12 px-4">
            <h2 className="text-3xl text-center mb-8">Creative Slider</h2>

            <Swiper
                effect="creative"
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
                className="max-w-md mx-auto"
            >
                {
                    adventureData.map(data => <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={data.image}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.adventureTitle}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

                {/* <SwiperSlide>
                    <div className="bg-green-900 p-16 rounded-xl text-center">Slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-900 p-16 rounded-xl text-center">Slide 3</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-teal-900 p-16 rounded-xl text-center">Slide 4</div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default HomeDetails;