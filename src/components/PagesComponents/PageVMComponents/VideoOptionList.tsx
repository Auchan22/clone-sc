import VIDEOOPTIONS from '@/assets/videoOptions';
import { Box } from '@mui/material';
import { VideoOptionCard } from './VideoOptionCard';

export const VideoOptionList: React.FC = () => {
  return (
    <Box
      py='10%'
      sx={{ backgroundColor: '#fff', textAlign: 'center' }}
      minWidth='100vw'
      minHeight='100vh'
    >
      <Box
        display='flex'
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent='center'
        gap='20px'
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {VIDEOOPTIONS.map((v, index) => (
          <VideoOptionCard key={index} data={v} />
        ))}
      </Box>
    </Box>
  );
};
