import { Dialog, DialogTitle, Stack, TextField, InputAdornment, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { sampleUsers } from '../constants/sampleData';
import UserItem from '../shared/UserItem'; // Assuming UserItem is the component you're using for displaying each user
import {useInputValidation} from '6pp'

const NewGroupsDialog = () => {
  const [search, setSearch] = useState(''); // State for search input

  const selectMemberHandler = (_id, accept) => {
    // Logic for handling member selection
    console.log(`Member ${_id} was ${accept ? 'accepted' : 'rejected'}`);
  };

  const groupname=useInputValidation("")
  return (
    <Dialog open={true}>
      <Stack sx={{ width: '25rem', alignItems: 'center' }} spacing={2}>
        <DialogTitle textAlign="center">New Group</DialogTitle>

        <TextField
          label="New Group"
          value={groupname.value}
          onChange={groupname.changeHandler} // Handle search input
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Stack spacing={2}>
          {sampleUsers
            .filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) // Filter users based on search
            .map((user) => (
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
              />
            ))}
        </Stack>
        
        <Stack direction={'row'} spacing={2} mt={2}>
          <Button variant='outlined'>Create</Button>
          <Button variant='outlined'>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroupsDialog;
