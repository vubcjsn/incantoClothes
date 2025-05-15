'use client';

import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import IconHeader from '../components/IconHeader';
import BannerHeader from '../components/BannerHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; //add folder
import SearchIcon from '@mui/icons-material/Search'; //addfolder
import NavBarDesktop from '../components/NavBarDesktop';
import NavBarMobile from '../components/NavBarMobile';
const Logo = '/image/logoTrue.png';
const LogoMobile = '/image/logoTrue.png';

export default function NavBar() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#ffff',
          boxShadow: 'none',
          color: '#404040',
        }}
      >
        <BannerHeader />
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            pt: '10px',
            pb: '10px',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link href="/">
              <Image src={Logo} alt="Logo for page" width={184} height={46} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
            <MenuOutlinedIcon />
            <SearchIcon />
          </Box>
          <NavBarDesktop />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Image
              alt="Logo for shop"
              src={LogoMobile}
              width={138}
              height={40}
              quality={100}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconHeader />
          </Box>
          <NavBarMobile />
        </Toolbar>
      </AppBar>
    </>
  );
}
