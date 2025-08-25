import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={0} sx={{ p: 4 }}>

        <Typography
          sx={{ fontSize: { xs: "12px", sm: "16px" }, mb: 3, textAlign: "left", color: "grey" }}
        >
          Last Update  : 2025/08/04
        </Typography>

        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: "24px", sm: "34px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
        >
          Privacy Policy
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
        >
          We take your privacy seriously, and we encourage you to do the same.
          This Privacy Policy is designed to clearly explain how we handle your
          personal information, ensuring you understand what we do to keep it
          safe. We recommend reading this document thoroughly and checking back
          periodically for updates, as the most current version always applies.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, textAlign: "left", mb: 3 }}
          >
            What Does This Privacy Policy Cover?
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            This Privacy Policy applies to all users (“you” or “your”) of the
            www.yubai.ai website and Yubai mobile application (collectively, the
            “Platforms”) as well as the features, products, and services offered
            through these Platforms (“Services”). It describes how Yubai
            L.L.C-FZ, a company registered in the United Arab Emirates under
            Meydan Free Zone regulations, with its registered office at Meydan
            Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
            (“we,” “us,” or “our”), collects, uses, and protects your personal
            information.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            What This Privacy Policy Covers:
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong", }}
          >
            <p>Information Collection – What data we gather from you and how</p>
            <p>Information Usage – How we utilize that information</p>
            <p>Data Protection – How we safeguard your information</p>
            <p>Information Sharing – What information is shared with others and under what circumstances</p>
            <p>Your Rights – Choices you have regarding your personal information</p>
            <p>By using our Platforms, you signify your consent to this policy. You must be of legal age in your jurisdiction to use our Platforms.</p>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            Information Not Covered by This Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            Our Platforms may occasionally link to third-party platforms. Their
            privacy practices are beyond our control and governed by their own
            privacy policies, not ours. We advise caution when accessing these
            third-party sites and recommend reviewing their privacy policies.
            Additionally, if you access our Services through locations like
            social media accounts, please review their privacy practices as
            well.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            Types of Information We Collect
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >

            <Typography sx={{ fontWeight: 'bold' }}> 1. Information You Provide:</Typography>
            <p> When creating or updating your account, we may ask for details such as your name, email, phone number, address, and government ID.</p>
            <p> For transactions or support inquiries, financial information like bank details or limited credit/debit card info may be collected.</p>
            <p> Participation in promotions, feedback submissions, or surveys may involve additional data collection.</p>

            <Typography sx={{ fontWeight: 'bold' }}>2. Information We Collect Automatically: </Typography>

            <p> Device data (IP address, browser type, location data) and activity info (pages visited, time spent).</p>
            <p> Cookies and similar tracking tools for a smoother, more personalized experience.</p>
            <Typography sx={{ fontWeight: 'bold' }}> 3. Information From Other Sources:</Typography>

            <p> We may supplement the information we collect with data from trusted partners or platforms (e.g., analytics tools or social media).</p>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            How We Use Cookies
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            <Typography> Cookies are small files placed on your device to collect information about your interactions with our Platforms. We use them to:</Typography>
            <p>Maintain your login status</p>
            <p>Remember preferences</p>
            <p>Enhance user experience</p>
            <p>You can adjust your browser settings to control cookie behavior.</p>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            How We Use Your Personal Information
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            <Typography sx={{ fontWeight: "bold" }}>We use your data to:</Typography>
            <p> Manage account creation, transactions, and deliveries</p>
            <p> Personalize your experience and improve our service</p>
            <p> Fulfill legal and regulatory obligations</p>
            <p> Send marketing communications (opt-out anytime)</p>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, textAlign: "left", }}
          >
            Information Sharing
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            <p> We only share your personal data in specific cases:</p>
            <p>With service
              providers, affiliates, or partners to fulfill your requests</p>
            <p>In connection with business transfers like mergers or acquisitions </p>
            <p>To comply with legal obligations or protect against fraud</p>
            <p>We may also share anonymized, non-identifiable information with third parties.</p>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 3, textAlign: "left", }}
          >
            Data Retention
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            We retain your data only as long as needed to fulfill its purpose or
            comply with applicable laws.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, textAlign: "left", mb: 3 }}
          >
            Your Rights and Choices
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong", mb: 2 }}
          >
            <Typography sx={{ fontWeight: "bold" }}>  You may:</Typography>
            <p>Access, correct, or update your data</p>
            <p>Object to certain processing or request deletion (subject to service limitations)</p>

          </Typography>
        </Box>


        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 2, textAlign: "left", }}
          >
            Data Protection Measures
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            We implement industry-standard security measures to protect your personal information. However, no system is completely secure. If you suspect unauthorized activity, contact us immediately.
          </Typography>
        </Box>




        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, mb: 2, textAlign: "left", }}
          >
            Policy Updates
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            We may update this Privacy Policy to reflect changes in technology, legal requirements, or our business practices. We will notify users of significant updates where required by law. Continued use of the Platforms signifies your acceptance of any changes.
          </Typography>
        </Box>



        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "30px" }, fontWeight: 600, textAlign: "left", }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: "left", fontSize: { xs: "13px", sm: "16px" }, lineHeight: "24px", color: "#666666", fontFamily: "fangsong" }}
          >
            <p>  If you have any questions, concerns, or complaints regarding this Privacy Policy, please contact our designated data protection officer:</p>
            <Typography component={"p"} sx={{ fontWeight: "bold" }} >You may :</Typography>
            <p>Access, correct, or update your data </p>
            <p> Object to certain processing or request deletion (subject to service limitations)
              Data Protection Measures</p>
            <p>We implement industry-standard security measures to protect your personal information. However, no system is completely secure. If you suspect unauthorized activity, contact us immediately.</p>

            <Typography component={"p"} sx={{ fontWeight: "bold" }} >Policy Updates</Typography>
            <p>We may update this Privacy Policy to reflect changes in technology, legal requirements, or our business practices. We will notify users of significant updates where required by law. Continued use of the Platforms signifies your acceptance of any changes.</p>

            <Typography component={"p"} sx={{ fontWeight: "bold" }} >Contact Us</Typography>
            <p>If you have any questions, concerns, or complaints regarding this Privacy Policy, please contact our designated data protection officer:</p>

            <p>Yubai L.L.C-FZ</p>
            <p>Meydan Grandstand, 6th Floor, Meydan Road,</p>
            <p>Nad Al Sheba, Dubai, United Arab Emirates</p>
            <p>Email: [operations@yubai.ai]</p>

          </Typography>
        </Box>


      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
