import React, { useSyncExternalStore } from 'react';

import UserList from '../components/UserList';

const Users = () =>{
    const Users =[
        {
            id:"u1",
            name:"jaeha",
            image:"https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png",
            places:3
        }
    ];
    return <UserList items={Users}/>;
};

export default Users;