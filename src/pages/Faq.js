import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What is Yubai?",
    answer: "Yubai is a cross-border shopping platform that brings you top-quality products from the UAE, US, UK, and Germany right to your doorstep in Lebanon. We are proudly affiliated with Amazon and Sephora, giving you access to authentic products from global brands."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times depend on where the product is sourced from:\n- From the UAE: 10 to 15 business days\n- From outside the UAE: Delivery time may vary based on origin and customs clearance.\n\nWe’ll keep you updated throughout the process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept:\n- Credit and Debit Cards (Visa, Mastercard)\n- Apple Pay\n- Wish Money Wallet (Yubai's internal store credit)\n\nCash on Delivery is not available."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "We currently do not offer returns. Please refer to our full Return & Refund Policy for details and exceptions."
  },
  {
    question: "How can I track my order?",
    answer: "You’ll receive real-time updates:\n- Through WhatsApp\n- Via in-app notifications under “My Orders”"
  },
  {
    question: "Where are your products sourced from?",
    answer: "Our products come from trusted partners and platforms based in:\n- UAE\n- United States\n- United Kingdom\n- Germany\n\nAnd they’re delivered straight to your home in Lebanon."
  },
  {
    question: "Will I receive a receipt or invoice?",
    answer: "Yes. A digital invoice will be:\n- Emailed after your order is placed\n- Available in your Yubai app account"
  },
  {
    question: "Is it safe to shop on Yubai?",
    answer: "Yes. Your data and transactions are protected with advanced security and encryption. We follow UAE data privacy regulations and use secure payment processing."
  },
  {
    question: "Do I need an account to place an order?",
    answer: "Yes, a Yubai account is required to place orders, track deliveries, and access exclusive features. It’s fast and free to sign up."
  },
  {
    question: "What if I receive a damaged or wrong item?",
    answer: "Please contact us within 48 hours of delivery via WhatsApp or the app. We’ll review and respond in line with our support policy."
  },
  {
    question: "What are your customer support hours?",
    answer: "Our support team is available:\nMonday to Saturday, 9 AM – 6 PM (Beirut time)\nReach us via WhatsApp or the Yubai app."
  },
  {
    question: "Can I buy everything on Yubai?",
    answer: "Almost! From beauty to tech and lifestyle essentials — if it’s trending on Amazon or Sephora, we’ll help you get it delivered to Lebanon with no hassle."
  },
];

const YubaiFAQAccordion = () => {
  const [expanded, setExpanded] = useState(0); // index of the open accordion

  const handleChange = (panelIndex) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelIndex : false);
  };

  return (
    <Container  sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions – Yubai
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ mb: 1 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight="bold"   sx={{
    width: '100%',
    textAlign: expanded === index ? 'center' : 'left',
    transition: 'text-align 0.3s ease'
  }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ whiteSpace: 'pre-line', textAlign:"left"}}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default YubaiFAQAccordion;
