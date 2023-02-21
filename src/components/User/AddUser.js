import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [usernameValue, setUsernameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameHandler = event => {
        setUsernameValue(event.target.value);
    }

    const ageHandler = event => {
        setAgeValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
            return;
        }
        if (+ageValue <= 0) {
            return;
        }
        // Melakukan lifting up dari data yang sudah diinputkan
        props.onAddUser({
            id: Math.random().toString(),
            name: usernameValue,
            age: ageValue
        });

        setUsernameValue('');
        setAgeValue('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" value={usernameValue} onChange={usernameHandler} type="text" />
                <label htmlFor="age">Age (year)</label>
                <input id="age" value={ageValue} onChange={ageHandler} type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>  
    )
}

export default AddUser;