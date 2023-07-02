import React, { useMemo } from "react";

import { NAVBAR_HEIGHT, Colors, NavBarTabs, Z_INDEX, MAX_PAGE_WIDTH } from "Utils/globalStyles";
import { Paths } from "Utils/paths";
import { NavBarItem, NavBarItemProps } from "Components/Navbar/Components/navBarItem";
import { Button } from "Components/Button/button";
import { Row } from "Components/row";
import { Container } from "Components/container";
import { Logo } from "Illustrations/Logo";

export const NavBar = () => {
    // -- STATE --

    // const page = Pathss[Math.floor(Math.random() * Pathss.length)];

    const isLoggedIn = false;

    const isAdmin = true;

    // -- MEMOIZED DATA --

    const navBarItemsLeft: NavBarItemProps[] = useMemo(
        () => [
            { title: NavBarTabs.DASHBOARD, to: Paths.LANDING_PAGE, selected: true },
            { title: NavBarTabs.HISTORY, to: Paths.HISTORY_PAGE, selected: false },
            ...(isLoggedIn
                ? [
                      ...(isAdmin ? [{ title: NavBarTabs.ADMIN, to: Paths.ADMIN_PAGE, selected: false }] : []),
                      {
                          title: NavBarTabs.LIVE_FEED,
                          to: Paths.LIVE_FEED_PAGE,
                          selected: false,
                      },
                      {
                          title: NavBarTabs.SENSORS_AND_DEVICES,
                          to: Paths.SENSORS_AND_DEVICES_PAGE,
                          selected: false,
                      },
                  ]
                : []),
        ],
        [isLoggedIn, isAdmin]
    );

    // -- CALLBACKS --

    // const openRegistrationModal = () => dispatch(setRegistrationModalOpen(true));

    // -- STYLES --

    const navBarStyle = {
        height: NAVBAR_HEIGHT,
        width: "100%",
        position: "fixed" as "fixed",
        background: Colors.BLUE_DARKEST,
        boxShadow: "0 5px 20px 2px rgba(20, 0, 20, 0.3)",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        color: Colors.WHITE_OFF_WHITE,
        listStyleType: "none",
        zIndex: Z_INDEX.NAVBAR,
    };

    // -- RENDER --

    return (
        <nav style={{ ...navBarStyle, justifyContent: "center" }}>
            <Row styleProps={{ ...navBarStyle, marginLeft: "auto", marginRight: "auto", maxWidth: MAX_PAGE_WIDTH }}>
                <Container
                    style={{
                        width: 120,
                        height: "80%",
                        display: "flex",
                    }}
                >
                    <Logo />
                </Container>

                <Row
                    styleProps={{
                        margin: "0 auto",
                        position: "absolute",
                        inset: 0,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {navBarItemsLeft.map((item, index) => (
                        <NavBarItem title={item.title} key={index} selected={item.selected} to={item.to} />
                    ))}
                </Row>

                {!isLoggedIn && (
                    <Row styleProps={{ position: "absolute", right: "20px", justifySelf: "flex-end" }}>
                        <Button
                            buttonType="primary"
                            onClickHandle={() => {}}
                            styleProps={{
                                borderRadius: 50,
                                padding: "0 20px",
                                fontSize: 14,
                            }}
                        >
                            Login
                        </Button>
                    </Row>
                )}
            </Row>
        </nav>
    );
};