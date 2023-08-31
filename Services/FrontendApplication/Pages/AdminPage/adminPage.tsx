import React, { useEffect } from "react";
import { User as UserIcon } from "phosphor-react";

import { Container } from "Components/container";
import { AdminPageRegisteredUsersTable } from "Pages/AdminPage/Components/AdminPageRegisteredUsersTable/adminPageRegisteredUsersTable";
import { Text } from "Components/text";
import { PageLayout } from "Components/pageLayout";
import { Row } from "Components/row";
import { User } from "State/Reducers/meReducer";
import { BORDER_RADIUS, Colors, spacingDistance } from "Utils/globalStyles";
import { initialLoad } from "Pages/AdminPage/Store/adminPageThunks";
import { AdminPageSessionsTable } from "Pages/AdminPage/Components/AdminPageSessionsTable/adminPageSessionsTable";
import { useTypedDispatch, useSelector } from "Utils/hooks";
import { selectSessions, selectUsers } from "Pages/AdminPage/Store/adminPageSelectors";
import { Session } from "State/Reducers/adminPageReducer";

export const AdminPage = () => {
    const dispatch = useTypedDispatch();

    // -- STATE --

    const registeredUsers = useSelector<User[]>(selectUsers);
    const sessions = useSelector<Session[]>(selectSessions);

    // -- EFFECTS --

    useEffect(() => dispatch(initialLoad() as any), []);

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
            headingContent={`Users: ${registeredUsers.length}. Logged sessions: ${sessions.length}`}
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

                <Container styleProps={{ gridColumn: "2", gridRow: "1", marginBottom: spacingDistance(4) }}>
                    <AdminPageRegisteredUsersTable />
                </Container>

                <Container styleProps={{ gridColumn: "2", gridRow: "2" }}>
                    <AdminPageSessionsTable />
                </Container>
            </Row>
        </PageLayout>
    );
};
