import { Groups2, KeyboardBackspaceSharp, Menu as MenuIcon } from '@mui/icons-material';
import { IconButton, Grid, Typography, Tooltip, Box, Drawer, Stack } from '@mui/material';
import React, { useState, memo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { sampleChats } from '../components/constants/sampleData'; // Assuming this contains chat data

const Groups = () => {
  const navigate = useNavigate(); // Navigation hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateBack = () => {
    navigate('/'); // Navigate back to home or a different route
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const IconButtons = (
    <Grid container alignItems="center">
      {/* Mobile Menu Icon */}
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
          position: 'fixed',
          right: '1rem',
          top: '1rem',
        }}
      >
        <IconButton onClick={handleMobileMenu}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Group Icon */}
      <IconButton>
        <Groups2 />
      </IconButton>
      <Typography variant="h6">Group Details</Typography>

      {/* Back Button */}
      <Tooltip title="Go Back">
        <IconButton onClick={navigateBack} sx={{ marginLeft: 'auto', position: 'absolute', top: '10vh' }}>
          <KeyboardBackspaceSharp />
        </IconButton>
      </Tooltip>
    </Grid>
  );

  return (
    <div>
      <Grid container height={'100vh'} sx={{ padding: '1rem' }}>
        {/* Sidebar for larger screens */}
        <Grid
          item
          sm={4}
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
            flexDirection: 'column',
            bgcolor: 'bisque',
            padding: '1rem',
          }}
        >
          {/* Content for larger screens */}
          <Typography variant="h6">Group List</Typography>
          {/* GroupList should be called here */}
          <GroupList group={sampleChats} chatId={null} />
        </Grid>

        {/* Main Container */}
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            padding: '1rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {IconButtons}
        </Grid>

        {/* Mobile Drawer for Group List */}
        <Drawer
          anchor="left"
          open={isMobileMenuOpen}
          onClose={handleMobileMenu}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        >
          <Box sx={{ width: 250, padding: '1rem' }}>
            <Typography variant="h6">Group List</Typography>
            {/* Group list inside Drawer for mobile */}
            <GroupList group={sampleChats} chatId={null} />
          </Box>
        </Drawer>
      </Grid>
    </div>
  );
};

const GroupList = ({ group = [], chatId }) => {
  return (
    <Stack spacing={2}>
      {group.length > 0 ? (
        group.map((grp, index) => (
          <GroupListItem key={grp._id || index} group={grp} chatId={chatId} />
        ))
      ) : (
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          No Groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, _id, avatar } = group;

  return (
    <Link to={`/chat/${chatId || _id}`} onClick={(e)=>{if(chatId===_id) e.preventDefault()}} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton>
          {avatar ? (
            <img src={avatar} alt={`${name} avatar`} width={40} height={40} style={{ borderRadius: '50%' }} />
          ) : (
            <Groups2 />
          )}
        </IconButton>
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
