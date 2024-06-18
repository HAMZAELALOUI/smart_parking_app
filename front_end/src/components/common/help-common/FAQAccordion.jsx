import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion = ({ faqs }) => (
  <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
    <Typography variant="h6">Frequently Asked Questions</Typography>
    {faqs.map((faq, index) => (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
        >
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Paper>
);

export default FAQAccordion;
