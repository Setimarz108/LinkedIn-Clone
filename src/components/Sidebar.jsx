import "./Sidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Sidebar() {

  const user = useSelector(selectUser)

    const recentItem = (topic) => {
       return  <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <AccountCircleIcon src={user.photoUrl} className="sidebar_avatar" >
          {user.photoUrl}
        </AccountCircleIcon>
        <h2> {user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who wiewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p> Recent</p>
        {recentItem("react")}
        {recentItem('programming')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}
