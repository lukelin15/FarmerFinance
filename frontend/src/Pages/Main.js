import React, { useState } from 'react';
import './Main.css';
import Dashboard from './Dashboard';

const Main = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div>
                        <Dashboard />
                    </div>
                );
            case 'invoices':
                return (
                    <div>
                        <h2>Invoices Content</h2>
                        {/* Your invoices content goes here */}
                    </div>
                );
            case 'orders':
                return (
                    <div>
                        <h2>Orders Content</h2>
                        {/* Your orders content goes here */}
                    </div>
                );
            case 'explore':
                return (
                    <div>
                        <h2>Explore Content</h2>
                        {/* Your explore content goes here */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="tab-bar">
                <button onClick={() => handleTabClick('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
                    Dashboard
                </button>
                <button onClick={() => handleTabClick('invoices')} className={activeTab === 'invoices' ? 'active' : ''}>
                    Invoices
                </button>
                <button onClick={() => handleTabClick('orders')} className={activeTab === 'orders' ? 'active' : ''}>
                    Orders
                </button>
                <button onClick={() => handleTabClick('explore')} className={activeTab === 'explore' ? 'active' : ''}>
                    Explore
                </button>
            </div>

            <div className="main-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Main;