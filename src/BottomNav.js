import React ,{useState} from 'react'
import './BottomNav.css'



import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";

import SendIcon from "@material-ui/icons/Send";

import { makeStyles , } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';



function BottomNav() {
    const useStyles = makeStyles({
        root: {
         width:400,
          height:50,
          borderRadius :20,
          border : 2,
         backgroundColor :'#ffffff',
          marginTop:10,
          marginBottom:10,
          marginLeft:20,
          marginRight:10,
          color:'#000'
        },
        selected:{
            color:'#fff',
            border:'none'
        },
        label:{
            color:'#000'
        }
        
      });
      const classes = useStyles();
      const [value, setValue] = useState('home');
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
     
     
   
    return (
        <div className="bottom-nav">
         <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Explore" value="explore" icon={<ExploreIcon />} />
      <BottomNavigationAction label="Friends" value="friends" icon={<PeopleIcon />} />
      <BottomNavigationAction label="Messages" value="messages" icon={<SendIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />
    </BottomNavigation>
        </div>
    )
}

export default BottomNav
