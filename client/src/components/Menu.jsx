import React from 'react';
import Toolbar from "./Toolbar";
import SettingBar from "./SettingBar";
import Canvas from "./Canvas.";

const Menu = () => {
    return (
        <div className="app">
            <Toolbar/>,
            <SettingBar/>,
            <Canvas/>
        </div>
    );
};

export default Menu;