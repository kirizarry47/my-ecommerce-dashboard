//components/MainContent.js

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
                    <i className="bx bxs-badge-dollar"></i>
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
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <FaUserCircle className="user-avatar" />
                                    <p>Kurt I</p>
                                </td>
                                <td>2024-12-06</td>
                                <td>
                                    <span className="status completed">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FaUserCircle className="user-avatar" />
                                    <p>Christina F</p>
                                </td>
                                <td>2024-12-05</td>
                                <td>
                                    <span className="status pending">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FaUserCircle className="user-avatar" />
                                    <p>Kenny I</p>
                                </td>
                                <td>2024-12-04</td>
                                <td>
                                    <span className="status process">
                                        Processing
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FaUserCircle className="user-avatar" />
                                    <p>Frank I</p>
                                </td>
                                <td>2024-12-03</td>
                                <td>
                                    <span className="status pending">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FaUserCircle className="user-avatar" />
                                    <p>Dexter I</p>
                                </td>
                                <td>2024-12-02</td>
                                <td>
                                    <span className="status completed">
                                        Completed
                                    </span>
                                </td>
                            </tr>
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
                        <li>
                            <div className="product-info">
                                <h4>KAI Cargo Pants </h4>
                                <p>Total Sales: 100</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li>
                            <div className="product-info">
                                <h4>KAI bagpack</h4>
                                <p>Total Sales: 95</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li>
                            <div className="product-info">
                                <h4>KAI Hoodie </h4>
                                <p>Total Sales: 85</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li>
                            <div className="product-info">
                                <h4>KAI Black Tshirt 4</h4>
                                <p>Total Sales: 75</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li>
                            <div className="product-info">
                                <h4>Adidas shoes</h4>
                                <p>Total Sales: 70</p>
                            </div>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainContent;