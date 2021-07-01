import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Katya" id="3" />
        <DialogItem name="Dasha" id="4" />
        <DialogItem name="Irka" id="5" />
        <DialogItem name="Sasha" id="6" />
      </div>
      <div className={style.messages}>
      <Message message="Hi" />
      <Message message="How are u?" />
      <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
