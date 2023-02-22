import React from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
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
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onOK} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.title} onOK={props.onOK} />, document.getElementById('modaloverlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;