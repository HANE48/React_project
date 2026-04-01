import React, { use, useState } from "react";
import User from './JSON/User.js'
import { useParams } from "react-router-dom";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
// 비밀번호 변경

export default function PasswordChange() {
    const { id } = useParams();

    let pw = User.map((list) => {
        if (id === list.id) {
            return list.pw
        }
    })

    const [newPw, setNewPw] = useState('');
    const [newRight, setNewRight] = useState(true);
    const [originRight, setOriginRight] = useState(false);
    const [originPw, setOriginPw] = useState('');
    const [morePw, setMorePw] = useState('');

    const isRight = () => {
        if (originPw === pw[0]) {
            setOriginRight(true);
        } else {
            setOriginRight(false);
        }
    }

    console.log(originPw);
    console.log(pw[0]);

    return (
        <div>

            {/* 기존 비밀번호 입력창 */}
            <InputOriginPw isRight={isRight} originPw={originPw} setOriginPw={setOriginPw} />
            {
                originRight ? <SetNewPw newPw={newPw} setNewPw={setNewPw} newRight={newRight} setNewRight={setNewRight} morePw={morePw} setMorePw={setMorePw} />
                    : <div>비밀번호가 틀렸습니다</div>
            }




        </div>
    )
}//passwordChange

function InputOriginPw(props) {
    return (
        <div>
            <h2>비밀번호 확인</h2>
            <input type="password" placeholder="기존 비밀번호를 입력해주세요" value={props.originPw}
                onChange={(e) => { props.setOriginPw(e.target.value) }} />
            <button onClick={props.isRight}>확인</button>
        </div>
    );
}

function SetNewPw(props) {
    const checkPw = () => {
        if (props.newPw === props.morePw) {
            props.setNewRight(true);
        } else {
            props.setNewRight(false);
        }
    }


    return (
        <div>
            <h2>비밀번호 변경</h2>
            <input type="password" placeholder="새로운 비밀번호를 입력해주세요" value={props.newPw}
                onChange={(e) => { props.setNewPw(e.target.value) }} />
            <br />
            <input type="password" placeholder="다시 한번 입력해 주세요" value={props.morePw}
                onChange={(e) => { props.setMorePw(e.target.value) }} />
            <button onClick={checkPw}>확인</button>
            {
                props.newRight ? <p>비밀번호가 변경되었습니다.</p> : <p>비밀번호가 다릅니다</p>
            }
        </div>
    );

}
