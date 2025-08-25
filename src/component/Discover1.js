

import { Container, Grid, Box, Typography } from "@mui/material";

function Discover1() {



  

  return (
    <Container>
      <Grid container spacing={4} alignItems="center"
       
        sx={{
    '& > .MuiGrid-item:first-of-type': {
      paddingLeft: '0px !important',
    },
  }}>
      

        {/* Right Side - Image */}
        <Grid
          item
          xs={7}
          md={6}
         
        >
          <Box
            component="img"
            src="/homeimg/phone-1.gif"
            alt="Discover Image"
            sx={{
              width: { xs: "100%", md: "80%" },
              borderRadius: 2,
              height: { xs: "100%", md: "100%" },
              // mt: "40px",
              objectFit: "contain",
            }}
          />
        </Grid>

  {/* Left Side - Content */}
        <Grid
          item
          xs={5}
          md={6}
      sx={{
    '& > .MuiGrid-item': {
      paddingLeft: '0px !important',
    }
  }}
         
        >
          <Box>
            <Typography
              variant="h4"
            sx={{
                fontSize: { xs: "20px", sm: "34px" },
                fontWeight: 700,
                mt: { xs: "30px", sm: "0px" },
                textAlign: "left",
                color:"#374d91"
              }}
            >
          No Hidden Fee
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "left", fontSize: { xs: "12px", sm: "18px" ,} }}
            >
              Stay informed every step of the way. Know when your products reach
              our warehouse in Dubai, when they are shipped, when they arrive in
              Lebanon, and when they are out for delivery
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Discover1;
