import React, { Component, useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Example from './Pie';
import Ex from './barchart';

export class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    name: "Abstract 3D",
                    image: "http://www.picgifs.com/wallpapers/wallpapers/abstract-3d/wallpaper_abstract-3d_animaatjes-21.jpg",
                    detail: "Lorem ipsum dolar sit amet,consectetur adipiscing elit",
                    stock: "32 in Stock",
                    price: 45.99,
                    total: 20
                },
                {
                    name: "Sarphens Illustration",
                    image: "https://4.bp.blogspot.com/-AuW4NQW3Iew/UJpfC3Ga_MI/AAAAAAAANYQ/Ni6Zc-w4Uqg/s1600/3D+Abstract+Wallpapers+09.jpg",
                    detail: "Lorem ipsum dolar sit amet,consectetur adipiscing elit",
                    stock: "32 in Stock",
                    price: 45.99,
                    total: 20
                },

            ]
        };
    }



    render() {
        return (

            <div className="col main pt-4" style={{ backgroundColor: "#b0e0e6" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <strong style={{ fontFamily: '"Comic Sans MS", cursive' }}
                            >Hello Shahrukh 👋</strong>
                        </div>
                        <div className='col-2'>
                            <div className="input-group" style={{ height: '30px' }}>
                                <span className="input-group-text" style={{ backgroundColor: 'white', border: 'none', height: '100%' }}>
                                    <i className="fa fa-search" style={{ fontSize: '14px' }}></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                    style={{ backgroundColor: 'white', border: 'none', fontSize: '14px', height: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2" >
                            <div className="card bg-white text-dark h-100" >
                                <div className="card-body bg-white" style={{ backgroundColor: "#57b960", borderRadius: '50%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: '120px',
                                                height: '120px',
                                                backgroundColor: '#57b960',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <div style={{ fontSize: '84px', color: '#013220' }}>$</div>
                                        </div>
                                        <div className="p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ color: '#ccc' }}>Earning
                                                <div>
                                                    <h1 className="display-4" style={{ fontSize: '24px', color: '#000', fontWeight: 'bold' }}>
                                                        $198K
                                                    </h1>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span className="text-success" style={{ fontSize: '10px', marginRight: '5px' }}>↑37.8%</span>
                                                        <p style={{ fontSize: '11px', margin: '0' }}>this month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-dark bg-whiter h-100">
                                <div className="card-body bg-white " style={{ backgroundColor: "#57b960", borderRadius: '50%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: '120px',
                                                height: '120px',
                                                backgroundColor: '#ee82ee',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="fa fa-list fa-4x" style={{ color: '#a50b5e' }}></i>
                                        </div>
                                        <div className="p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ color: '#ccc' }}>Orders
                                                <div>
                                                    <h1 className="display-4" style={{ fontSize: '24px', color: '#000', fontWeight: 'bold' }}>
                                                        $2.4K
                                                    </h1>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span className="text-danger" style={{ fontSize: '10px', marginRight: '5px' }}>↓2%</span>
                                                        <p style={{ fontSize: '12px', margin: '0' }}>this month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-dark bg-whiter h-100">
                                <div className="card-body bg-white " style={{ backgroundColor: "#57b960", borderRadius: '50%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: '120px',
                                                height: '120px',
                                                backgroundColor: '#afeeee',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >

                                            <i className="fas fa-pen-square fa-4x" style={{ color: '#1e90ff' }}></i>


                                        </div>
                                        <div className="p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ color: '#ccc' }}>Balance
                                                <div>
                                                    <h1 className="display-4" style={{ fontSize: '24px', color: '#000', fontWeight: 'bold' }}>
                                                        $2.4K
                                                    </h1>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span className="text-danger" style={{ fontSize: '10px', marginRight: '5px' }}>↓2%</span>
                                                        <p style={{ fontSize: '12px', margin: '0' }}>this month</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-dark bg-whiter h-100">
                                <div className="card-body bg-white " style={{ backgroundColor: "#57b960", borderRadius: '50%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                width: '120px',
                                                height: '120px',
                                                backgroundColor: '#ffb6c1',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >

                                            <i className="fa fa-briefcase fa-4x" style={{ color: 'red' }}></i>

                                        </div>
                                        <div className="p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ color: '#ccc' }}>Total Sales
                                                <div>
                                                    <h1 className="display-4" style={{ fontSize: '24px', color: '#000', fontWeight: 'bold' }}>
                                                        $89K
                                                    </h1>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span className="text-success" style={{ fontSize: '10px', marginRight: '5px' }}>↑11%</span>
                                                        <p style={{ fontSize: '12px', margin: '0' }}>this week</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container'>
                    <div class="row mb-6">
                        <div class="col-lg-7 col-md-6 col-sm-12 py-2">
                            <div class="card bg-white text-white h-100">
                                <div class="m-3 mb-3 text-secondary">
                                    <h4>
                                        Overview
                                    </h4>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h6 style={{ fontSize: '15px', color: "#cccccc" }}>Monthly Earning</h6>
                                        </div>
                                        <div className='col-3'>
                                            <select className="form-select" style={{ height: '30px', width: "100px", fontSize: '12px' }}>
                                                <option>Quarterly</option>
                                                <option>Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className="" style={{ height: "300px" }}>
                                    <Ex />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5 py-2">
                            <div class="card bg-white h-100">
                                <h4 className='title m-3 mb-3  text-secondary'>Customers</h4>
                                <h6 className='m-3' style={{ fontSize: '15px', color: "#cccccc" }}>Customers that buy products</h6>
                                <div className="mb-5" style={{ height: "300px", width: "400px" }}> <Example />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container bg-white' style={{ borderRadius: "10px", paddingBlock: "10px", marginTop: "30px" }}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className='row m-2'>
                            <div className='col-lg-7 col-md-7 col-sm-12  mt-2'>
                                <strong style={{ fontSize: '24px' }}>Product Sell</strong>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6  mt-2'>
                                <div className="input-group" style={{ height: '30px' }}>
                                    <span className="input-group-text" style={{ backgroundColor: 'white', border: 'none', height: '100%', borderRadius: '20%' }}>
                                        <i className="fa fa-search" style={{ fontSize: '14px' }}></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        style={{ backgroundColor: 'white', border: 'none', fontSize: '14px', height: '100%', borderRadius: '20%' }}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 mt-2' style={{ color: '#ccc', padding: '0' }}>
                                <select className="form-select" style={{ height: '30px', fontSize: '12px' }}>
                                    <option>Last 30 days</option>
                                    <option>Last 7 days</option>
                                    <option>Last 3 months</option>
                                </select>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className='col-lg-7 col-md-7 col-sm-12' style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#ccc' }}>
                                Product Name
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-3 text-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#ccc' }}>
                                Stock
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-3 text-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#ccc' }}>
                                Price
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 text-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', color: '#ccc' }}>
                                Total Sales
                            </div>
                            {this.state.products.map((product) => (
                                <div className="row m-2">
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ width: '60px', height: '40px', borderRadius: '10%', marginRight: '10px' }}
                                            />
                                            <div>
                                                <strong>{product.name}</strong>
                                                <div>{product.detail}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-3 text-center">{product.stock}</div>
                                    <div className="col-lg-1 col-md-1 col-sm-3 text-center">${product.price}</div>
                                    <div className="col-lg-2 col-md-2 col-sm-6 text-center">{product.total}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>





            </div >
        );
    }
}

export default Dashboard;
