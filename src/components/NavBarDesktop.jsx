import {
  AppBar,
  Box,
  Button,
  List,
  ListItemText,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/image/logo incanto 2.png';
import Menu from '@mui/material/Menu';
import IconHeader from './IconHeader';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  color: '#404040',
  display: 'flex',
});

const ListItems = styled(List)({
  color: '#000000',
});

const NavBarDesktop = () => {
  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Image src={Logo} alt="Logo for page" width={184} height={46} />
          </Box>

          <Box sx={{ marginLeft: 'auto' }}>
            <List
              sx={{
                display: 'flex',
                gap: 6,
              }}
            >
              <ListItemText primary="Collection" />
              <ListItemText primary="New In" />
              <ListItemText primary="Modiweek" />
              <ListItemText primary="Plus Size" />
              <ListItemText primary="Sustainability" />
            </List>
          </Box>

          <IconHeader />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBarDesktop;
