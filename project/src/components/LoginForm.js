import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../User.js";

const LoginForm = ()=>{

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [idError, setIdError] = useState('')
    const [pwError, setPwError] = useState('')

    const [userList, setUserList] = useState([])
    useEffect( ()=>{
        setUserList(User,[])
    } )

    const resetError = ()=>{
        setIdError('')
        setPwError('')
    }

    const checkLogin = ()=>{
        let isValid = true;

        if( !id ){
            setIdError('아이디를 입력하세요')
            isValid = false;
        }

        if( !pw ){
            setPwError('비밀번호를 입력하세요')
            isValid = false;
        }

        return isValid;

    }

    //user가 이미 이모션을 선택했는지 확인하는 메서드
    const checkSelection = ()=>{
        const user = userList.find( (user)=> user.id === id && user.pw === pw )

        return user.isSetting;
    }

    const navigate = useNavigate();

    const onSubmit = (e)=>{
        e.preventDefault()

        resetError()

        if( !checkLogin() ){
            return;
        }
        else{
            const user = userList.find( (user)=> user.id === id && user.pw === pw )

            if(user){
                
                {checkSelection() ? 
                    navigate("/main/" + id)
                : 
                    navigate("/selectEmotion/" + id )
                }
            }
        }

        

    }/* onSubmit */

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input value={id}
                            onChange={(e)=>{setId(e.target.value)}}
                            placeholder="ID"/>
                </div>
                <div>{idError}</div>
                <div>
                    <input value={pw}
                            onChange={(e)=>{setPw(e.target.value)}}
                            placeholder="password"/>
                </div>
                <div>{pwError}</div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm