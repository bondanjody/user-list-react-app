import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from './ErrorModal.module.css';


const ErrorModal = props => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <div className={classes.actions}>
                    <Button onClick={props.onOK}>OK</Button>
                </div>
                
            </Card>
        </div>
    );
}

export default ErrorModal;