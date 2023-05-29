import React, { useSyncExternalStore } from 'react';

import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom";



const DUMMY_PLACES = [
    {
        id:"P1",
        title:"Empire State Building",
        description:"One of the most famous sky",
        imageUrl:"https://i.namu.wiki/i/g0UUQVxY7YSPfORnHGzAO2B3sydw2zb3zpV-82gbemYh--Q-WhRyoHksevdQxeHqACO-b8MNzHbx_vmrB1G2enPsIovL2fO2Z0iUIEV_dXaG5kmHrWhJRFmglDm6BwYvKn0gQBU3wguIP09gOFGp2A.webp",
        address : "20 W 34th St., New York, NY 10001",
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:"u1"
    },
    {
        id:"P1",
        title:"Empire State Building",
        description:"One of the most famous sky",
        imageUrl:"https://i.namu.wiki/i/g0UUQVxY7YSPfORnHGzAO2B3sydw2zb3zpV-82gbemYh--Q-WhRyoHksevdQxeHqACO-b8MNzHbx_vmrB1G2enPsIovL2fO2Z0iUIEV_dXaG5kmHrWhJRFmglDm6BwYvKn0gQBU3wguIP09gOFGp2A.webp",
        address : "20 W 34th St., New York, NY 10001",
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:"u2"
    },
]

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadPlaces = DUMMY_PLACES.filter(
        places=>places.creator == userId
    );
    return <PlaceList items={loadPlaces}/>;


};

export default UserPlaces;