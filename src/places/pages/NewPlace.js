import React, { useSyncExternalStore } from 'react';

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input"
const NewPlace = () =>{
    return <form className="place-form">
        {/* <Input type = "text" label="Title" validators={[]} onChange={} ></Input> */}
        <Input element="input" type = "text" label="Title" />

    </form>;


};

export default NewPlace;