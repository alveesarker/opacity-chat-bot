import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({displayMenu, setDisplayMenu, displayWidth}) => {
  
  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  

  return (
    <div className="sidebar" style={displayMenu || displayWidth>700 ? {display:"inline-flex"} : {display:"none"}}>
      <RxCross2 className="cross-icon" onClick={() => setDisplayMenu(false)} />
      <div className="top">
      <h4 style={{backgroundColor:"white", fontWeight:"400",fontSize:"20px", letterSpacing:"3px"}}>OPACITY <br /> CHAT A.I+</h4>
        <div onClick={() => newChat()} className="new-chat">
          <p style={{backgroundColor:"#5662f6", color:"white"}}>+</p>
          <p style={{backgroundColor:"#5662f6", color:"white"}}>New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent conversations</p>
          {previousPrompt.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <img style={{backgroundColor:"white"}} src={assets.message_icon} alt="" />
                <p style={{backgroundColor:"white"}}>{item.slice(0, 10)}...</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img style={{backgroundColor:"white"}} src={assets.question_icon} alt="" />
          <p style={{backgroundColor:"white"}}>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img style={{backgroundColor:"white"}} src={assets.history_icon} alt="" />
          <p style={{backgroundColor:"white"}}>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img style={{backgroundColor:"white"}} src={assets.setting_icon} alt="" />
          <p style={{backgroundColor:"white"}}>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
