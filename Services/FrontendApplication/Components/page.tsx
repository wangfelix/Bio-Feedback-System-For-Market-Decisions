import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { NavBar } from "Components/Navbar/navbar";
import { Footer } from "Components/footer";
import { Colors, NAVBAR_HEIGHT, Z_INDEX } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Paths } from "Utils/paths";
import { useIsLoggedIn, usePage, useViewportDimensions } from "Utils/hooks";

type BasePageProps = {
    children: ReactNode;
};

/**
 * This HOC takes a component (mostly "top-level page components") and handles it's positioning
 * and inserts the navigation-bar and footer.
 */
export const Page = ({ children }: BasePageProps) => {
    // -- STATE --

    const page = usePage();

    const navigate = useNavigate();

    const isLoggedIn = useIsLoggedIn();

    const { viewportHeight } = useViewportDimensions();

    // --- HELPERS ---

    const minBaseContentHeight = viewportHeight - Number(NAVBAR_HEIGHT.replace('"', "").replace("px", ""));

    // -- EFFECTS --

    useEffect(() => {
        // If the user is logged out but tries to navigate to any page other than the Landing page, he will be redirected to the Landing page.
        if (!isLoggedIn && page !== Paths.LANDING_PAGE) {
            navigate(Paths.LANDING_PAGE, { replace: true });
        }
    }, [isLoggedIn, page, navigate]);

    // -- STYLES --

    const globalStyles = {
        color: Colors.BLACK,
        fontFamily: "Inter",
        lineHeight: "1.5em",
        zIndex: Z_INDEX.PAGE,
    };

    const contentStyle = {
        position: "relative" as "relative",
        width: "100%",
        minHeight: minBaseContentHeight,
        marginTop: NAVBAR_HEIGHT,
        overflow: "auto",
    };

    // -- RENDER --

    return (
        <Container styleProps={globalStyles}>
            <NavBar />

            <Container styleProps={contentStyle}>{children}</Container>

            <Footer />
        </Container>
    );
};
