import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../screens";


const AppRoutes = () => {
    return (
            <Routes>
                <Route  path="/home" element={<Home />} />
            </Routes>
    );
};

export default AppRoutes;