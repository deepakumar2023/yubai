import  { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  MenuItem,
  Paper,
  Pagination,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [keyword, setKeyword] = useState(""); // ✅ Default keyword
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const keywordInputRef = useRef();
  const productsPerPage = 10;

  const [loading, setLoading] = useState(false);


  // ✅ Fetch categories once
useEffect(() => {
  fetch("/api/amazon/categories") // ✅ Secure path
    .then((res) => res.json())
    .then((data) => {
      if (data?.status) {
        setCategories(data.data);
      }
    })
    .catch((err) => console.error("Error fetching categories:", err));
}, []);


  // ✅ Auto-search "computer" on first load
  useEffect(() => {
    handleSearch("computer");
  }, []);

 // 🔍 Search products




const handleSearch = (customKeyword) => {
  const query = customKeyword || keyword;
  if (!query) return;

  setLoading(true); // Start loading

  const url = `/api/amazon/search?Category=${encodeURIComponent(
    selectedCategory
  )}&keywords=${encodeURIComponent(query)}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data?.status) {
        setAllProducts(data.data);
        setCurrentPage(1);
      }
    })
    .catch((err) => console.error("Error searching products:", err))
    .finally(() => setLoading(false)); // End loading
};



// const handleSearch = (customKeyword, page = 1) => {
//   const query = customKeyword || keyword;
//   if (!query) return;

//   const url = `http://51.20.87.59/api/amazon/search?Category=${encodeURIComponent(
//     selectedCategory
//   )}&keywords=${encodeURIComponent(query)}&page=${page}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data?.status) {
//         setAllProducts(data.data);
//         setCurrentPage(page); // update to the correct page
//       }
//     })
//     .catch((err) => console.error("Error searching products:", err));
// };




  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setTimeout(() => {
      keywordInputRef.current?.focus();
    }, 0);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{color:"#2d3e70",fontWeight: 600,}}>
        Amazon Product Search
      </Typography>

      {/* 🔍 Search Bar */}
     <Box
  sx={{
    width: "100%",
    maxWidth: 800,
    mx: "auto",
    mb: 4,
  }}
>
  <Paper
    elevation={3}
    sx={{
      display: "flex",
      alignItems: "center",
      borderRadius: 1,
      overflow: "hidden",
      flexDirection: "row", // ✅ always horizontal
      height: 40, // ✅ compact height like Amazon
    }}
  >
    {/* Category Select */}
    <TextField
      select
      value={selectedCategory}
      onChange={handleCategoryChange}
      size="small"
      sx={{
        minWidth: 90,
        maxWidth: 120,
        backgroundColor: "#f3f3f3",
        height: "100%",
        "& .MuiSelect-select": {
          py: 0.5,
        },
        "& fieldset": { border: "none" },
      }}
      SelectProps={{
        MenuProps: { PaperProps: { sx: { maxHeight: 200 } } },
      }}
    >
      {categories.map((cat) => (
        <MenuItem key={cat.id} value={cat.name}>
          {cat.name}
        </MenuItem>
      ))}
    </TextField>

    {/* Input Field */}
    <Box sx={{ flex: 1 }}>
      <TextField
        fullWidth
        placeholder="Search Amazon.ae"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        inputRef={keywordInputRef}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        size="small"
        sx={{
          height: "100%",
          "& .MuiOutlinedInput-root": {
            height: "100%",
            borderRadius: 0,
            px: 1,
          },
        }}
        InputProps={{
          sx: {
            height: "100%",
            px: 1,
          },
        }}
      />
    </Box>

    {/* Search Button */}
    <Button
      onClick={() => handleSearch()}
      sx={{
        height: "100%",
        backgroundColor: "#374d91",
        borderRadius: 0,
        px: 3,
        minWidth: 45,
        "&:hover": {
          backgroundColor: "#374d91",
        },
      }}
    >
      <SearchIcon sx={{ color: "#ffff" }} />
    </Button>
  </Paper>
</Box>


 {/* 🧾 Product Cards or Loader or No Data Message */}
{loading ? (
  <Box display="flex" justifyContent="center" mt={6}>
    <CircularProgress />
  </Box>
) : currentProducts.length > 0 ? (
  <Grid container spacing={3}>
    {currentProducts.map((product) => (
      <Grid key={product.asin} item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "contain", p: 2 }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" gutterBottom noWrap>
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: {product.brand}
            </Typography>
            <Typography component={'div'} sx={{ display: "flex", gap: "10px", mt: "10px" }}>
              <Typography variant="body1">
                Deal_price (AED) {product.deal_price_aed.toFixed(2)}
              </Typography>
              {product.discount_percent > 0 && (
                <Typography variant="body2" color="green">
                  {product.discount_percent}% OFF
                </Typography>
              )}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              href={product.link}
              target="_blank"
            >
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
) : (
  <Typography
    variant="body1"
    mt={4}
    textAlign="center"
    width="100%"
    color="text.secondary"
  >
    No products found. Try a different keyword or category.
  </Typography>
)}


      {/* Pagination */}
      {totalPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductSearch;



