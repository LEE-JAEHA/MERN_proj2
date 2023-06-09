import React, {useState,useReducer,useEffect} from 'react';
import "./Input.css";
import { validate } from '../../util/validators';
import { VALIDATOR_REQUIREd } from '../../util/validators';
const inputReducer = (state,action)=> {
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                value:action.val,
                isValid: validate(action.val, action.validators)
            };
        case "TOUCH": {
            return{
                ...state,
                isTouched : true
            }
        }
        default :
            return state;
    }
};

const Input = props =>{ 
    const [inputState, dispatch] = useReducer( inputReducer, {
        value: "",
        isValid: false ,
        isTouched:false
    } );

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(()=> {
        onInput(id,value,isValid)
    },[id,value,isValid,onInput]); // [] 의존성 배열
    // },[props, inputState]); 
    // - [] 의존성 배열
    // - 위처럼 하면 너무 자주 바뀌게 된다.


    // 컴포넌트 리랜더링
    const changeHandler = event =>{
        dispatch({
            type:"CHANGE",
            val:event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () =>{
        dispatch({
            type:"TOUCH"
        });
    };



    // const [enteredValue,setEnteredValue]=useState("");
    // const [isValid,setIsValid]=useState(false);
    // // const [isTouched,setIsTouched]=useState(false);


    const element = 
    props.element === "input" ? ( 
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur ={touchHandler}
        value={inputState.value}
    />) :
    (<textarea 
        id={props.id} 
        row = {props.rows || 3 } 
        onChange={changeHandler} 
        onBlur={touchHandler}
        value={inputState.value}
    /> );



    return (
        <div className ={`form-control 
        ${
            !inputState.isValid && 
            inputState.isTouched &&
        'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {! inputState.isValid && 
            inputState.isTouched &&
            <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;