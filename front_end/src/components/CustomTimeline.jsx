import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper, Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';

function CustomTimeline() {
  const teamMembers = [
    {
      name: 'Hamza El Aloui',

      role: 'Project Manager',
      description: 'Leads project planning, scheduling, and management activities.',
      initials: 'HE'
    },
    {
      name: 'Morad El Maslouhy',

      role: 'Lead Developer',
      description: 'Focuses on backend development and system integration.',
      initials: 'MM'
    },
    {
      name: 'Zakariae Lagraini',
      role: 'UI/UX Designer',
      description: 'Designs and develops the user interface and user experience.',
      initials: 'ZL'
    },
    {
      name: 'Reda Jord',
      role: 'Quality Assurance Engineer',
      description: 'Ensures all round quality and performance of the software.',
      initials: 'RJ'
    },
    {
      name: 'Ikram Souita',
      role: 'Software Developer',
      description: 'Works on frontend development and feature implementation.',
      initials: 'IS'
    }
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, m: 2 }}>
      <Typography variant="h5" gutterBottom component="div">
        Development Team
      </Typography>
      <Timeline position="alternate">
        {teamMembers.map((member, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>{member.initials}</Avatar>
              </TimelineDot>
              {index < teamMembers.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
              <Typography color="textSecondary">{member.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}

export default CustomTimeline;
