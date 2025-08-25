
import { Container, Grid, Box, Typography, } from "@mui/material";

function Discover() {
 


  

  return (
    <Container>
      <Grid container spacing={4} alignItems="center"
      
         sx={{
    '& > .MuiGrid-item:first-of-type': {
      paddingLeft: '0px !important',
    },
  }}>



   {/* Left Side - Text Content */}
        <Grid item xs={6} md={6} 
          sx={{
    '& > .MuiGrid-item': {
      paddingLeft: '0px !important',
    }
  }}
        >
          <Box>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "20px", sm: "34px" },
                fontWeight: 700,
                mt: { xs: "30px", sm: "0px" },
                textAlign: "left",
                color:"#374d91"
              }}
            >
          100% Secure payment 
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "left", fontSize: { xs: "12px", sm: "18px" } }}
            >
              With just one click, you can purchase any item and have it
              delivered to your doorstep including shipping, clearance and
              delivery. Pay conveniently by card.
            </Typography>
          </Box>
        </Grid>

          {/* Right Side - Image */}
        <Grid
          item
          xs={6}
          md={6}
           sx={{
    '& > .MuiGrid-item': {
      paddingLeft: '0px !important',
    }
  }}
         
        >
          <Box
            component="img"
            src="/homeimg/phone-4.gif"
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
     

      
      </Grid>
    </Container>
  );
}

export default Discover;
