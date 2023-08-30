import React, { ReactNode } from "react";

import { Row } from "Components/row";
import { Text } from "Components/text";
import { BORDER_RADIUS, Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Container } from "Components/container";

type HistoryDetailsPaneSectionProps = {
    heading?: string;
    children?: ReactNode;
    styleProps?: React.CSSProperties;
};
export const HistoryDetailsPaneSection = ({ heading, children, styleProps }: HistoryDetailsPaneSectionProps) => {
    return (
        <Container
            styleProps={{
                width: percent(100),
                ...styleProps,
            }}
        >
            <Text styleProps={{ marginLeft: spacingDistance(1) }}>{heading}</Text>

            <Row
                styleProps={{
                    border: `2px solid ${Colors.GREY_LIGHT}`,
                    borderRadius: BORDER_RADIUS,
                    padding: spacingDistance(2),
                }}
            >
                {children}
            </Row>
        </Container>
    );
};
