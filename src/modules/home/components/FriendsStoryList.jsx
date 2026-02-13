import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useUI } from "@contexts/UIContext";

import CircleProfile from "./CircleProfile";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./FriendsStoryList.module.css";
import { profiles } from "@/data/profiles";

export default function FriendsStoryList() {
  const { openModal } = useUI();
  const showNavigation = profiles.length > 6;

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation={showNavigation}
        loop={showNavigation}
        grabCursor
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={false}
        className={styles.swiper}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id} className={styles.slide}>
            <CircleProfile
              avatar={profile.avatar}
              title={profile.name}
              color={profile.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
