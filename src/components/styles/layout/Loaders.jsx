import React from 'react';
import { Grid, Skeleton, Stack } from '@mui/material'; // Import Stack

const Loaders = () => {
  return (
    <div>
      <Grid container height={'calc(100vh - 4rem)'}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          height={'100%'}
        >
          <Skeleton variant="rectangular" height={'100%'} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          height={'100%'}
        >
          <Stack spacing={2}> {/* Corrected to MUI spacing scale */}
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} variant="rectangular" height={'5rem'} />
            ))}
          </Stack>
          <Skeleton variant="rectangular" height={'100vh'} />
        </Grid>

        <Grid
          item
          md={4}
          lg={3}
          height={'100%'}
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Skeleton variant="rectangular" height={'100vh'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Loaders;
