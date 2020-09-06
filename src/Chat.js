import React, { useState, useEffect } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVert from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"

function Chat() {

    const [seed , setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random() * 5000)); 
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`your message is ---- ${input} `)
        setInput("");

    }

    return(
       <div className="chat">

          <div className="chat_header">
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
              <div className="chat_header_info">
                  <h3>Room name</h3>
                  <p>Last seen at...</p>
              </div>

              <div className="chat_header_icon">
                  <IconButton>
                    <SearchOutlined/>
                  </IconButton>
                   
                  <IconButton>
                    <AttachFile/>      
                  </IconButton>

                  <IconButton>
                    <MoreVert/>
                  </IconButton>
              </div>
          </div>

          <div className="chat_body">
            <p className={`chat_message ${true && "chat_reciever"}`}>  
            <span className="chat-name">Kiran</span>  
            Hey guys
            <span className="chat_timestamp">3.52pm</span>
            </p>
          </div>

          <div className="chat_footer">
            <IconButton>
              <InsertEmoticonIcon/>
            </IconButton>    
              <form>
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a Message"/>
                  <button type="submit" onClick={sendMessage} >Send</button>
              </form>
              <IconButton>
                <MicIcon/>
              </IconButton>

          </div>
       </div>
    )
}

export default Chat