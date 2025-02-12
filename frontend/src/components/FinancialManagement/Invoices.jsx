import React, { useState } from "react";

const Invoices = () => {
    // State to store invoices
    const [invoices, setInvoices] = useState([]);
    
    // State to handle form input
    const [newInvoice, setNewInvoice] = useState({
        fromDate: "",
        toDate: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewInvoice({ ...newInvoice, [name]: value });
    };

    // Handle form submission
    const handleAddInvoice = (e) => {
        e.preventDefault();

        // Validate input
        if (!newInvoice.fromDate || !newInvoice.toDate) {
            alert("Please fill in all fields.");
            return;
        }

        // Create a new invoice with a unique ID
        const invoiceWithId = {
            id: invoices.length + 1,
            ...newInvoice,
        };

        // Update invoices list
        setInvoices([...invoices, invoiceWithId]);

        // Clear input fields
        setNewInvoice({ fromDate: "", toDate: "" });
    };

    return (
        <div>
            <h2>Invoices</h2>
            <h3>Generate Invoice</h3>
            <form onSubmit={handleAddInvoice}>
                <label className="invoicelabel">From:</label>
                <input
                    type="date"
                    name="fromDate"
                    placeholder="From"
                    value={newInvoice.fromDate}
                    onChange={handleInputChange}
                    required
                />
                <label className="invoicelabel">To:</label>
                <input
                    type="date"
                    name="toDate"
                    placeholder="To"
                    value={newInvoice.toDate}
                    onChange={handleInputChange}
                    required
                />
                
                <button type="submit">Generate Invoice</button>
            </form>

            <h3>Invoices List</h3>
            <ul>
                {invoices.length > 0 ? (
                    invoices.map((invoice) => (
                        <li key={invoice.id}>
                            <strong>Invoice #{invoice.id}</strong> from- {invoice.fromDate} to {invoice.toDate}
                        </li>
                    ))
                ) : (
                    <p>No invoices generated.</p>
                )}
            </ul>
        </div>
    );
};

export default Invoices;
