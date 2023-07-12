import React, { useSyncExternalStore } from 'react';

import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom";



const DUMMY_PLACES = [
    {
        id:"P1",
        title:"Empire State Building",
        description:"One of the most famous sky",
        imageUrl:"https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/1ba66e6d-5f3c-45ed-a250-b51abbd01e63.jpeg",
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
        imageUrl:"https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/1ba66e6d-5f3c-45ed-a250-b51abbd01e63.jpeg",
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