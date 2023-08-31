import React from "react";

import { BORDER_RADIUS, Colors, percent, spacingDistance, Z_INDEX } from "Utils/globalStyles";
import { Text } from "Components/text";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { AdminPageRegisteredUsersTableTableRow } from "Pages/AdminPage/Components/AdminPageRegisteredUsersTable/Components/adminPageRegisteredUsersTableTableRow";
import { ADMIN_PAGE_REGISTERED_USERS_TABLE_TITLES } from "Pages/AdminPage/Components/AdminPageRegisteredUsersTable/Utils/adminPageRegisteredUsersTableConstants";
import { useSelector } from "Utils/hooks";
import { selectUsers } from "Pages/AdminPage/Store/adminPageSelectors";

export const AdminPageRegisteredUsersTable = () => {
    // -- STATE --

    const registeredUsers = useSelector(selectUsers);

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
                Registered Users
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
                            gridTemplateColumns: "150px 250px 150px 1fr",
                            margin: "25px 0",
                            position: "relative",
                            right: "10px",
                        }}
                    >
                        {ADMIN_PAGE_REGISTERED_USERS_TABLE_TITLES.map((title) => (
                            <Text
                                textType="text"
                                styleProps={{ fontSize: "15px", color: Colors.PRIMARY_ACCENT_BLUE_HUE }}
                            >
                                {title}
                            </Text>
                        ))}
                    </Row>
                </Row>

                {registeredUsers?.map((user) => (
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
                        <AdminPageRegisteredUsersTableTableRow
                            isSelected={false}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            _id={user._id}
                        />
                    </Container>
                ))}
            </Container>
        </Container>
    );
};
