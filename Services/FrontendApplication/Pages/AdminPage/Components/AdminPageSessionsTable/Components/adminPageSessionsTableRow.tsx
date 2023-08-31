import React from "react";

import { Row } from "Components/row";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Session } from "State/Reducers/adminPageReducer";

export interface AdminPageSessionsTableTableRowProps
    extends Pick<Session, "name" | "duration" | "_id" | "sensorName" | "experimentAlias" | "userId"> {
    isSelected: boolean;
}

export const AdminPageSessionsTableTableRow = ({
    name,
    duration,
    _id,
    sensorName,
    experimentAlias,
    userId,
    isSelected,
}: AdminPageSessionsTableTableRowProps) => (
    <Row
        styleProps={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            flexShrink: 0,
            minHeight: "60px",
            background: isSelected ? Colors.PRIMARY_ACCENT_HUE : Colors.WHITE,
            border: `solid 2px ${isSelected ? Colors.GREEN_ACCENT : Colors.GREY_LIGHT}`,
            borderRadius: BORDER_RADIUS,
            width: "97%",
            cursor: "pointer",
        }}
    >
        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>{name}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {_id}
        </Container>

        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>{userId}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {experimentAlias}
        </Container>

        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>{duration}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {sensorName}
        </Container>
    </Row>
);
