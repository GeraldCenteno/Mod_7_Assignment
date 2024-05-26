import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="contained" href='index.html'>Index</Button>
      <Button variant="contained" href='about.html'>About</Button>
      <Button variant="contained" href='contact-me.html'>Contact Me</Button>
    </Stack>
  );
}