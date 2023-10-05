import Banner from "../shared/Banner";
import Navbar from "../shared/Navbar";
import sundorban from "../../assets/images/sundorbon.png"
import coxBazar from "../../assets/images/coxBazar.png"
import Bandorban from "../../assets/images/Bandorban.jpg"
import sremongol from "../../assets/images/sremongol.jpg"

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="z-40 relative flex justify-between">
                <div>
                    <p className="text-6xl text-white">Hello</p>
                </div>
                <div className="border w-1/2">
                    <div className="carousel w-full border-4 border-red-500 rounded-lg">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={coxBazar} className="h-96 w-1/2" />
                            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div> */}
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={sundorban} className="h-96 w-1/2" />
                            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div> */}
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={Bandorban} className="h-96 w-1/2" />
                            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div> */}
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={sremongol} className="h-96 w-1/2" />
                            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="absolute transform -translate-y-1/2 -bottom-20">
                        <a href="#slide2" className="btn btn-circle mr-6">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;