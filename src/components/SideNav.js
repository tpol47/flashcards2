import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './sideNav.css'




const SideNav = () => {

    const [showAll, setShowAll] = useState(false)
    return (
            <ProSidebar collapsed={false}>
            <Menu iconShape="square">
                <MenuItem>Dashboard</MenuItem>
                <SubMenu title="Components">
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Settings">
                    <MenuItem active={showAll} onClick={() => setShowAll(!showAll)}>
                        Show All Cards
                    </MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
            </ProSidebar>
    )
}

export default SideNav