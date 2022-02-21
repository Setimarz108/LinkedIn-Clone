import './HeaderOption.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({title, Icon, avatar, onClick}) {

  
  const user = useSelector(selectUser)

  return (

    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && (<AccountCircleIcon className="headerOption__icon" >
             {user?.email[0]}
            </AccountCircleIcon>)}
        
        <h3 className="headerOptionTitle">{title}</h3>
    </div>
  )
}

export default HeaderOption
