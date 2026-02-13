import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useUI } from "@contexts/UIContext";

import Card from "@ui/ContentCard";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./ContentRow.module.css";
import { animes } from "@/data/animeData";

export default function ContentRow({ onCardClick }) {
  const { openModal } = useUI();
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        className={styles.swiper}
      >
        {animes.map((anime) => (
          <SwiperSlide
            key={anime.id}
            className={styles.slide}
            style={{ width: "180px" }}
          >
            <Card
              image={anime.image}
              title={anime.title}
              onCardClick={() => openModal("animeDetail", anime)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
