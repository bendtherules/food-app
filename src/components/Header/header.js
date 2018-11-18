import React, { Component } from 'react';
// import { connect } from 'react-redux';


import './header.css';

export default function Header() {
    return (
        <div className="header-row">
            <div className="header-text">
                What would you like to eat?
            </div>
            <span className="header-icon-notification mdi mdi-bell-outline">
            </span>
        </div>
    )
}