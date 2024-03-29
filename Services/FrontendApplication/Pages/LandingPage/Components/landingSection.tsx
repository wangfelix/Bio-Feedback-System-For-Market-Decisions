import React, { ReactNode } from "react";

import { Container } from "Components/container";
import { BORDER_RADIUS, Colors, MAX_PAGE_WIDTH, percent } from "Utils/globalStyles";
import { Row } from "Components/row";
import { useIsMobile } from "Utils/hooks";

export type LandingSectionProps = {
    title: string;
    backgroundColor?: "light" | "dark";
    content?: ReactNode;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
};

export const LandingSection = ({ title, backgroundColor, content, contentLeft, contentRight }: LandingSectionProps) => {
    // -- STATE --

    const isMobile = useIsMobile();

    // -- RENDER --

    return (
        <Row
            styleProps={{
                justifyContent: "center",
                background: backgroundColor === "dark" ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.WHITE,
            }}
        >
            <Container
                styleProps={{
                    width: percent(100),
                    minWidth: 400,
                    maxWidth: MAX_PAGE_WIDTH,
                    padding: "80px 70px",
                    alignItems: "center",
                }}
            >
                <h2 style={{ marginBottom: 20, fontFamily: "Montserrat", fontWeight: 500 }}>{title}</h2>

                <Container
                    styleProps={{
                        width: 60,
                        height: 5,
                        background: Colors.GREEN_ACCENT,
                        marginBottom: 60,
                        borderRadius: BORDER_RADIUS,
                    }}
                />

                <Row
                    styleProps={{
                        width: percent(100),
                        alignItems: "center",
                        justifyContent: "space-between",
                        maxWidth: 1700,
                        flexWrap: isMobile ? "wrap" : "unset",
                    }}
                >
                    {contentLeft && contentRight && (
                        <>
                            <Container
                                style={{
                                    width: percent(isMobile ? 100 : 45),
                                    minWidth: 400,
                                    marginBottom: isMobile ? 50 : 0,
                                }}
                            >
                                {contentLeft}
                            </Container>
                            <Container style={{ width: percent(isMobile ? 100 : 50), minWidth: 400 }}>
                                {contentRight}
                            </Container>
                        </>
                    )}

                    {content}
                </Row>
            </Container>
        </Row>
    );
};
