import { DialogTitle, Dialog, Button, Stack, Typography, Avatar, ListItem } from '@mui/material';
import React, { memo } from 'react';
import { sampleNotifications } from '../constants/sampleData';

const friendRequestHandler = (_id, accept) => {
  console.log(`Friend request from ${_id} was ${accept ? 'accepted' : 'rejected'}`);
};

const NotificationDialog = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'25rem'}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              key={_id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography variant='h5' textAlign='center'>
            0 Active Notifications
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default NotificationDialog;

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

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
          {name} has sent you a friend request.
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button variant='outlined' onClick={() => handler(_id, true)}>
            Accept
          </Button>
          <Button variant='outlined' onClick={() => handler(_id, false)}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
