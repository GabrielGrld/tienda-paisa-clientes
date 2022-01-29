import { Link } from 'react-router-dom';
import { useState } from 'react';

//Material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

//Iconst Component
import StoreIcon from '@mui/icons-material/Store';

// Style
import './NavBar.css'

const pages = [{name:"Calzado Dama", link:"calzado-dama"}, {name:'Calzado Caballero', link:'calzado-caballero'}, {name:'Pantalon Dama', link:'pantalon-dama'}, {name:'Pantalon Caballero', link:'pantalon-caballero'}, {name:'Camiseta Caballero', link:'camiseta-caballero'} ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ background: '#1E212D', color:'#FAF3E0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <div  >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/'> Paisa Store Cartagena{' '}<StoreIcon />  </Link>
          </Typography>
            </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem  key={page} >
                
                  <div >
                  <Typography textAlign="center" ><Link to={`/productos/${page.link}`}>{page.name}</Link> </Typography>
                  </div>                  
                </MenuItem>
                
              ))}
            </Menu>
          </Box>

          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          ><div >
            <Link to='/'>Paisa Store <StoreIcon /> </Link></div>
          </Typography>

          
          <Box className="top-menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            {pages.map((page) => (

              <div key={page}  className="menu-item">
              <Typography textAlign="center" ><Link to={`/productos/${page.link}`}>{page.name}</Link> </Typography>
              </div>

            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;