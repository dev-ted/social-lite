import React ,{useState} from 'react'
import '../css/BottomNav.css'



import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";

import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";
import { makeStyles , } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ExploreIcon from '@material-ui/icons/Explore';
// import PersonIcon from '@material-ui/icons/Person';





function BottomNav() {
  const history = useHistory()
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
      <BottomNavigationAction  label="Home" value="home" icon={<HomeIcon />} onClick ={() => history.push('/') } />
      <BottomNavigationAction label="Explore" value="explore" icon={<ExploreIcon />  } onClick ={() => history.push('/explore')}/>
      <BottomNavigationAction label="Friends" value="friends" icon={<PeopleIcon />} onClick ={() => history.push('/friends')} />
      <BottomNavigationAction label="Messages" value="messages" icon={<SendIcon />} onClick ={() => history.push('/messages')} />
      {/* <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} onClick ={() => history.push('/profile')} /> */}
    </BottomNavigation>
        </div>
    )
}

export default BottomNav
