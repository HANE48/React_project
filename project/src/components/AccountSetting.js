import React, { useState } from "react";

import "../styles/AccountSetting.css"; 

const AccountSetting = () => {
  
  const [selectedEmoji, setSelectedEmoji] = useState("😊");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const emojis = ["😄", "😊", "🤨", "😔", "😫", "😎", "🥰", "🤔"];

  return (
    <div className="account-settings-container">
      <h2 className="settings-title">계정 설정</h2>

      {/* 프로필 이모지 섹션 */}
      <div className="profile-section">
        <label className="section-label">프로필 이모지</label>
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

      {/* 닉네임 입력 섹션 */}
      <div className="input-group">
        <label className="section-label">닉네임</label>
        <input 
          type="text" 
          className="settings-input" 
          placeholder="닉네임을 입력하세요" 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
        />
        <p className="char-count">{nickname.length}/20자</p>
      </div>

      {/* 이메일 입력 섹션 */}
      <div className="input-group">
        <label className="section-label">이메일</label>
        <input 
          type="email" 
          className="settings-input" 
          placeholder="example@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="save-btn">저장하기</button>
    </div>
  );
};

export default AccountSetting;
