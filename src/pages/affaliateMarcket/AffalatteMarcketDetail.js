import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../PagenotFound";

function AffiliateMarketDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://backend.yubai.ai/api/get-affiliate-product`
        );
        const data = await response.json();

        if (data && data.data) {
          const selectedProduct = data.data.find((item) => item.slug === slug);
          setProduct(selectedProduct);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [slug]);

  const handleBuyNowClick = async () => {
    if (!product?.affiliate_url) return;

    try {
      const response = await fetch(
        "https://backend.yubai.ai/api/affiliate-click-count",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            affiliate_product_id: product.id,
          }),
        }
      );

      await response.json();
    } catch (error) {
      console.error("Error tracking click:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container  sx={{ mt: 5, mb: 10 }}>

       <Typography
              variant="h3"
              align="left"
              gutterBottom
              sx={{ fontSize: { xs: "32px", sm: "34px" }, fontWeight: 800,color:"#374d91",margin:"50px 0px" }}
            >
              Affiliate Products
            </Typography>
      <Grid container spacing={4}>
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={
              product.image_url !== "not found"
                ? product.image_url
                : "/images/product-display.jpg"
            }
            alt={product.title}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: 500,
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Right: Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "left" }}>
            {product.title}
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mt: 2, textAlign: "left" }}
          >
            {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Typography>

          <Typography
            variant="h6"
            color="gray"
            sx={{ mt: 2, textAlign: "left" }}
          >
            <Typography
              component="span"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Price (AED):{" "}
            </Typography>
            {product.price}
          </Typography>

          <Typography
            variant="caption"
            display="block"
            color="gray"
            sx={{ mt: 1, textAlign: "left" }}
          >
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              Category:
            </Typography>{" "}
            {product.category_name}
          </Typography>

          {/* Buy Now Button */}
          <Box sx={{ mt: 3 }}>
            {product?.affiliate_url ? (
              <Link
                to={product.affiliate_url}
                target="_blank"
                onClick={handleBuyNowClick}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#374d91",
                    color: "#fff",
                    height: "40px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    textAlign:'left' ,
                    "&:hover": { backgroundColor: "#2d3e70",},
                  }}
                >
                  Buy Now
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                disabled
                sx={{ height: "40px", fontSize: "14px" }}
              >
                <PageNotFound />
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AffiliateMarketDetail;
