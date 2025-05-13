import Image from 'next/image';
import HeroImage from '../../public/image/HeroDesktop.jpeg';
import HeroMobile from '../../public/image/HeroMobile.jpg';

import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/material';

function HeroSection() {
  return (
    <Box sx={{ width: '100%', height: `90vh`, position: 'relative' }}>
      <Image src={HeroImage} layout="fill" objectFit="cover" />
    </Box>
  );
}

export default HeroSection;
