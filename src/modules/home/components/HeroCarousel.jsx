import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import styles from "./HeroCarousel.module.css";
import { heroSlides } from "../../../data/heroData";

export default function HeroCarousel() {
  return (
    <div className={styles.heroCarousel}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        speed={1500}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContainer}>
              <img
                className={styles.slideBg}
                src={slide.image}
                alt={slide.title}
              />

              <div className={styles.overlay} />

              <div className={styles.bottomFade} />

              <div className={styles.slideContent}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.desc}>{slide.description}</p>
                <button className={styles.cta}>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
