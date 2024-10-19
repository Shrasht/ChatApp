import { Add } from '@mui/icons-material';
import { Avatar, IconButton, Typography, ListItem, Stack } from '@mui/material';
import React, { memo } from 'react';

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack width={'100%'} alignItems={'center'} spacing={'1rem'} direction='row'>
        <Avatar src={avatar} alt={name} sx={{ width: 25, height: 25 }} /> {/* Adjust avatar size */}

        <Typography
          variant='body1'
          sx={{
            flexGrow: 1, 
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </Typography>

        <IconButton
          size='small'
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          <Add />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
