import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader  from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

import "./MainNavigation.css"
const MainNavigation = props =>{
    return( 
        <React.Fragment>
            <SideDrawer className="main-navigation__drawer-bar">
                <nav>
                    <NavLinks/>
                    
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className = "main-navigation__title"><Link to ="/">Your Places</Link></h1>
                <nav>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
        );
};
export default MainNavigation;