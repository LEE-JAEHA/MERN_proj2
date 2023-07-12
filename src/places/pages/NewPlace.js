import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './NewPlace.css';



const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  };

const NewPlace = () =>{
    const [formState,dispatch] = useReducer(formReducer,{
        inputs : {
            title:{
                value: "",
                isValid : false
            },
            description:{
                value: "",
                isValid : false
            }
        },
        isValid: false, 

    });

    const inputHandler = useCallback((id,value,isValid)=>{
        // 무한 루프를 피하기 위한 핵심이 되는 부분
        dispatch({
            type:"INPUT_CHANGE",
            value : value,
            isValid:isValid,
            inputId:id
        })
    },[] ); 
    // const descriptionInputHandler = useCallback((id,value,isValid)=>{

    // },[] ); 
    // 이렇게 구현하면 컴포넌트 함수가 재실행될 때마다
    // 이 함수가 다시 생성되고
    // 전과 같은 로직을 갖고 있더라도 새로운 함수 객체임
    // 자바스크립트 작동 원리
    // 이것을 막기 위해서 React에서 훅을 사용 => useCallback

    const placeSubmitHandler = event => {
        event.preventDefault(); // 양식을 제출하고 브라우저 기본 동작이 적용되면 안됨
    };



    return (
        <form className="place-form">
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
          </Button>
        </form>
      );
    };
    

export default NewPlace;