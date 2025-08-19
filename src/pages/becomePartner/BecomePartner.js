import React from "react";
import { Typography, Button } from "@mui/material";
import { Box,} from "@mui/system";
import FeatureSection from "./FeatureSection";
// import FirstCard from "./FirstCard";
// import Second from "./SecondCard";
// import ThirdCard from "./ThirdCard";
// import ForthCard from "./FourthCard";
// import FifthCard from "./FifthCard";
import { Link } from "react-router-dom";

import Handsake from "../../component/Handsake";

const BecomePartner = () => {
  return (
    <>
      <Box container spacing={2} sx={{ padding: "20px" }}>
        <img
          src="/img1/Hero.png"
          alt="Download on the App Store"
          width="100%"
          height="100%"

          style={{
            cursor: "pointer",
            maxHeight: "500px", // ✅ Limit max height
            width: "100%",
          }}
       
        />
      </Box>

      <Box sx={{ padding: { xs: "20px", sm: "50px", md: "50px" } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "28px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "0px" },
            color:'#1B1D4D'
          }}
        >
          Partner with Us
        </Typography>
        <Typography sx={{ color: "black", mt: "10px", textAlign: "left", lineHeight: "25px", fontSize: { xs: "14px", sm: "18px" } }}>
           Join us in revolutionizing the Lebanese market by becoming a valued partner! Our platform bridges the gap between the UAE and Lebanon, offering customers access to a curated selection of products from Dubai’s top retailers. By partnering with us, you’ll gain exposure to a growing audience in Lebanon, seamless logistics for cross-border shipping, and a collaborative approach to expanding your reach. Together, we can bring the best of the UAE to Lebanon while creating new opportunities for growth and success. Let’s build something extraordinary—partner with us today!
        </Typography>

        <Link to="/contact">
          <Button variant="contained" sx={{ marginTop: 2, bgcolor: "#374d91" }}>
            Get Started
          </Button>
        </Link>



        
<Handsake/>
        <FeatureSection />
        {/* <PartnerSection /> */}

        {/* <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", sm: "34px" },
              fontWeight: 600,
              mt: { xs: "30px", sm: "0px" },
            }}
          >
            What our partners say
          </Typography>
          <FirstCard />
          <Second />
          <ThirdCard />
          <ForthCard />
          <FifthCard />
        </Box> */}
      </Box>
    </>
  );
};

export default BecomePartner;
