"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smart watch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image, idx) => (
          <CardContainer className="inter-var cursor-pointer" key={idx}>
            <CardBody className="">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={image.imgUrl}
                  alt={image.alt}
                  width={484}
                  height={484}
                  key={image.alt}
                  className="object-contain rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </Carousel>
      <Image
        src={"assets/icons/hand-drawn-arrow.svg"}
        alt="arrow"
        width={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0 "
        height={175}
      />
    </div>
  );
};

export default HeroCarousel;
