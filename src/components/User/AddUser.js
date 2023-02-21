import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (year)</label>
                <input id="age" type="number" />
                <button>Add User</button>
            </form>
        </Card>  
    )
}

export default AddUser;