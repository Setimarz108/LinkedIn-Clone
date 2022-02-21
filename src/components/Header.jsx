import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header"> 
       
       <div className="header__left">
           <img src="https://i.pinimg.com/originals/ce/09/3c/ce093c7214ad357bb665cfd2f66a8b6b.png" alt="" />

           <div className="header__search">
               <SearchIcon/>
             <input placeholder="Search" type="text" />
           </div>
       </div>
       
       <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={NotificationsIcon } title="Messages"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="Notifications"/>
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/
          C4E03AQEnjBIeFQea7Q/profile-displayphoto-shrink_400_400/0/1640529956550?e=1649894400&
          v=beta&t=c7SKxye89Z98gIztdsIGGMNqwmIVbYPQPHSXVecNmzo" title="Me"/>
       </div>
    </div>
  )
}

export default Header