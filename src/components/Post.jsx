import { Avatar } from "@mui/material";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import InputOption from "./InputOption";


function Post({ name, description, message, photoUrl }) {

    

  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
          <p>{message}</p>
      </div>

      <div className="post__buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title={'like'}/>
          <InputOption Icon={ChatOutlinedIcon} title={'Comment'}/>
          <InputOption Icon={ShareOutlinedIcon} title={'Share'}/>
          <InputOption Icon={SendOutlinedIcon} title={'Send'}/>
      </div>
    </div>
  );
}

export default Post;
