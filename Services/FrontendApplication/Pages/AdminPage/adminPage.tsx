import React from "react";
import { useSelector } from "react-redux";
import { User as UserIcon } from "phosphor-react";

import { Container } from "Components/container";
import { AdminPageRegisteredUsersTable } from "Pages/AdminPage/Components/adminPageRegisteredUsersTable";
import { Text } from "Components/text";
import { PageLayout } from "Components/pageLayout";
import { Row } from "Components/row";
import { RootState } from "State/Reducers";
import { User } from "State/Reducers/meReducer";
import { BORDER_RADIUS, Colors } from "Utils/globalStyles";

export const AdminPage = () => {
    // -- STATE --

    const registeredUsers = useSelector<RootState, User[]>((state) => state.adminPage.users);

    // -- RENDER --

    return (
        <PageLayout
            heading="Admin Panel"
            icon={
                <Container
                    styleProps={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 32,
                        height: 32,
                        background: Colors.PRIMARY_ACCENT_HUE,
                        borderRadius: BORDER_RADIUS,
                    }}
                >
                    <UserIcon color={Colors.GREEN_ACCENT} size={22} weight="bold" />
                </Container>
            }
            headingContent={`Total amount of users: ${registeredUsers.length}`}
        >
            <Row
                styleProps={{
                    display: "grid",
                    gridTemplateColumns: "1fr 50% 1fr",
                    width: "100%",
                }}
            >
                <Text
                    textType="nudge"
                    styleProps={{
                        gridColumn: "3",
                        width: "80%",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        paddingLeft: "30px",
                        paddingRight: "10px",
                    }}
                >
                    Use this section to manage Users and Sessions. You can delete users and get detailed data on
                    sessions.
                </Text>

                <Container styleProps={{ gridColumn: "2", gridRow: "1" }}>
                    <AdminPageRegisteredUsersTable />
                </Container>
            </Row>
        </PageLayout>
    );
};
