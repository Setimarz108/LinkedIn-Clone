import './HeaderOption.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderOption({title, Icon,avatar}) {
  return (

    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <AccountCircleIcon className="headerOption__icon" src={avatar}/>}
        <h3 className="headerOptionTitle">{title}</h3>
    </div>
  )
}

export default HeaderOption
