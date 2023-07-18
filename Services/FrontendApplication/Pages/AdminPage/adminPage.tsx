import React from "react";
import { useSelector } from "react-redux";

import { Container } from "Components/container";
import { AdminPageRegisteredUsersTable } from "Pages/AdminPage/Components/adminPageRegisteredUsersTable";
import admin from "Illustrations/crossing.png";
import { Text } from "Components/text";
import { PageLayout } from "Components/pageLayout";
import { Row } from "Components/row";
import { RootState } from "State/Reducers";
import { User } from "State/Reducers/meReducer";

export const AdminPage = () => {
    // -- STATE --

    const registeredUsers = useSelector<RootState, User[]>((state) => state.adminPage.users);

    // -- RENDER --

    return (
        <PageLayout
            heading="Admin Panel"
            icon={admin}
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
                    styleProps={{
                        gridColumn: "3",
                        width: "80%",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        paddingLeft: "30px",
                        paddingRight: "10px",
                    }}
                >
                    Only needs to be set once, or when a second version of the MediCoin contract gets deployed.
                </Text>

                <Container styleProps={{ gridColumn: "2", gridRow: "1" }}>
                    <AdminPageRegisteredUsersTable />
                </Container>
            </Row>
        </PageLayout>
    );
};
