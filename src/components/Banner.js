import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                <div className="">
                    {/* <Image src="https://links.papareact.com/gi1" alt="carousle-img" /> */}
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="carousle-img" />
                </div>
                <div className="">
                    {/* <Image src="https://links.papareact.com/6ff" alt="carousle-img" /> */}
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="carousle-img" />
                </div>
                <div className="">
                    {/* <Image src="https://links.papareact.com/7ma" alt="carousle-img" /> */}
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="carousle-img" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner;
