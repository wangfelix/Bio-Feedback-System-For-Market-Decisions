import React from "react";

import { Row } from "Components/row";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";
import { Container } from "Components/container";
import { User } from "State/Reducers/meReducer";

export interface AdminPageRegisteredUsersTableTableRowProps extends User {
    isSelected: boolean;
}

export const AdminPageRegisteredUsersTableTableRow = ({
    firstName,
    lastName,
    email,
    isSelected,
}: AdminPageRegisteredUsersTableTableRowProps) => (
    <Row
        styleProps={{
            display: "grid",
            gridTemplateColumns: "150px 250px 150px 1fr",
            flexShrink: 0,
            minHeight: "60px",
            background: isSelected ? Colors.PRIMARY_ACCENT_HUE : Colors.WHITE,
            border: `solid 2px ${isSelected ? Colors.GREEN_ACCENT : Colors.GREY_LIGHT}`,
            borderRadius: BORDER_RADIUS,
            width: "97%",
            cursor: "pointer",
        }}
    >
        <Container
            styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}
        >{`${firstName} ${lastName}`}</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            {email}
        </Container>

        <Container styleProps={{ height: "100%", justifyContent: "center", padding: "0 20px" }}>Hallo</Container>

        <Container
            styleProps={{
                height: "100%",
                justifyContent: "center",
                padding: "0 20px",
                background: isSelected ? Colors.PRIMARY_ACCENT_HUE_DARKER : Colors.GREY_LIGHT,
            }}
        >
            Tschüss
        </Container>
    </Row>
);
