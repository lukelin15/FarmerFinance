import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Doughnut } from 'react-chartjs-2';
import './Dashboard.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const DashboardPage = () => {
    // Sample data for recent invoices
    const recentInvoicesData = [
        { id: 1, amount: 1200, date: '2024-02-01' },
        { id: 2, amount: 800, date: '2024-02-05' },
        { id: 3, amount: 1500, date: '2024-02-10' },
    ];

    // Sample data for credit information
    const creditData = {
        creditLimit: 5000,
        usedCredit: 1500,
    };

    // Sample data for pending orders
    const pendingOrdersData = [
        { id: 1, product: 'Product A', quantity: 5 },
        { id: 2, product: 'Product B', quantity: 3 },
        { id: 3, product: 'Product C', quantity: 7 },
    ];

    // Ag-Grid column definitions for recent invoices
    const recentInvoicesColumns = [
        { headerName: 'ID', field: 'id', sortable: true, filter: 'agNumberColumnFilter' },
        { headerName: 'Amount', field: 'amount', sortable: true, filter: 'agNumberColumnFilter' },
        { headerName: 'Date', field: 'date', sortable: true, filter: 'agDateColumnFilter' },
    ];

    // Ag-Grid column definitions for pending orders
    const pendingOrdersColumns = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Product', field: 'product' },
        { headerName: 'Quantity', field: 'quantity' },
    ];

    // Chart.js data for credit information
    const creditChartData = {
        labels: ['Used Credit', 'Available Credit'],
        datasets: [
            {
                data: [creditData.usedCredit, creditData.creditLimit - creditData.usedCredit],
                backgroundColor: ['#FF0000', '#4CAF50'],
                hoverBackgroundColor: ['#FF0000', '#4CAF50'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="dashboard-page-container">
            <div className="top-half">
                <div className="chart-container">
                    <h3>Credit Information</h3>
                    <Doughnut className="chart-component" options={options} data={creditChartData} />
                </div>

                <div className="ag-grid-container ag-theme-alpine">
                    <h2>Pending Orders</h2>
                    <AgGridReact
                        rowData={pendingOrdersData}
                        columnDefs={pendingOrdersColumns}
                        pagination={true}
                        paginationPageSize={5}
                        suppressCellSelection={true}
                        floatingFilter={true}
                        height={250}
                    />
                </div>
            </div>

            <div className="bottom-half">
                <div className="ag-grid-container ag-theme-alpine">
                    <h2>Recent Invoices</h2>
                    <AgGridReact
                        rowData={recentInvoicesData}
                        columnDefs={recentInvoicesColumns}
                        pagination={true}
                        paginationPageSize={5}
                        suppressCellSelection={true}
                        floatingFilter={true}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;