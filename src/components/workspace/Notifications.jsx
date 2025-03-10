import { useEffect, useState } from "react";
//import { socket } from "../../socket";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true); // Toggle setting

  const API_URL = "https://taskly-app-q35u.onrender.com/notifications";
  const token = localStorage.getItem("token");


  //useEffect(() => {
    //socket.on("new_notification", (notification) => {
      //setNotifications((prev) => [notification, ...prev]);
    //});

    //return () => {
      //socket.off("new_notification");
    //};
  //}, []);

   // Fetch all notifications
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch notifications");

      const data = await res.json();
      setNotifications(data.notifications);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Mark a single notification as read
  const markAsRead = async (id) => {
    try {
      await fetch(`${API_URL}/${id}/read`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, is_read: true } : notif
        )
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    try {
      await fetch(`${API_URL}/read-all`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, is_read: true }))
      );
    } catch (err) {
      console.error("Error marking all notifications as read:", err);
    }
  };

  // Delete a notification
  const deleteNotification = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    } catch (err) {
      console.error("Error deleting notification:", err);
    }
  };

  // Toggle Notifications ON/OFF
  const toggleNotifications = async () => {
    try {
      const res = await fetch(`${API_URL}/settings`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ enable_notifications: !notificationsEnabled }),
      });

      const data = await res.json();
      setNotificationsEnabled(data.enabled);
    } catch (err) {
      console.error("Error toggling notifications:", err);
    }
  };

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="absolute top-4 right-4 w-80 bg-white shadow-lg p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>

      <div className="flex justify-between mb-2">
        <button
          onClick={markAllAsRead}
          className="text-blue-500 hover:underline text-sm"
        >
          Mark all as read
        </button>
        <button
          onClick={toggleNotifications}
          className={`px-2 py-1 text-sm font-medium rounded ${
            notificationsEnabled ? "bg-green-500 text-white" : "bg-gray-400 text-black"
          }`}
        >
          {notificationsEnabled ? "Disable" : "Enable"}
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {notifications.length === 0 ? (
          <li className="text-gray-500">No new notifications</li>
        ) : (
          notifications.map((notif) => (
            <li
              key={notif.id}
              className={`p-2 border-b flex justify-between ${
                notif.is_read ? "text-gray-500" : "font-semibold"
              }`}
            >
              <span>{notif.message}</span>
              <div className="flex space-x-2">
                {!notif.is_read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-blue-500 hover:underline text-xs"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="text-red-500 hover:underline text-xs"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Notifications;