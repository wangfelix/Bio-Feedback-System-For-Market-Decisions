import React from "react";

import HeroImage from "Illustrations/Präsidiumsgebäude_Bildweltjpg.jpg";
import { Container } from "Components/container";
import { Colors, Z_INDEX } from "Utils/globalStyles";

export const LandingPage = () => {
    const globalStyles = {
        color: Colors.BLACK,
        fontFamily: "Inter",
        lineHeight: "1.5em",
        zIndex: Z_INDEX.PAGE,
    };

    return (
        <Container style={globalStyles}>
            <img src={HeroImage} alt="Hero Bild" style={{ maxWidth: "100vw" }} />
        </Container>
    );
};
