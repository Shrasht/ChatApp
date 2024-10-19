import { Avatar, AvatarGroup, Stack } from '@mui/material';
import React from 'react';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <AvatarGroup max={max}>
        {avatar.map((i, index) => (
          <Avatar
            key={index} // Using index as key, but ideally, you should have a unique identifier
            alt={`Avatar ${index}`}
            src={i}
            sx={{
              width: '2rem',
              height: '2rem',
              position: 'relative', // Changed from absolute to relative for better alignment
              left: {
                xs: `${0.5 + index}rem`,
                sm: `${index}rem`,
              },
              border: '2px solid white',
            }}
          />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
