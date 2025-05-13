import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavBarDesktop from '../components/NavBarDesktop';
import NavBarMobile from '../components/NavBarMobile';

export default function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:991px)');
  return <>{matches ? <NavBarMobile /> : <NavBarDesktop />}</>;
}
