// import {useState} from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// export default function LabelBottomNavigation() {
//   const [value, setValue] = useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
//       <BottomNavigationAction
//         label="Recents"
//         value="recents"
//         icon={<RestoreIcon />}
//       />
//       <BottomNavigationAction
//         label="Favorites"
//         value="favorites"
//         icon={<FavoriteIcon />}
//       />
//       <BottomNavigationAction
//         label="Nearby"
//         value="nearby"
//         icon={<LocationOnIcon />}
//       />
//       <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
//     </BottomNavigation>
//   );
// }

import {useState, useRef, useEffect} from 'react';
import { Link, Router } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

import WomanRoundedIcon from '@mui/icons-material/WomanRounded';
import ManRoundedIcon from '@mui/icons-material/ManRounded';


function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [messages, setMessages] = useState(() => refreshMessages());

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

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
          {/* <BottomNavigationAction label="Dama" icon={<FemaleIcon />} />
          <BottomNavigationAction label="Caballero" icon={<MaleIcon />} /> */}
          
         <BottomNavigationAction sx={{color: '#FAF3E0', }} label="Dama" icon={<Link to='/productos/calzado-dama'><WomanRoundedIcon /></Link>} />
          <BottomNavigationAction sx={{color: '#FAF3E0'}}  label="Caballero" icon={<ManRoundedIcon />} />
          <BottomNavigationAction sx={{color: '#FAF3E0'}} label="Archive" icon={<ArchiveIcon />} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  }];


