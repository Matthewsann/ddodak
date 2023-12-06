"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className="w-full aspect-[375/105]"
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="w-full h-full bg-[url(https://images.unsplash.com/photo-1701657130003-fbdb40fd611a)] bg-cover bg-center"></SwiperSlide>
      <SwiperSlide className="w-full h-full bg-[url(https://plus.unsplash.com/premium_photo-1701760275641-e60a89edad6a)] bg-cover bg-center"></SwiperSlide>
    </Swiper>
  );
}
