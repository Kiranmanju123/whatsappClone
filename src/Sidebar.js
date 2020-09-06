import React from 'react'
import './Sidebar.css'
import {Avatar,IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import SidebarChat from "./SidebarChat"


function Sidebar() {
    return (
        <div className="sidebar">
            
           <div className="sidebar_header">
                <Avatar/>
                <div className="header_icons">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                    <ChatIcon/>
                    </IconButton>

                    <IconButton>
                    <MoreVertIcon/> 
                    </IconButton>         
                </div>
            </div>

           <div className="sidebar_search">
               <div className="search_container">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search"/>
               </div>
           </div>

           <div className="sidebar_chats">
               <SidebarChat addNewChat/>
               <SidebarChat />
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               

           </div>

        </div>

    );
}

export default Sidebar