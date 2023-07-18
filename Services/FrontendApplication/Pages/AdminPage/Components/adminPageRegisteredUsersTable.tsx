import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { BORDER_RADIUS, Colors, spacingDistance, Z_INDEX } from "Utils/globalStyles";
import { Text } from "Components/text";
import { Container } from "Components/container";
import { Row } from "Components/row";
import { useAppDispatch } from "State/store";
import { initialLoad } from "Pages/AdminPage/Store/adminPageThunks";
import { RootState } from "State/Reducers";
import { User } from "State/Reducers/meReducer";
import { AdminPageRegisteredUsersTableTableRow } from "Pages/AdminPage/Components/adminPageSetMediCoinContractAddressForm";

export const AdminPageRegisteredUsersTable = () => {
    const dispatch = useAppDispatch();

    // -- STATE --

    const registeredUsers = useSelector<RootState, User[]>((state) => state.adminPage.users);

    const tableTitles = ["Name", "Email", "Sessions"];

    // -- EFFECTS --

    useEffect(() => {
        dispatch(initialLoad() as any);
    }, []);

    // -- RENDER --

    return (
        <Container
            styleProps={{
                height: "100%",
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
                        width: "100%",
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
                            width: "93%",
                            display: "grid",
                            gridTemplateColumns: "150px 250px 150px 1fr",
                            margin: "25px 0",
                            position: "relative",
                            right: "10px",
                        }}
                    >
                        {tableTitles.map((title) => (
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
                            width: "100%",
                            overflowY: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: `${spacingDistance(0.5)}`,
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
