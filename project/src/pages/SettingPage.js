import React, { useState } from "react";
import "./SettingPage.css"; 

import AccountSetting from "../components/AccountSetting";
import PasswordChange from "../components/PasswordChange";
import NotificationSetting from "../components/NotificationSetting";
import OtherSetting from "../components/OtherSetting";

const SettingPage = () => {
  // 초기값을 "account"로 설정
  const [activeMenu, setActiveMenu] = useState("account");

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
      <aside className="setting-sidebar">
        <h3 className="sidebar-title">설정</h3>
        <nav className="sidebar-nav">
          {/* 계정 설정: 초기값이 "account"이므로 처음부터 active 클래스가 붙음 */}
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