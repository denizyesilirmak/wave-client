import { DragEvent, useState } from "react";
import Seperator from "../../components/seperator";
import { MOCK_USERS } from "../../mocks/users";
import "./styles.css";

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

  const onDragStart = (e: DragEvent<HTMLDivElement>, user: User | null) => {
    setDraggingUser(user);
  };

  const onDragEnd = (e: DragEvent<HTMLDivElement>, user: User | null) => {
    if (!user) return;

    if (!sessionUsers.includes(user)) {
      setSessionUsers([...sessionUsers, user]);
      setDraggingUser(null);
    }
  };

  const onDragEnter = (e: DragEvent<HTMLDivElement>, user: User | null) => {
    e.preventDefault();
    e.stopPropagation();
    setNewUser(user);
  };

  const onDragLeave = () => {
    setNewUser(null);
  };

  const onDrawOver = () => {};

  return (
    <div className="create-session-container">
      <div className="create-session">
        <div className="contacts">
          <div className="contacts-header">Team</div>
          <Seperator />
          {MOCK_USERS.filter((user) => !sessionUsers.includes(user)).map(
            (user) => (
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
          onDragLeave={() => onDragLeave()}
          onDragOver={() => onDrawOver()}
        >
          <div className="contacts-header">Session</div>
          <Seperator />
          {sessionUsers.map((user) => (
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
