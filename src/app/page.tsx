'use client';

import NavBar from '../components/NavBar';
import BestSellers from '../components/BestSellers';
import { Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
export default function Home() {
  return (
    <>
      {' '}
      <NavBar />
      <HeroSection />
      <Container>
        <BestSellers />
      </Container>
    </>
  );
}
