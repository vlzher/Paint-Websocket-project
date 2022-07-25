import React from 'react';
import "./styles/app.scss"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Menu from "./components/Menu";
const App = () => {
    return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/:id" element={<Menu/>}/>
                        <Route
                            path="*"
                            element={<Navigate to={`f${(+new Date).toString(16)}`} replace />}
                        />
                    </Routes>

            </BrowserRouter>



    );
};

export default App;