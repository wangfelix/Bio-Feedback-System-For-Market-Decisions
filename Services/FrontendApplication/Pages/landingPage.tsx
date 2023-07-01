import React from "react";

import { Button } from "Components/button";
import { Row } from "Components/row";
import HeroImage from "Illustrations/Präsidiumsgebäude_Bildweltjpg.jpg";

export const LandingPage = () => {
    return (
        <Row style={{ width: "100vw", background: "blue" }}>
            <img src={HeroImage} alt="Hero Bild" style={{ maxWidth: "100vw" }} />
            <Button text="Log In" />
        </Row>
    );
};
