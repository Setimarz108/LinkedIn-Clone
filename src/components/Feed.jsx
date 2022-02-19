import React from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/Event"
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption'
function Feed() {
  return (
      <div className="feed">
    <div className="feed__inputContainer">
         <div className="feed__input">
             <CreateIcon/>
             <form>
                 <input type="text" />
                 <button type="submit" className="">Send</button>
             </form>
         </div>

         <div className="feed__inputOptions">
            <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
            <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
            <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
            <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E' />

         </div>
    </div>
    
    </div>
  )
}

export default Feed