import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NAVITEMS from '@/assets/linkItems';
import Link from 'next/link';
import { Popper } from '@mui/material';
import styled from '@emotion/styled';

interface Props {}

const StyledPopper = styled(Popper)(({ theme }) => ({
  // You can replace with `PopperUnstyled` for lower bundle size.
  zIndex: 1,
  maxWidth: '60vw',
  maxHeight: '40vh',
  alignItems: 'center',
  opacity: 2,
  gap: '15px',
  flexWrap: 'wrap',
  borderRadius: '20px',
  boxShadow: ' 0px 22px 28px 6px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  //   backgroundColor: '#eeeeee ',
  backdropFilter: 'revert-layer',
  '&[data-popper-placement*="bottom"] .arrow': {
    top: 0,
    left: '90%',
    marginTop: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent #eeeeee transparent`,
    },
  },
  '&[data-popper-placement*="top"] .arrow': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.9em',
    width: '3em',
    height: '1em',
    '&::before': {
      borderWidth: '1em 1em 0 1em',
      borderColor: `#eeeeee transparent transparent transparent`,
    },
  },
  '&[data-popper-placement*="right"] .arrow': {
    left: 0,
    marginLeft: '1200px',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 1em 1em 0',
      borderColor: `transparent #eeeeee transparent transparent`,
    },
  },
  '&[data-popper-placement*="left"] .arrow': {
    right: 0,
    marginRight: '-0.9em',
    height: '3em',
    width: '1em',
    '&::before': {
      borderWidth: '1em 0 1em 1em',
      borderColor: `transparent transparent transparent #eeeeee`,
    },
  },
}));

const styles = {
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
};

const drawerWidth = 240;

const Navbar: React.FC<Props> = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [arrowRef, setArrowRef] = React.useState(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {NAVITEMS.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item.title}
                sx={{ fontFamily: 'Roboto' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const changeScrolledState = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeScrolledState);
  }

  return (
    <Box sx={{ position: 'relative', top: 0 }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: `${scrolled ? 'red' : 'transparent'}`,
          padding: `${scrolled ? '12px 15px' : 'transparent'}`,
          transition: 'all 250ms ease-in',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h6' component='div'>
            LOGO
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '30%',
              gap: '15px',
            }}
          >
            {NAVITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{
                  pointerEvents: !item.clickable ? 'none' : 'auto',
                  cursor: !item.clickable ? 'default' : 'pointer',
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                <Typography
                  fontFamily='Roboto'
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup='true'
                  onMouseEnter={item.popover ? handlePopoverOpen : undefined}
                  onMouseLeave={item.popover ? handlePopoverClose : undefined}
                >
                  {item.title}
                </Typography>

                <StyledPopper
                  open={open}
                  anchorEl={anchorEl}
                  placement='bottom-end'
                  sx={{ backgroundColor: 'red' }}
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 20],
                      },
                    },
                  ]}
                >
                  <Box
                    component='span'
                    className='arrow'
                    ref={setArrowRef}
                    sx={styles.arrow}
                  />

                  {item.subItems?.map((s, index) => (
                    <Link href={s.href} key={index}>
                      <Box>a</Box>
                    </Link>
                  ))}
                </StyledPopper>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor='right'
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
