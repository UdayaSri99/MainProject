import React, { useState } from "react";

const Notifications = () => {
    // State to store notifications
    const [notifications, setNotifications] = useState([]);
    // State to handle form input
    const [newNotification, setNewNotification] = useState({
        title: "",
        message: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNotification({ ...newNotification, [name]: value });
    };

    // Handle form submission
    const handleAddNotification = (e) => {
        e.preventDefault();

        // Validate input
        if (!newNotification.title || !newNotification.message) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new notification
        const notificationWithId = {
            id: notifications.length + 1,
            ...newNotification,
        };

        // Update notifications list
        setNotifications([...notifications, notificationWithId]);

        // Clear input fields
        setNewNotification({ title: "", message: "" });
    };

    return (
        <div>
            <h2>Notifications</h2>
            <h3>Send Notification</h3>
            <form onSubmit={handleAddNotification}>
                {/* <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newNotification.title}
                    onChange={handleInputChange}
                    required
                /> */}
                <select>
                    <option value="Salary">Salary</option>
                    <option value="Anouncement">Anouncement</option>
                    <option value="Task"> Task</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={newNotification.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>

            <h3>Recent Notifications</h3>
            <ul>
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <li key={notification.id}>
                            <strong>{notification.title}</strong> - {notification.message}
                        </li>
                    ))
                ) : (
                    <p>No notifications sent.</p>
                )}
            </ul>
        </div>
    );
};

export default Notifications;

