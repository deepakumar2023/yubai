"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Autocomplete,
  TextField,
  CircularProgress,
  Typography,
  Container,
} from "@mui/material";

export default function AmazonCategorySearch() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://51.20.87.59/api/amazon/categories");
      const json = await res.json();
      setOptions(json?.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: { xs: 4, sm: 6 } }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center", fontSize: { xs: "1.2rem", sm: "1.5rem", } }}
      >
        Search Amazon Category
      </Typography>

      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name || ""}
        value={selected}
        onChange={(e, newValue) => setSelected(newValue)}
        loading={loading}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Category"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />

      {selected && (
        <Box mt={2} sx={{ wordWrap: "break-word" }}>
          <Typography variant="body1">
            <strong>Selected:</strong> {selected.name} (ID: {selected.id})
          </Typography>
        </Box>
      )}
    </Container>
  );
}
