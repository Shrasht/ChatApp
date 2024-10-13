import { IconButton, Typography, Toolbar, Box, AppBar, Tooltip, Backdrop } from '@mui/material';
import React, { useState,Suspense } from 'react';
import { orange } from '@mui/material/colors';
import { Group, Menu as MenuIcon, Search, Add, LogoutSharp, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setisNotification] = useState(false);

  // Lazy loading dialogs
  const SearchDialog = React.lazy(() => import('../../specific/SearchDialog'));
  const NotificationDialog = React.lazy(() => import('../../specific/NotificationDialog'));
  const NewGroupsDialog = React.lazy(() => import('../../specific/NewGroupsDialog'));

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };

  const openNotification = () => {
    setisNotification((prev) => !prev);
  };

  const handleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleGroup = () => {
    navigate('/groups');
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const Logout = () => console.log('Logout');

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} height={'4rem'}>
        <AppBar position='static' sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography variant='h6' sx={{ textColor: 'violet', display: { xs: 'none', sm: 'block' } }}>
              Chat App
            </Typography>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Tooltip title='Menu'>
                <IconButton color='inherit' onClick={handleMobile}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title='Search'>
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              </Tooltip>

              <Tooltip title='Manage Groups'>
                <IconButton onClick={handleGroup}>
                  <Group />
                </IconButton>
              </Tooltip>

              <Tooltip title='Add Contact'>
                <IconButton onClick={openNewGroup}>
                  <Add />
                </IconButton>
              </Tooltip>

              <Tooltip title='Notifications'>
                <IconButton onClick={openNotification}>
                  <Notifications />
                </IconButton>
              </Tooltip>

              <Tooltip title='Logout'>
                <IconButton onClick={Logout}>
                  <LogoutSharp />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupsDialog />
        </Suspense>
      )}
    </div>
  );
};

export default Header;
