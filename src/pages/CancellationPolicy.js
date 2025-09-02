import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

function CancellationPolicy() {
  return (
    <Container >
      <Paper
        elevation={0}
        style={{ padding: "10px", marginTop: "20px", marginBottom: "20px"  }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "19px", sm: "32px" },
            fontWeight: 600,
            mb: 2,
            textAlign: "left",
          }}
        >
          Order Cancellation Policy – Yubai
        </Typography>

        <Typography
          variant="body2"
          paragraph
          sx={{
            textAlign: "left",
            fontSize: { xs: "13px", sm: "16px" },
            lineHeight: "20px",
            fontFamily: "fangsong",
            color: "#666666",
          }}
        >
          No order cancellations are accepted once an order has been placed.
        </Typography>

        <List >
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText
              primary="After you confirm your purchase on Yubai, the order is immediately processed with our suppliers, warehouses, and logistics partners."
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "13px", sm: "16px" },
                  fontFamily: "fangsong",
                  color: "#666666",
                },
              }}
            />
          </ListItem>

          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText
              primary="Because we operate in cross-border e-commerce (UAE → Lebanon/Iraq and other markets), shipments are consolidated and exported within hours. This makes cancellation impossible once submitted."
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "13px", sm: "16px" },
                  fontFamily: "fangsong",
                  color: "#666666",
                },
              }}
            />
          </ListItem>

          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText
              primary="Customers may still use the Return & Refund Policy after delivery if eligible."
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "13px", sm: "16px" },
                  fontFamily: "fangsong",
                  color: "#666666",
                },
              }}
            />
          </ListItem>
        </List>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            textAlign: "left",
            fontSize: { xs: "13px", sm: "16px" },
            fontFamily: "fangsong",
            color: "#666666",
          }}
        >
          For assistance, please contact our support team:
        </Typography>

        <List >
          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText
              primary="WhatsApp: +00961 78 777 190"
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "13px", sm: "16px" },
                  fontFamily: "fangsong",
                  color: "#666666",
                },
              }}
            />
          </ListItem>

          <ListItem sx={{ display: "list-item", pl: 0 }}>
            <ListItemText
              primary="Email: operations@yubai.ai"
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "13px", sm: "16px" },
                  fontFamily: "fangsong",
                  color: "#666666",
                },
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default CancellationPolicy;
