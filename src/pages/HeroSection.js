import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import AppDownloadSection from "../component/AppDownloadSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import AmazonStyleGrid from "../component/AmazonView";
// import AmazonCategorySearch from "../component/AmazonCategorySearch";
import Secondimage from "../component/Secondimage";
import FeatureSection from "../component/Features";
import SecondSection from "../component/SecondSection";
import BannerSlider from "../component/BannerSlider";

// const slides = [
//   "/homeimg/HERO-IMG-1.png",
//   "/homeimg/HERO-IMG-2.png",
//   "/homeimg/HERO-IMG-3.png",
//   "/homeimg/HERO-IMG-4.png",
// ];


const slides = [
  "/images/Variant1.png",
  "/images/Variant2.png",
  "/images/Variant3.png",
  "/images/Variant4.png",
];

const handleClick = () => {
  alert("Coming Soon!");
};

const HeroSection = () => {
  return (
    <Box sx={{mx:'20px'}}>
    
<BannerSlider/>
<SecondSection/>

<FeatureSection/>


     
     <Secondimage/>
      <AppDownloadSection />
    </Box>
  );
};

export default HeroSection;
