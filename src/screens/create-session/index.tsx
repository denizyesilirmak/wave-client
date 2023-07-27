import { useState } from "react";
import Seperator from "../../components/seperator";
import { MOCK_USERS } from "../../mocks/users";
import "./styles.css";

import { ReactComponent as AddPerson } from "../../assets/icons/add-person.svg";

type User = {
  name: string;
  email: string;
  role: string;
  id: string;
};

const CreateSession = () => {
  const [draggingUser, setDraggingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User | null>(null);
  const [sessionUsers, setSessionUsers] = useState<User[]>([]);

  const onDragStart = (e: any, user) => {
    setDraggingUser(user);
  };

  const onDragEnd = (e: any, user) => {
    console.log(newUser);
    if (!sessionUsers.includes(user)) {
      setSessionUsers([...sessionUsers, user]);
      setDraggingUser(null);
    }
  };

  const onDragEnter = (e: any, user) => {
    e.preventDefault();
    e.stopPropagation();
    setNewUser(user);
  };

  const onDragLeave = (e: any, user) => {
    // console.log(e);
    setNewUser(null);
  };

  const onDrawOver = (e: any, user) => {};

  return (
    <div className="create-session-container">
      <div className="create-session">
        <div className="contacts">
          <div className="contacts-header">Team</div>
          <Seperator />
          {MOCK_USERS.filter((user) => !sessionUsers.includes(user)).map(
            (user, index) => (
              <div
                draggable
                key={user.id}
                className={`contact ${
                  draggingUser?.id === user.id ? "dragging" : ""
                }`}
                onDragStart={(event) => onDragStart(event, user)}
                onDragEnd={(event) => onDragEnd(event, user)}
              >
                <div className="contact-name">{user.name}</div>
                <div className="contact-email">{user.email}</div>
                <div className="contact-role">{user.role}</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="create-session">
        <div
          className="contacts"
          onDragEnter={(event) => onDragEnter(event, draggingUser)}
          onDragLeave={(event) => onDragLeave(event, draggingUser)}
          onDragOver={(event) => onDrawOver(event, draggingUser)}
        >
          <div className="contacts-header">Session</div>
          <Seperator />
          {sessionUsers.map((user, index) => (
            <div key={user.id} className={`contact`}>
              <div className="contact-name">{user.name}</div>
              <div className="contact-email">{user.email}</div>
              <div className="contact-role">{user.role}</div>
            </div>
          ))}

          {newUser ? (
            <div className="contact new">
              <div className="contact-name">{newUser.name}</div>
              <div className="contact-email">{newUser.email}</div>
              <div className="contact-role">{newUser.role}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateSession;
