import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
//import { socket } from "../../socket";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = "https://taskly-app-q35u.onrender.com";
  const token = localStorage.getItem("token");


  //useEffect(() => {
  //socket.on("new_notification", (notification) => {
  //setNotifications((prev) => [notification, ...prev]);
  //});

  //return () => {
  //socket.off("new_notification");
  //};
  //}, []);

  // Fetch notifications
  const fetchNotifications = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/notifications?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch notifications");

      const data = await res.json();
      setNotifications(data.notifications);
      setCurrentPage(data.current_page);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const markAsRead = async (id) => {
    try {
      const res = await fetch(`${API_URL}/notifications/${id}/read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to mark notification as read");

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, is_read: true } : notif
        )
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };


  const markAllAsRead = async () => {
    try {
      const res = await fetch(`${API_URL}/notifications/read-all`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to mark all as read");

      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, is_read: true }))
      );
    } catch (err) {
      console.error("Error marking all notifications as read:", err);
    }
  };


  const deleteNotification = async (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));

    try {
      const res = await fetch(`${API_URL}/notifications/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to delete notification");

    } catch (err) {
      console.error("Error deleting notification:", err);
    }
  };

  const toggleNotifications = async () => {
    try {
      const newState = !notificationsEnabled;
      setNotificationsEnabled(newState);

      const res = await fetch(`${API_URL}/notifications/settings`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ enable_notifications: newState }),
      });

      if (!res.ok) throw new Error("Failed to toggle notifications");

      const data = await res.json();
      if (data.enabled !== undefined) {
        setNotificationsEnabled(data.enabled);
      } else {
        console.warn("Unexpected API response:", data);
      }
    } catch (err) {
      console.error("Error toggling notifications:", err);
      setNotificationsEnabled((prev) => !prev);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed top-4 right-4 bg-white p-2 rounded-full shadow-md"
      >
        <Bell className="w-6 h-6 text-gray-600" />
      </button>

      {isPanelOpen && (
        <div className="absolute top-12 right-0 w-80 bg-white shadow-lg p-4 rounded-lg border z-50">
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
              className={`px-2 py-1 text-sm font-medium rounded ${notificationsEnabled
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-black"
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
                  className={`p-2 border-b flex justify-between ${notif.is_read ? "text-gray-500" : "font-semibold"
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

          <div className="flex justify-between mt-2">
            <button
              disabled={currentPage === 1}
              onClick={() => fetchNotifications(currentPage - 1)}
              className={`px-2 py-1 text-sm ${currentPage === 1 ? "text-gray-400" : "text-blue-500 hover:underline"}`}
            >
              Prev
            </button>
            <span className="text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => fetchNotifications(currentPage + 1)}
              className={`px-2 py-1 text-sm ${currentPage === totalPages ? "text-gray-400" : "text-blue-500 hover:underline"}`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;