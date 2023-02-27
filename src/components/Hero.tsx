import { Box } from '@mui/material';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  backgroundIMG?: string;
  backgroundVIDEO?: string;
  backgroundColor: string;
  children: React.ReactNode;
  mh: string;
}

const Hero: React.FC<Props> = (props) => {
  const { backgroundColor, children, backgroundIMG, backgroundVIDEO, mh } =
    props;
  return (
    <Box minWidth='100%' minHeight={mh}>
      <div
        style={{
          overflow: 'hidden',
          zIndex: -10,
          top: 0,
          left: 0,
          width: '100%',
          position: 'absolute',
          height: '100%',
        }}
      >
        {backgroundVIDEO && (
          <video
            src={backgroundVIDEO}
            autoPlay
            playsInline
            loop
            muted
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          ></video>
        )}
        {backgroundIMG && <img src={backgroundIMG} alt='Hero Img' />}
      </div>
      <div
        style={{
          opacity: 0.77,
          backgroundColor: backgroundColor,
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
      ></div>
      <Box>{children}</Box>
    </Box>
  );
};

export default Hero;
