import React, { useCallback, useMemo } from "react";
import { batch } from "react-redux";

import { NAVBAR_HEIGHT, Colors, Z_INDEX, MAX_PAGE_WIDTH, spacingDistance, percent } from "Utils/globalStyles";
import { Paths } from "Utils/paths";
import { NavBarItem, NavBarItemProps } from "Components/Navbar/Components/navBarItem";
import { Button } from "Components/Button/button";
import { Row } from "Components/row";
import { Container } from "Components/container";
import { Logo } from "Illustrations/Logo";
import { useAppDispatch, useIsAdmin, useIsLoggedIn, usePage } from "Utils/hooks";
import { setRegistrationModalOpen, setRegistrationModalState } from "State/Actions/actionCreators";
import { NavBarProfileDropdown } from "Components/Navbar/Components/navBarProfileDropdown";
import { SessionPagePaths } from "Pages/SessionPage/SessionPagePaths";
import { NavBarTabs } from "Components/Navbar/Utils/navbarTypes";

export const NavBar = () => {
    const dispatch = useAppDispatch();

    // -- STATE --

    const page = usePage();

    const isLoggedIn = useIsLoggedIn();

    const isAdmin = useIsAdmin();

    // -- MEMOIZED DATA --

    const navBarItemsLeft: NavBarItemProps[] = useMemo(
        () => [
            ...(isLoggedIn
                ? [
                      { title: NavBarTabs.DASHBOARD, to: Paths.LANDING_PAGE, selected: page === Paths.LANDING_PAGE },
                      ...(isAdmin
                          ? [{ title: NavBarTabs.ADMIN, to: Paths.ADMIN_PAGE, selected: page === Paths.ADMIN_PAGE }]
                          : []),
                      { title: NavBarTabs.HISTORY, to: Paths.HISTORY_PAGE, selected: page === Paths.HISTORY_PAGE },
                      {
                          title: NavBarTabs.SESSION,
                          to: `${Paths.SESSION_PAGE}${SessionPagePaths.SETUP}`,
                          selected: page === Paths.SESSION_PAGE,
                      },
                      {
                          title: NavBarTabs.SENSORS_AND_DEVICES,
                          to: Paths.SENSORS_AND_DEVICES_PAGE,
                          selected: page === Paths.SENSORS_AND_DEVICES_PAGE,
                      },
                  ]
                : []),
        ],
        [isLoggedIn, isAdmin, page]
    );

    // -- CALLBACKS --

    const handleOpenRegistrationModal = useCallback(
        (authMode: "login" | "registration") => {
            batch(() => {
                dispatch(setRegistrationModalState(authMode));
                dispatch(setRegistrationModalOpen(true));
            });
        },
        [batch, dispatch, setRegistrationModalState, setRegistrationModalOpen]
    );

    // -- STYLES --

    const navBarStyle = {
        height: NAVBAR_HEIGHT,
        width: percent(100),
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
                        height: percent(80),
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
                    <Row
                        styleProps={{
                            position: "absolute",
                            right: "20px",
                            justifySelf: "flex-end",
                            gap: spacingDistance(2),
                        }}
                    >
                        <Button
                            buttonType="text"
                            onClickHandle={() => handleOpenRegistrationModal("login")}
                            styleProps={{
                                borderRadius: 50,
                                padding: "0 20px",
                                fontSize: 14,
                            }}
                        >
                            Login
                        </Button>

                        <Button
                            buttonType="primary"
                            onClickHandle={() => handleOpenRegistrationModal("registration")}
                            styleProps={{
                                borderRadius: 50,
                                padding: "0 20px",
                                fontSize: 14,
                            }}
                        >
                            Register
                        </Button>
                    </Row>
                )}

                {isLoggedIn && <NavBarProfileDropdown />}
            </Row>
        </nav>
    );
};
