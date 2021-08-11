import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) { 
    props.setUsers([
      {
        id: 1,
        photoURL: "https://oper.ru/static/data/gallery/l1048753984.jpg",
        followed: true,
        fullName: "Dmitry",
        status: "I am a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoURL: "https://oper.ru/static/data/gallery/l1048753984.jpg",
        followed: true,
        fullName: "Katya",
        status: "I am a shrimp monster",
        location: { city: "Lemberg", country: "Ukraine" },
      },
      {
        id: 3,
        photoURL: "https://oper.ru/static/data/gallery/l1048753984.jpg",
        followed: true,
        fullName: "Mario",
        status: "I am a shitter",
        location: { city: "Chervonograd", country: "Ukraine" },
      },
      {
        id: 4,
        photoURL: "https://oper.ru/static/data/gallery/l1048753984.jpg",
        followed: false,
        fullName: "Viktor",
        status: "I am a sad racoon",
        location: { city: "Lviv", country: "Ukraine " },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} alt="ava" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.statusx}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
