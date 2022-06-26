import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label style = {{margin: '10px 10px'}} htmlFor="line-width">Width</label>
            <input onChange={e => toolState.setLineWidth(e.target.value)}
                   id = "line-width"
                   type="number"
                   defaultValue={1}
                   min={1}
                   max={50}/>
            <label style = {{margin: '10px 10px'}} htmlFor="stroke-color">Stroke color</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)}
                   id = "stroke-color"
                   type="color"
                   />

        </div>
    );
};

export default SettingBar;