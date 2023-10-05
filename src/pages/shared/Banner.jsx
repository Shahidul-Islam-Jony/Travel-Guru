import banner from "../../assets/images/coxBazar.png"

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen z-10 absolute top-0" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
            </div>
        </div>
    );
};

export default Banner;