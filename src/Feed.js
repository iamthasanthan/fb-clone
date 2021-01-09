import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
            profilePic="https://yt3.ggpht.com/ytc/AAUvwngx31yYEVpa8dzZYNoNPonSFO3x1uwpQrj4JMMo-Q=s900-c-k-c0x00ffffff-no-rj"
            message="Wow This Works"
            timestamp="This is a Time Stamp"
            username="Thasanthan"
            image="https://yt3.ggpht.com/ytc/AAUvwngx31yYEVpa8dzZYNoNPonSFO3x1uwpQrj4JMMo-Q=s900-c-k-c0x00ffffff-no-rj"
            />
            <Post 
            profilePic="https://yt3.ggpht.com/ytc/AAUvwngx31yYEVpa8dzZYNoNPonSFO3x1uwpQrj4JMMo-Q=s900-c-k-c0x00ffffff-no-rj"
            message="Its Crazy"
            timestamp="This is a Time Stamp"
            username="Thasanthan"
            image="https://wallpaperaccess.com/full/832357.jpg"
            />
            <Post
            message="Hello Guys"
            />
        </div>
    )
}

export default Feed
