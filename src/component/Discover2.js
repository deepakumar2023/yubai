

import { Container, Grid, Box, Typography } from "@mui/material";

function Discover2() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">


           {/* Right Side - Image */}
        <Grid item xs={5} md={6} >
          <Box>
            <Typography variant="h4" sx={{ fontSize: { xs: "20px", sm: "34px" }, fontWeight: 600, mt: { xs: "30px", sm: '0px' }, textAlign: 'left',   color:"#374d91" }}>
              Order with one Tap
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ textAlign: "left", fontSize: { xs: "11px", sm: "18px" } }}>
              Shop from your favorite brands.
              Experience the convenience of having Dubai’s best online stores at your fingertips, with seamless door-to-door delivery across Lebanon
            </Typography>
          </Box>
        </Grid>
        {/* Left Side - Content */}
        <Grid item xs={7} md={6}
         >
          <Box
            component="img"
                src="/homeimg/phone-2.gif"
            // src="/homeimg/Gray_Minimalist.gif"
            alt="Discover Image"
            sx={{
              width: { xs: "100%", md: "80%" },
              borderRadius: 2,
              height: { xs: "100%", md: "600px" },
              mt: "40px",
              objectFit: "contain",
            }}
          />
        </Grid>

     
      </Grid>
    </Container>
  );
}

export default Discover2;
