import React, { useSyncExternalStore } from 'react';

import "./UserList.css"
import UserItem from './UserItem';
const UserList = props  =>{
    // 사용자가 있고 없고 차이로
    // 여기서는 Props에 컴포넌트를 Item 으로 지정 
    if(props.items.length ===0 ){
        return <div className="center">
            <h2>No Users</h2>
        </div>
    }
    return( 
        <ul className="users-list">
            {props.items.map(user=>{
                return <UserItem 
                    key = {user.id} 
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            })}
        </ul>
    )
};

export default UserList;