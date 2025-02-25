import { useEffect, useState } from "react";
import { socket } from "../socket";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for real-time notifications
    socket.on("new_notification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      socket.off("new_notification");
    };
  }, []);

  return (
    <div className="absolute top-4 right-4 w-80 bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>
      <ul>
        {notifications.length === 0 ? (
          <li className="text-gray-500">No new notifications</li>
        ) : (
          notifications.map((notif, index) => (
            <li key={index} className="p-2 border-b">
              {notif.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;
