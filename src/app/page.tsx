'use client';

import NavBar from '../components/NavBar';
import BannerHeader from '../components/BannerHeader';
import { Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
export default function Home() {
  return (
    <>
      {' '}
      <NavBar />
      <HeroSection />
    </>
  );
}
