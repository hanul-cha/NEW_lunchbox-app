import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux';
import UserAction from '../src/actions/UserAction';

const UserInfo = () => {
    const dispatch = useDispatch();
    const route = useRouter()
    const runLogout = () => {
        window.localStorage.removeItem('userInfo');
        dispatch(UserAction(null));
        route.push("/");
    }
  return (
    <div>
        <button onClick={runLogout}>로그아웃</button>
    </div>
  )
}

export default UserInfo