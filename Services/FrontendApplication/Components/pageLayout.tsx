import React, { ReactNode } from "react";

import { Container } from "Components/container";
import { Row } from "Components/row";
import { MAX_PAGE_WIDTH, percent, spacingDistance } from "Utils/globalStyles";

type PageLayoutProps = {
    icon?: any;
    heading?: string;
    headingContent?: ReactNode;
    children?: ReactNode;
    childrenLeft?: ReactNode;
    childrenRight?: ReactNode;
    layout?: "single-row" | "double-row" | "landing";
};

/**
 * Takes a top-level page component and wraps it inside a page-layout.
 *
 * @param icon icon, shown in front of the heading. Only displayed when heading exists.
 * @param heading
 * @param headingContent Component displayed at the right end of the Heading-Bar.
 *      Should only be a small component, e.g. single line of information.
 * @param children
 * @param childrenLeft
 * @param childrenRight
 * @param propsLayout
 */
export const PageLayout = ({
    icon,
    heading,
    headingContent,
    children,
    childrenLeft,
    childrenRight,
    layout: propsLayout = "single-row",
}: PageLayoutProps) => {
    // -- RENDER --

    switch (propsLayout) {
        case "single-row":
            return (
                <Row styleProps={{ position: "absolute", inset: 0 }}>
                    <Container
                        styleProps={{
                            width: percent(100),
                            maxWidth: MAX_PAGE_WIDTH,
                            margin: "0 auto",
                        }}
                    >
                        {heading && (
                            <Row
                                styleProps={{
                                    padding: "0 40px",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "200px",
                                    flexShrink: 0,
                                }}
                            >
                                <Row styleProps={{ alignItems: "center", gap: spacingDistance(1.5) }}>
                                    {icon && icon}

                                    <h2>{heading}</h2>
                                </Row>

                                {headingContent && <div>{headingContent}</div>}
                            </Row>
                        )}

                        <Container styleProps={{ height: percent(100) }}>{children}</Container>
                    </Container>
                </Row>
            );

        case "landing":
            return <Container>{children}</Container>;

        case "double-row":
        default:
            return (
                <Row styleProps={{ position: "absolute", inset: 0 }}>
                    <Row
                        styleProps={{
                            width: percent(100),
                            maxWidth: MAX_PAGE_WIDTH,
                            margin: "0 auto",
                            height: percent(100),
                        }}
                    >
                        <Container
                            styleProps={{
                                width: percent(50),
                                height: percent(100),
                                position: "relative",
                            }}
                        >
                            {heading && (
                                <Row
                                    styleProps={{
                                        padding: "0 40px",
                                        justifyContent: "space-between",
                                        alignItems: "flex-end",
                                        marginBottom: "20px",
                                        height: "110px",
                                    }}
                                >
                                    <Row styleProps={{ alignItems: "center", gap: spacingDistance(1.5) }}>
                                        {icon && icon}

                                        <h2>{heading}</h2>
                                    </Row>

                                    {headingContent && <div>{headingContent}</div>}
                                </Row>
                            )}

                            <Container
                                styleProps={{
                                    width: percent(100),
                                    height: percent(100),
                                    position: "relative",
                                }}
                            >
                                {childrenLeft}
                            </Container>
                        </Container>
                        <Container
                            styleProps={{
                                width: percent(50),
                                height: percent(100),
                                position: "relative",
                            }}
                        >
                            {childrenRight}
                        </Container>
                    </Row>
                </Row>
            );
    }
};
