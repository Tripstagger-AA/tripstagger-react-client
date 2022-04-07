import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import * as React from 'react';

export default function ColorsTimeline() {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Secondary</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
        </TimelineSeparator>
        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
