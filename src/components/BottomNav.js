import {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import WomanRoundedIcon from '@mui/icons-material/WomanRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';



export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  
  

  return (
    <Box sx={{ pb: 7,width: "",  display:{xl:'none', md:'none'} }} ref={ref}>
      <CssBaseline />      
      <Paper sx={{  color: 'blue', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        sx={{  color: 'blue', backgroundColor:'#1E212D'}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >          
        <BottomNavigationAction sx={{color: '#FAF3E0'}} label="Home" icon={<Link to='/'><HomeRoundedIcon /></Link>} />
        <BottomNavigationAction sx={{color: '#FAF3E0', }} label="Dama" icon={<Link to='/productos/dama'><WomanRoundedIcon /></Link>} />
        <BottomNavigationAction sx={{color: '#FAF3E0'}}  label="Caballero" icon={<Link to='/productos/caballero'><ManRoundedIcon /></Link>} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}




