"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image array
const slides = [
  {
    img: "/sliderimg/slider1image.png",
    title: "Dubai Shopping, Between Your Hands",
    content:
      "Explore Dubai’s best deals with full transparency and fast delivery now you can shop smarter, safer, and easier from anywhere. Every order, tracked. Every fee, shown. Every product, worth it.",
    textColor: "#374d91",
  },
  {
    img: "/sliderimg/slider2image.png", // ensure it's a valid image path
    title: "No Hidden Fees. Ever",
    content:
      "We show you the exact price including shipping, so you can make confident decisions no hidden fees guaranteed",
          textColor: "#374d91",
  },
  {
    img: "/sliderimg/slider3image.png",
    title: "Your Favorite Brands Delivered Home",
    content:
      "From sneakers to smart tech order straight from top American stores and get it delivered to your door in Lebanon.",
          textColor: "#374d91",
  },
  {
    img: "/sliderimg//slider4image.png",
    title: "Track Your Order Instantly",
    content:"Stay updated every step of the way. From checkout to delivery, know exactly where your package is and when it arrives  in real time.",
        textColor: "#f7ef6d",
  },
];

const BannerSlider = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <Box
                component="img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: "600px" },
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "10%", md: "10%" },
                    left: { xs: "0%", md: "0%" },
                  maxWidth: { xs: "45%", md: "40%" },
                  color: "#fff",
                   marginLeft:{xs:"10px",sm:'50px'},
                  borderRadius: 2,
                  textAlign:'left',
                
                }}
              >
                <Typography variant="h1" sx={{fontSize:{xs:"17px",md:"60px"},fontWeight:{xs:700,sm:900,color:slide.textColor}}}> 
                  {slide.title}
                </Typography>
                <Typography variant="body1" sx={{fontSize:{xs:"12px",md:"22px"},color:"#ocococ",lineHeight:{xs:"18px",sm:"35px"},marginTop:{xs:"3px",sm:"20px"}}}>{slide.content}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BannerSlider;
