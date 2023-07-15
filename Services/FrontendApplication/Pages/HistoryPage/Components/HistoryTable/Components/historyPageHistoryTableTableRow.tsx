import React from "react";

import { Row } from "Components/row";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";
import { Container } from "Components/container";

type HistoryPageHistoryTableTableRowProps = {
    sessionAlias: string;
    date: string;
    sensors: number;
    experimentTitle: string;
    isSelected: boolean;
};

export const HistoryPageHistoryTableTableRow = ({
    sessionAlias,
    date,
    sensors,
    experimentTitle,
    isSelected,
}: HistoryPageHistoryTableTableRowProps) => (
    <Row
        styleProps={{
            display: "grid",
            gridTemplateColumns: "150px 200px 150px 1fr",
            flexShrink: 0,
            height: "70px",
            marginBottom: "10px",
            background: isSelected ? Colors.PRIMARY_ACCENT_HUE : Colors.WHITE,
            border: `solid 2px ${isSelected ? Colors.GREEN_ACCENT : Colors.GREY_LIGHT}`,
            borderRadius: BORDER_RADIUS,
            width: "97%",
            cursor: "pointer",
        }}
    >
        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>{date}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {sessionAlias}
        </Container>

        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>{sensors}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {experimentTitle}
        </Container>
    </Row>
);
