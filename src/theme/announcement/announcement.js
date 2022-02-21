import React from 'react';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

export default ({
  image,
  title,
  description
}) =>
<Box
  sx={{
    p: 4,
    color: 'text',
    bg: 'background',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
  }}>
  <Heading variant='display'>Hello</Heading>
  <Text mb={4}>This is a demo using presets from Theme UI</Text>
  <Button mr={3}>
    Beep
  </Button>
  <Button variant='secondary'>
    Boop
  </Button>
</Box>
