import React from "react";
import { Box, Stack, Button } from "@mui/material";
import image from "../assets/estimate.png";
const Estimate = () => {
    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box component="img" src={image} alt="estimate" />
                <Button
                    variant="contained"
                    color="success"
                    sx={{ marginTop: 3, marginLeft: 66 }}
                    href="/email"
                >
                    Email estimate
                </Button>
            </Stack>
        </>
    );
};

export default Estimate;
