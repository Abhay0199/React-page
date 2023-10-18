import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#000039" }}>
            <div className='row'>
                <ul className="nav flex-column pl-0 pt-2 p-2 mt-2">
                    <li className="nav-item mb-2 mt-2">
                        <div className="nav-link text-secondary d-flex align-items-center">
                            <div>
                                <i className="fas fa-sync fa-2x text-white"></i>
                            </div>
                            <div className="m-3">
                                <h3 className="text-white">Dashboard</h3>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/dashboard" className="nav-link text-secondary">
                            <i className="fas fa-hockey-puck font-weight-bold"></i>
                            <span style={{ marginLeft: "10px" }}>Dashboard</span>
                            <span style={{ marginLeft: "80px" }}>&gt;</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/product" className="nav-link text-secondary">
                            <i className="far fa-file-word font-weight-bold"></i>
                            <span style={{ marginLeft: "10px" }}>Products</span>
                            <span style={{ marginLeft: "100px" }}>&gt;</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/customers" className="nav-link text-secondary">
                            <i className="fas fa-book-reader"></i>
                            <span style={{ marginLeft: "10px" }}>Coustomer</span>
                            <span style={{ marginLeft: "80px" }}>&gt;</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/income" className="nav-link text-secondary">
                            <i className="fas fa-book-medical"></i>
                            <span style={{ marginLeft: "10px" }}>Income</span>
                            <span style={{ marginLeft: "110px" }}>&gt;</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/promote" className="nav-link text-secondary">
                            <i className="far fa-chart-bar font-weight-bold"></i>
                            <span style={{ marginLeft: "10px" }}>Promote</span>
                            <span style={{ marginLeft: "100px" }}>&gt;</span>
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/help" className="nav-link text-secondary">
                            <i className="fas fa-file-export font-weight-bold"></i>
                            <span style={{ marginLeft: "10px" }}>Help</span>
                            <span style={{ marginLeft: "125px" }}>&gt;</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="row">
                <ul>
                    <li className="nav-item" style={{ marginTop: "200%" }}>
                        <div className="nav-link">
                            <button className="btn btn-sm" style={{ backgroundColor: "#0f4d92", width: "100%", marginLeft: "5px" }}>
                                <Link to="/user" className="text-secondary">
                                    <div style={{ display: "flex" }}>
                                        <div style={{ display: "flex" }}>
                                            <img
                                                src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
                                                alt="Description or Name of the Image"
                                                style={{ width: "40px", height: "40px" }}
                                            />
                                            <div className="text-white" >
                                                Evano
                                                <div style={{ fontSize: "12px", color: "#dcdcdc" }}>Project Manager</div>
                                            </div>
                                        </div>
                                        <div style={{ color: "#dcdcdc", marginLeft: "40px", height: "2px", width: "2px", marginTop: "10px" }}><i class="fas fa-chevron-down"></i></div>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
