import React from "react";

import { Container, Typography, Paper } from "@mui/material";

function RefundReturn() {
  return (
    <Container>
      <Paper
        elevation={0}
        style={{ padding: "10px", marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mb: 3,
            textAlign: "left",
          }}
        >
         Refund & Return Policy – Yubai
        </Typography>

      




            <Typography
                    variant="body2"
                    paragraph
                    sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
                  >
                 
                 Thank you for shopping with Yubai. We are committed to ensuring your satisfaction and providing the best customer experience. Please read our policy carefully before initiating a return or refund request.
                      </Typography>

    

        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "30px" },
            textAlign: "left",
          }}
        >
        1. Returns
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
        >
     <p>• Eligibility: Returns are accepted only in cases where incorrect items have been delivered.</p>
     <p>• Conditions: Products must be returned unused, in their original packaging, and accompanied by the order number and receipt.</p>
     <p>• Notification Period: You must notify us within 2 days of delivery to be eligible for a return.</p>
        </Typography>

        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "30px" },
            textAlign: "left",
          }}
        >
        2. Refunds
        </Typography>


        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
        >
    <p>• Eligibility: Refunds are offered only if an item arrives damaged due to Yubai’s handling or logistics.</p>
    <p>• Review Process: Once we receive your request and supporting evidence (e.g. photos), our team will assess and confirm eligibility.</p>
    <p>• Refund Method: Refunds will be processed through the original payment method or provided as store credit, depending on your preference.</p>
    <p>• Shipping Costs: In cases of wrong or damaged items, Yubai covers the return shipping costs.</p>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "30px" },
            textAlign: "left",
          }}
        >
       3. Exchanges
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
        >
      • Please Note: Yubai does not offer product exchanges at this time.
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "30px" },
            textAlign: "left",
          }}
        >
      4. Damaged or Incorrect Items
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
        >
     If you receive a damaged or wrong item, please contact us within 2 days of delivery. You will be asked to provide your order number and photographic evidence of the issue.
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "34px" },
            fontWeight: 600,
            mt: { xs: "30px", sm: "30px" },
            textAlign: "left",
          }}
        >
   5. How to Request a Return or Refund
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "left", fontSize: { xs: "14px", sm: "16px" } }}
        >
     <p>To initiate a return or refund:</p>
     <p>• Contact our Customer Support via WhatsApp at [+971582584444]</p>
     <p>• Be ready to share your order number, photos, and a brief description of the issue.</p>
        </Typography>

    
      </Paper>
    </Container>
  );
}

export default RefundReturn;
