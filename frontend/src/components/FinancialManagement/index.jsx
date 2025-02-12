

import React, { useState } from "react";
import Earnings from "./Earnings";
import Invoices from "./Invoices";
import Notifications from "./Notifications";
import "./styles.css"; // Import CSS

const  FinancialComponent = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <div>
            <h1>Financial Management</h1>

            <div className="button-group">
                <button 
                    className={activeComponent === "earnings" ? "active" : ""} 
                    onClick={() => setActiveComponent("earnings")}
                >
                    Earnings
                </button>
                <button 
                    className={activeComponent === "invoices" ? "active" : ""} 
                    onClick={() => setActiveComponent("invoices")}
                >
                    Invoices
                </button>
                <button 
                    className={activeComponent === "notifications" ? "active" : ""} 
                    onClick={() => setActiveComponent("notifications")}
                >
                    Notifications
                </button>
            </div>

            {/* Render selected component */}
            {activeComponent === "earnings" && <div className="component"><Earnings /></div>}
            {activeComponent === "invoices" && <div className="component"><Invoices /></div>}
            {activeComponent === "notifications" && <div className="component"><Notifications/></div>}
        </div>
    );
};

export default FinancialComponent;
