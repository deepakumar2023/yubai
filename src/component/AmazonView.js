import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const sections = [
  {
    title: "Revamp your home in style",
    items: [
      { label: "Cushion covers, bedsheets & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
      { label: "Figurines, vases & more", img:'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg' },
      { label: "Home storage", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
      { label: "Lighting solutions", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" },
    ],
    action: "Explore all",
  },
  {
    title: "400+ New Launches | Prime Day | 12 - 14 July",
    items: [
      { label: "", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/PrimeDay25/PD25_PC_CC_1x._SY304_CB791462669_.jpg" },
    ],
    action: "See all offers",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { label: "Air conditioners", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
      { label: "Refrigerators", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
      { label: "Microwaves", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
      { label: "Washing machines", img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" },
    ],
    action: "See more",
  },
  {
    title: "PlayStation 5 Slim & Accessories | No Cost EMI*",
    items: [
      { label: "PS5 Slim digital edition", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/VG/Nanditha/BI/QC-4--1x._SY116_CB793233792_.jpg" },
      { label: "PS5 Slim disc edition", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/VG/Nanditha/BI/QC-3--1x._SY116_CB793233792_.jpg" },
      { label: "PS5 Slim Fortnite digital edition", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/VG/Nanditha/BI/QC-1--1x._SY116_CB793233792_.jpg" },
      { label: "PS5 DualSense Wireless Controller", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/VG/Nanditha/BI/QC-6--1x._SY116_CB793243872_.jpg" },
    ],
    action: "See all deals",
  },
  {
    title: "Under ₹499 | Deals on home improvement essentials",
    items: [
      { label: "Under ₹199 | Cleaning supplies", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Under ₹399 | Bathroom accessories", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Under ₹499 | Home tools", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" },
      { label: "Under ₹199 | Wallpapers", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" },
    ],
    action: "Explore all",
  },
  {
    title: "Starting ₹149 | Headphones",
    items: [
      { label: "Starting ₹249 | boAt", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" },
      { label: "Starting ₹349 | boult", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" },
      { label: "Starting ₹649 | Noise", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" },
      { label: "Starting ₹149 | Zebronics", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" },
    ],
    action: "See all offers",
  },
  {
    title: "Automotive essentials | Up to 60% off",
    items: [
      { label: "Cleaning accessories", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" },
      { label: "Tyre & rim care", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" },
      { label: "Helmets", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" },
      { label: "Vacuum cleaner", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" },
    ],
    action: "See more",
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    items: [
      { label: "Starting ₹199 | Bedsheets", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" },
      { label: "Starting ₹199 | Curtains", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" },
      { label: "Minimum 40% off | Ironing board & more", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" },
      { label: "Up to 60% off | Home decor", img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" },
    ],
    action: "See more",
  },
];

const AmazonStyleGrid = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {sections.map((section, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {section.title}
                </Typography>
                <Grid container spacing={1}>
                  {section.items.length === 1 ? (
                    // Full width single image
                    <Grid item xs={12}>
                      <Card sx={{ boxShadow: "none" }}>
                        <CardMedia
                          component="img"
                          image={section.items[0].img}
                          alt={section.items[0].label}
                          sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 1,
                          }}
                        />
                        {section.items[0].label && (
                          <Typography variant="body2" mt={1}>
                            {section.items[0].label}
                          </Typography>
                        )}
                      </Card>
                    </Grid>
                  ) : (
                    // 2-column grid for multiple images
                    section.items.map((item, i) => (
                      <Grid item xs={6} key={i}>
                        <Card sx={{ boxShadow: "none" }}>
                          <CardMedia
                            component="img"
                            image={item.img}
                            alt={item.label}
                            sx={{
                              width: "100%",
                              height: "auto",
                              borderRadius: 1,
                            }}
                          />
                          <Typography variant="body2">{item.label}</Typography>
                        </Card>
                      </Grid>
                    ))
                  )}
                </Grid>
                <Box mt={2}>
                  <Button size="small">{section.action}</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AmazonStyleGrid;
