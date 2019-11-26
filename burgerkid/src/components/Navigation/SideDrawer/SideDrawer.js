import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;