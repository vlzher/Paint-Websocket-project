import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
const Toolbar = () => {

    const download = () => {
        const dataURL = canvasState.canvas.toDataURL()
        const a = document.createElement('a')
        a.href = dataURL
        a.download = canvasState.sessionId+'.jpg'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }


    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>
            <button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>
            <button className="toolbar__btn circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>
            <button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>
            <input onChange = {e => toolState.setFillColor(e.target.value)} style={{marginLeft: 15}} type="color"/>
            <button className="toolbar__btn line" onClick={() => toolState.setTool(new Line(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>

            <div style={{marginLeft: "auto"}}>
                <button className="toolbar__btn undo" onClick={() => canvasState.undo()}></button>
                <button className="toolbar__btn redo" onClick={() => canvasState.redo()}></button>
                <button className="toolbar__btn save" onClick={() => download()}></button>
            </div>

        </div>
    );
};

export default Toolbar;