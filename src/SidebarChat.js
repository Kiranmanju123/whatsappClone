import React, { useState, useEffect } from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

function SidebarChat({addNewChat}) {

    const [seed,setSeed] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random() * 5000)); 
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter the room name");

        if(roomName) {
            // do stuff in database
        }

    }


    return !addNewChat ? (
        <div className="sideBarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="sidebarchat_info">
            <h2>Room name</h2>
            <p>Last message..</p>
        </div>
        </div>

    ) :(
        <div onClick={createChat} className="sideBarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat;