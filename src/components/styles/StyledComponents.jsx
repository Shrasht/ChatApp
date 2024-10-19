import React from 'react';
import { styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Use correct Link component from react-router-dom

// Visually Hidden Input (for accessibility)
export const VisuallyHiddenInput = styled("input")({
  border: '0',
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',  // Fix typo, should be whiteSpace
  width: 1,
});

// Link component styled for use with React Router
export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
  padding: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Styled Input Box
export const InputBox = styled("input")`
  height: 100%;
  width: 100%;
  padding: 1rem;
  background-color: #808080;
  border-radius: 3rem;

  &::placeholder {
    color: #ccc;  // Add placeholder color styling
  }
`;

