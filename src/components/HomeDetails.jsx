
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { HomeDataContext } from './HomePage';
import { Link } from 'react-router';

const HomeDetails = () => {
    const { adventureData } = useContext(HomeDataContext);
    return (
        <div className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-8 text-start">Features: </h2>

            <Swiper
                modules={[Virtual, Navigation, Autoplay]}
                slidesPerView={2}
                spaceBetween={60}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation
                virtual
                className="max-w-4xl mx-auto"
            >
                {adventureData.map((data, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-lg hover:shadow-lg transition-all duration-300 flex flex-col">
                            <img
                                src={data.image}
                                alt={data.adventureTitle}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{data.adventureTitle}</h3>
                                <ul className="text-sm text-gray-600 flex-1">
                                    {data.ecoFriendlyFeatures?.map((feature, index) => (
                                        <li key={index}>🌱 {feature}</li>
                                    ))}
                                </ul>
                                <Link className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" to={`/explore/${data.id}`}>
                                    <button >Explore Now</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
};

export default HomeDetails;
