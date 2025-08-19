import { Box, Container, Link, Grid } from "@mui/material";

export default function Footer() {
  const links = [
    { href: "/terms-condition", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-return", label: "Refund & Return Policy" },
    { href: "/about-page", label: "About" },
    { href: "/yubai-faq", label: "Faq" },
    { href: "/contact", label: "Contact" },
    { href: "/amazon-shop", label: "Amazon Market" },
    // { href: "/amazon-shop", label: "Amazon Market" },
  ];

  return (
   
      <Container  maxWidth={"100%"} sx={{ bgcolor: "#374d91", }}>
        <Grid container spacing={2} alignItems="flex-start">
          {/* Left: Logo */}
          <Grid item xs={12} md={3} sx={{paddingLeft:'8px'}}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <img
                src="/Logo/yellow-8.png"
                alt="Logo"
                style={{ width: 110, marginRight: 10 }}
              />
            </Box>
          </Grid>

          {/* Right: Links in one line on desktop, stacked on mobile */}
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              display: "flex",

              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: { xs: "flex-start", md: "flex-start" },
              gap: 2,
              mt: { xs: 2, md: 0 },
              textAlign: { xs: "left", md: "right" },
              marginBottom:'20px',
            }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                underline="none"
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#f7ef6d",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
  
  );
}
