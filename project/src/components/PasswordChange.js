import React, { useState } from "react";
import User from '../JSON/User.js';
import { useParams } from "react-router-dom";

export default function PasswordChange() {
  const { id } = useParams();

  // 특정 사용자의 비밀번호 가져오기 (find를 쓰면 배열이 아닌 값만 딱 가져올 수 있어!)
  const userData = User.find((list) => id === list.id);
  const correctPw = userData ? userData.pw : null;

  const [newPw, setNewPw] = useState('');
  const [newRight, setNewRight] = useState(null); // 초기값 null로 설정해서 첫 화면엔 메시지 안 뜨게!
  const [originRight, setOriginRight] = useState(false);
  const [originPw, setOriginPw] = useState('');
  const [morePw, setMorePw] = useState('');

  const isRight = () => {
    if (originPw === correctPw) {
      setOriginRight(true);
    } else {
      setOriginRight(false);
      alert("현재 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="account-settings-container">
      <h2 className="settings-title">비밀번호 변경</h2>

      {/* 1단계: 기존 비밀번호 확인 */}
      {!originRight ? (
        <InputOriginPw 
          isRight={isRight} 
          originPw={originPw} 
          setOriginPw={setOriginPw} 
        />
      ) : (
        /* 2단계: 새 비밀번호 설정 */
        <SetNewPw 
          newPw={newPw} 
          setNewPw={setNewPw} 
          newRight={newRight} 
          setNewRight={setNewRight} 
          morePw={morePw} 
          setMorePw={setMorePw} 
        />
      )}
    </div>
  );
}

// 기존 비밀번호 입력 컴포넌트
function InputOriginPw({ isRight, originPw, setOriginPw }) {
  return (
    <div className="input-group">
      <label className="section-label">현재 비밀번호 확인</label>
      <input 
        type="password" 
        className="settings-input"
        placeholder="기존 비밀번호를 입력해주세요" 
        value={originPw}
        onChange={(e) => setOriginPw(e.target.value)} 
      />
      <button className="save-btn" onClick={isRight}>비밀번호 확인</button>
    </div>
  );
}

// 새 비밀번호 설정 컴포넌트
function SetNewPw(props) {
  const checkPw = () => {
    if (props.newPw === props.morePw && props.newPw !== "") {
      props.setNewRight(true);
    } else {
      props.setNewRight(false);
    }
  };

  return (
    <div className="input-group">
      <label className="section-label">새 비밀번호</label>
      <input 
        type="password" 
        className="settings-input"
        placeholder="새로운 비밀번호" 
        value={props.newPw}
        onChange={(e) => props.setNewPw(e.target.value)} 
      />
      
      <div style={{ marginTop: '15px' }}></div>
      
      <label className="section-label">새 비밀번호 확인</label>
      <input 
        type="password" 
        className="settings-input"
        placeholder="다시 한번 입력" 
        value={props.morePw}
        onChange={(e) => props.setMorePw(e.target.value)} 
      />
      
      <button className="save-btn" onClick={checkPw} style={{ marginTop: '20px' }}>
        변경 완료
      </button>

      {props.newRight === true && (
        <p style={{ color: '#ff7a1b', fontSize: '14px', marginTop: '10px', fontWeight: 'bold' }}>
          ✨ 비밀번호가 성공적으로 변경되었습니다!
        </p>
      )}
      {props.newRight === false && (
        <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '10px' }}>
          ❌ 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.
        </p>
      )}
    </div>
  );
}