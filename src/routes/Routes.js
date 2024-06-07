import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../screens";
import { Pokemon } from "../screens";


const AppRoutes = () => {
    return (
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/pokemon/:id" element={<Pokemon />} />
            </Routes>
    );
};

export default AppRoutes;