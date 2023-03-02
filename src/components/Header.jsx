import React from "react";
import { Stack, Box } from "@mui/material";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
const Header = () => {
    return (
        <>
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    component="img"
                    src={Logo1}
                    alt="logo1"
                    sx={{ maxWidth: 150, height: "auto" }}
                />

                <Box
                    component="img"
                    src={Logo2}
                    alt="logo2"
                    sx={{ maxWidth: 150, height: "auto" }}
                />
            </Stack>
        </>
    );
};

export default Header;
