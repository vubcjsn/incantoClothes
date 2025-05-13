'use client';

import NavBar from '../components/NavBar';
import BannerHeader from '../components/BannerHeader';
import { AppBar, Container, Toolbar } from '@mui/material';
export default function Home() {
  return (
    <>
      <BannerHeader />
      <Container maxWidth="xl">
        <NavBar />
      </Container>
    </>
  );
}
