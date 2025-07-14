import iceLand from '../assets/iceland.jpg'
import amazon from '../assets/amazon.webp'
import underWater from '../assets/underwater.avif'

const HomePage = () => {
    return (
        <div className=''>
            <div className="carousel py-5">
                <div id="slide1" className="carousel-item relative w-full h-[400px]">
                    <img
                        src={iceLand}
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[400px]">
                    <img
                        src={amazon}
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[400px]">
                    <img
                        src={underWater}
                        className="w-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HomePage;