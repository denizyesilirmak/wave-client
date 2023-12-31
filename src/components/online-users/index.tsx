import { MOCK_USERS } from "@mocks/users";
import { useOnlineUsersStore } from "@/store/onlineUsers.store";

import "./styles.css";
import { useTranslation } from "react-i18next";

const OnlineUsers = () => {
  const { t } = useTranslation();

  const onlineUsers = useOnlineUsersStore((state) => state.onlineUsers);
  const onlineUsersArray = Object.values(onlineUsers || {});

  const allUsers = MOCK_USERS.map((user) => {
    const isOnline = onlineUsersArray.find(
      (onlineUser) => onlineUser.id === user.id
    );
    return {
      ...user,
      isOnline: !!isOnline,
    };
  }).sort((a) => (a.isOnline ? -1 : 1));

  return (
    <div className="online-users">
      <span className="online-users-title"> {t("participants")} </span>
      <div className="online-users-list">
        {allUsers.map((user) => (
          <div key={user.id} className="online-user">
            <div
              className={`online-user-status ${
                user.isOnline ? "online" : "offline"
              }`}
            ></div>
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineUsers;
