import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector} from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';


function Header() {

  const dispatch = useDispatch();

  const logOutofApp = () => {
    
     dispatch(logout())
     auth.signOut()

  }
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
          <HeaderOption  avatar={true} title="Me"
          onClick={logOutofApp}/>
       </div>
    </div>
  )
}

export default Header