import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from './AddUser.module.css';
import styles from '../UI/ErrorModal.module.css';



const AddUser = (props) => {
    const [errorState, setErrorState] = useState();
    const [usernameValue, setUsernameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const nameRef = useRef();
    const ageRef = useRef();


    const errorHandler = () => {
        setErrorState();
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredUsername = nameRef.current.value;
        const enteredAge = ageRef.current.value;

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorState({
                title: "Error Username",
                message: "You input an invalid username !"
            });
            return;
        }
        if (+enteredAge <= 0) {
            setErrorState({
                title: "Error age",
                message: "You input an invalid age !"
            });
            return;
        }
        // Melakukan lifting up dari data yang sudah diinputkan
        props.onAddUser({
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge
        });
        // Reset input field
        nameRef.current.value = '';
        ageRef.current.value = '';
    }

    return (
        <>
            {errorState && <ErrorModal title={errorState.title} message={errorState.message} onOK={errorHandler} />}
            <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={nameRef} />
                <label htmlFor="age">Age (year)</label>
                <input id="age" type="number" ref={ageRef} />
                <Button type="submit">Add User</Button>
            </form>
            </Card> 
        </>
         
    )
}

export default AddUser;