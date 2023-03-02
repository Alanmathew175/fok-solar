import { Box } from "@mui/material";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import NewAcHome from "./pages/NewAcHome";
import EstimatePage from "./pages/EstimatePage";
import EmailPage from "./pages/EmailPage";
import ExistingHomePage from "./pages/ExistingHomePage";
function App() {
    return (
        <>
            <Box sx={{ margin: 3 }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/new-home" element={<NewAcHome />} />
                        <Route
                            path="/existing-home"
                            element={<ExistingHomePage />}
                        />
                        <Route path="/estimate" element={<EstimatePage />} />
                        <Route path="/email" element={<EmailPage />} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </>
    );
}

export default App;
