import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
