import React, { useState } from "react";
import "../styles/AccountSetting.css"; 

const AccountSetting = () => {
  // 사용자가 선택한 이모지를 기억하는 상태 (기본값: 😄)
  const [selectedEmoji, setSelectedEmoji] = useState("😄");

  const emojis = ["😄", "😊", "🤨", "😔", "😫", "😎", "🥰", "🤔"];

  return (
    <div className="account-settings-container">
      <h2 className="settings-title">계정 설정</h2>

      {/* 1. 프로필 이미지 섹션 */}
      <div className="profile-section">
        <label className="section-label">프로필 이미지</label>
        
        <div className="profile-edit-area">
          {/* 왼쪽: 현재 내가 고른 큰 이모지 */}
          <div className="main-profile-box">
            <span className="main-emoji">{selectedEmoji}</span>
          </div>
          
          {/* 오른쪽: 선택할 수 있는 작은 이모지 그리드 */}
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

      {/* 2. 닉네임 입력 섹션 */}
      <div className="input-group">
        <label className="section-label">닉네임</label>
        <input 
          type="text" 
          className="settings-input" 
          placeholder="닉네임을 입력하세요" 
        />
        <p className="char-limit">0/20자</p>
      </div>

      {/* 3. 이메일 입력 섹션 */}
      <div className="input-group">
        <label className="section-label">이메일</label>
        <input 
          type="email" 
          className="settings-input" 
          placeholder="example@email.com" 
        />
      </div>

      {/* 4. 저장 버튼 */}
      <button className="save-btn">저장하기</button>
    </div>
  );
};

export default AccountSetting;