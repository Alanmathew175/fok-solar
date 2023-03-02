import React from "react";
import {
    Stack,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Link,
} from "@mui/material";
import HomeICon from "../assets/home1.png";
import HomeICon2 from "../assets/home2.png";

const HomeCards = () => {
    const items = [
        { image: HomeICon2, name: "New Home", link: "/new-home" },
        { image: HomeICon, name: "Pre existing home", link: "existing-home" },
    ];
    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4" color="#8F8F8F">
                    My home is
                </Typography>
                <Stack direction="row">
                    {items.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                sx={{
                                    boxShadow:
                                        "0px 4px 20px rgba(0, 0, 0, 0.1)",
                                    width: 280,
                                    margin: 6,
                                    padding: 3,
                                }}
                            >
                                <CardMedia
                                    image={item.image}
                                    sx={{
                                        height: { xs: 200, sm: 200 },
                                    }}
                                />
                                <CardContent>
                                    <Link
                                        color="#1CA638"
                                        href={item.link}
                                        sx={{ textDecoration: "none" }}
                                        variant="h5"
                                        marginLeft={4}
                                        fontWeight={{ xs: 550 }}
                                    >
                                        {item.name}
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Stack>
            </Stack>
        </>
    );
};

export default HomeCards;
