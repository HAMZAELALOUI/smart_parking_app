// src/components/CustomTimeline.jsx
import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import { School, Work, StarBorder } from '@mui/icons-material';

function CustomTimeline() {
  const timelineEvents = [
    {
      time: '2009 - 2013',
      title: 'High School Diploma',
      description: 'Completed with high marks in science and mathematics.',
      icon: <School />
    },
    {
      time: '2014 - 2018',
      title: 'B.Sc. in Computer Science',
      description: 'Graduated from ABC University with a focus on software engineering.',
      icon: <Work />
    },
    {
      time: '2019 - Present',
      title: 'Software Engineer at XYZ Corp',
      description: 'Working on multiple high-profile projects, focusing on web development and cloud solutions.',
      icon: <StarBorder />
    }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, m: 2 }}>
      <Typography variant="h5" gutterBottom component="div">
        Career Timeline
      </Typography>
      <Timeline position="alternate">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                {event.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography>{event.time}</Typography>
              <Typography color="textSecondary">{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}

export default CustomTimeline;
