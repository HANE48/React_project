import React, { useState } from "react";

import "../styles/AccountSetting.css"; 

const AccountSetting = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("😄");
  const emojis = ["😄", "😊", "🤨", "😔", "😫", "😎", "🥰", "🤔"];

  return (
    <div className="account-settings-container">
      <h2 className="settings-title">계정 설정</h2>
      <div className="profile-section">
        <label className="section-label">프로필 이미지</label>
        <div className="profile-edit-area">
          <div className="main-profile-box">
            <span className="main-emoji">{selectedEmoji}</span>
          </div>
          <div className="emoji-grid">
            {emojis.map((emoji, index) => (
              <button 
                key={index} 
                className={`emoji-btn ${selectedEmoji === emoji ? "active" : ""}`}
                onClick={() => setSelectedEmoji(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
   
      <button className="save-btn">저장하기</button>
    </div>
  );
};


export default AccountSetting;
