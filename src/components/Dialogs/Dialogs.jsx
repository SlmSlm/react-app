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
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Dasha" },
    { id: 5, name: "Irka" },
    { id: 6, name: "Sasha" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Hola" },
    { id: 6, message: "Guten Morgen!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
