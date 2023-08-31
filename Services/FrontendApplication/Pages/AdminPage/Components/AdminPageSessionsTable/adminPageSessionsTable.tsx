import React from "react";

import { Text } from "Components/text";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { AdminPageSessionsTableTableRow } from "Pages/AdminPage/Components/AdminPageSessionsTable/Components/adminPageSessionsTableRow";
import { BORDER_RADIUS, Colors, percent, spacingDistance, Z_INDEX } from "Utils/globalStyles";
import { ADMIN_PAGE_SESSION_TABLE_TITLES } from "Pages/AdminPage/Components/AdminPageSessionsTable/Utils/adminPageSessionsTableConstants";
import { useSelector } from "Utils/hooks";
import { selectSessions } from "Pages/AdminPage/Store/adminPageSelectors";

export const AdminPageSessionsTable = () => {
    // -- STATE --

    const sessions = useSelector(selectSessions);

    // -- RENDER --

    return (
        <Container
            styleProps={{
                height: percent(100),
                width: 800,
                borderRadius: BORDER_RADIUS,
            }}
        >
            <Text textType="text" styleProps={{ marginBottom: 10 }}>
                Logged Sessions
            </Text>

            <Container
                styleProps={{
                    paddingTop: 10,
                    border: "solid 2px",
                    borderRadius: BORDER_RADIUS,
                    borderColor: Colors.PRIMARY_ACCENT_HUE_DARKER,
                }}
            >
                {/* Table Header */}

                <Row
                    styleProps={{
                        width: percent(100),
                        zIndex: Z_INDEX.CARD,
                        boxShadow: "0 5px 5px -5px #777",
                        height: "60px",
                        justifyContent: "center",
                        marginBottom: spacingDistance(1),
                    }}
                >
                    <Row
                        styleProps={{
                            alignSelf: "center",
                            width: percent(93),
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                            margin: "25px 0",
                            position: "relative",
                            right: "10px",
                        }}
                    >
                        {ADMIN_PAGE_SESSION_TABLE_TITLES.map((title) => (
                            <Text
                                textType="text"
                                styleProps={{ fontSize: "15px", color: Colors.PRIMARY_ACCENT_BLUE_HUE }}
                            >
                                {title}
                            </Text>
                        ))}
                    </Row>
                </Row>

                {sessions?.map((session) => (
                    <Container
                        styleProps={{
                            width: percent(100),
                            overflowY: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: `${spacingDistance(0.5)}`,
                            marginBottom: spacingDistance(2),
                        }}
                    >
                        <AdminPageSessionsTableTableRow
                            isSelected={false}
                            name={session.name}
                            duration={session.duration}
                            userId={session.userId}
                            _id={session._id}
                            sensorName={session.sensorName}
                            experimentAlias={session.experimentAlias}
                        />
                    </Container>
                ))}
            </Container>
        </Container>
    );
};
