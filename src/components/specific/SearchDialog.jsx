import React, { useState } from 'react';
import { Dialog, TextField, List, InputAdornment, Stack, DialogTitle } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../constants/sampleData';

const SearchDialog = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [search, setSearch] = useState(''); // State for search input
  const isLoadingSendFriendRequest = false;

  const addFriendHandler = (userId) => {
    // Friend request logic here
  };

  return (
    <Dialog open={true}>
      <Stack sx={{ width: '25rem', alignItems: 'center' }}>
        <DialogTitle textAlign="center">Find more people</DialogTitle>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Handle search input
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
      </Stack>

      <List>
        {users.map((user) => (
          <UserItem
            user={user}
            key={user._id}
            handler={addFriendHandler}
            handlerIsLoading={isLoadingSendFriendRequest}
          />
        ))}
      </List>
    </Dialog>
  );
};

export default SearchDialog;
