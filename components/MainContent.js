import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MainContent = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><i className="bx bx-chevron-right"></i></li>
            <li><a className="active" href="#">Home</a></li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download"></i>
          <span className="text">Download Report</span>
        </a>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-cart"></i>
          <span className="text">
            <h3>298</h3>
            <p>New Orders</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-user-check"></i>
          <span className="text">
            <h3>389</h3>
            <p>Customers</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar"></i>
          <span className="text">
            <h3>$43,570</h3>
            <p>Total Revenue</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customers</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Ash Regmi", date: "2024-12-04", status: "completed" },
                { name: "Kurt", date: "2024-12-05", status: "pending" },
                { name: "Christina", date: "2024-12-04", status: "processing" },
                { name: "Frank", date: "2024-12-03", status: "pending" },
                { name: "Kenny", date: "2024-12-02", status: "completed" }
              ].map(({ name, date, status }, index) => (
                <tr key={index}>
                  <td>
                    <FaUserCircle className="user-avatar" />
                    <p>{name}</p>
                  </td>
                  <td>{date}</td>
                  <td>
                    <span className={`status ${status}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="most-sold">
          <div className="head">
            <h3>Most Sold Products</h3>
            <i className="bx bx-plus"></i>
            <i className="bx bx-filter"></i>
          </div>
          <ul className="product-list">
            {[
              { name: "Cargo Pant", sales: 100 },
              { name: "KAI Backpack", sales: 95 },
              { name: "Hoodies", sales: 85 },
              { name: "KAI Black T-shirt", sales: 75 },
              { name: "Adidas", sales: 70 }
            ].map(({ name, sales }, index) => (
              <li key={index}>
                <div className="product-info">
                  <h4>{name}</h4>
                  <p>Total Sales: {sales}</p>
                </div>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
