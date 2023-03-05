import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import "./Feed.css"
import Post from "./Post";
function Feed() {
    const[posts, setPosts] = useState([])
    const sendPost = (e) => {}
  return (
    <div clasName="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input type="text" />
                    <button type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                <InputOption
                    title="Write article"
                    Icon={CalendarViewDayIcon}
                    color="#7FC15E"
                />
            </div>
        </div>
        {posts.map((posts)=>(
            <Post/>
        ))}
        <Post name="dinesh" 
        description="this is a test"
        mesasges="meassges"

        />
    </div>
  )
}

export default Feed