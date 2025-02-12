import React, { useState } from "react";

const Earnings = () => {
    const [earnings, setEarnings] = useState([]);
    const [newEarning, setNewEarning] = useState({
        email: "",
        amount: "",
        type: "Select Option",
    });

    // Loading state for the button
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEarning({ ...newEarning, [name]: value });
    };

    const handleAddEarning = (e) => {
        e.preventDefault();

        if (!newEarning.email || !newEarning.amount) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true); // Start loading

        setTimeout(() => {
            setEarnings([...earnings, newEarning]);
            setNewEarning({ email: "", amount: "", type: "Salary" });
            setLoading(false); // Stop loading
        }, 1000); // Simulated delay (1s)
    };

    return (
        <div>
            <h2>Earnings</h2>
            <h3>Add Earning</h3>
            <form onSubmit={handleAddEarning}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newEarning.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newEarning.amount}
                    onChange={handleInputChange}
                    required
                />
                <select name="type" value={newEarning.type} onChange={handleInputChange}>
                    <option value="select option" disabled>select option</option>
                    <option value="Salary">Salary</option>
                    <option value="Bonus">Bonus</option>
                    <option value="other">other</option>
                    
                </select>
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Earning"}
                </button>
            </form>

            <h3>List of Earnings</h3>
            <ul>
                {earnings.length > 0 ? (
                    earnings.map((earning, index) => (
                        <li key={index}>
                            <strong>{earning.email}</strong> - ${earning.amount} ({earning.type})
                        </li>
                    ))
                ) : (
                    <p>No earnings recorded.</p>
                )}
            </ul>
        </div>
    );
};

export default Earnings;

