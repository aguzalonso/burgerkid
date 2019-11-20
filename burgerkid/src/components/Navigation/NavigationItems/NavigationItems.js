import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigtionItems = () => (
    <ul className="NavigationItems">
        <NavigationItem>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>
);

export default navigtionItems;