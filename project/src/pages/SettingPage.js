import React, { useState } from "react";

import "./SettingPage.css"; 


import AccountSetting from "../components/AccountSetting";
import PasswordChange from "../components/PasswordChange";
import NotificationSetting from "../components/NotificationSetting";
import OtherSetting from "../components/OtherSetting";

const SettingPage = () => {
  const [activeMenu, setActiveMenu] = useState("account");

  // 왼쪽 메뉴 클릭 시 오른쪽 영역에 보여줄 컴포넌트를 결정
  const renderContent = () => {
    switch (activeMenu) {
      case "account":
  
        return <AccountSetting />;
      case "password":
        return <PasswordChange />;
      case "notification":
        return <NotificationSetting />;
      case "other":
        return <OtherSetting />;
      default:
        return <AccountSetting />;
    }
  };

  return (
    <div className="setting-page-container">
      {/* 왼쪽 사이드바 영역 */}
      <aside className="setting-sidebar">
        <h3 className="sidebar-title">설정</h3>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeMenu === "account" ? "active" : ""}`}
            onClick={() => setActiveMenu("account")}
          >
            👤 계정 설정
          </button>
          <button 
            className={`nav-item ${activeMenu === "password" ? "active" : ""}`}
            onClick={() => setActiveMenu("password")}
          >
            🔒 비밀번호 변경
          </button>
          <button 
            className={`nav-item ${activeMenu === "notification" ? "active" : ""}`}
            onClick={() => setActiveMenu("notification")}
          >
            🔔 알림 설정
          </button>
          <button 
            className={`nav-item ${activeMenu === "other" ? "active" : ""}`}
            onClick={() => setActiveMenu("other")}
          >
            ⚙️ 기타
          </button>
        </nav>
      </aside>

      <main className="setting-content">
        {renderContent()}
      </main>
    </div>
  );
};


export default SettingPage;