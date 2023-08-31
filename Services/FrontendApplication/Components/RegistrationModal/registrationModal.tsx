import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

import { Row } from "Components/row";
import { Container } from "Components/container";
import { Button } from "Components/Button/button";
import { BORDER_RADIUS, Colors, spacingDistance, Z_INDEX } from "Utils/globalStyles";
import { setRegistrationModalOpen } from "State/Actions/actionCreators";
import cross from "Illustrations/crossing.png";
import { InputWrapper } from "Components/inputWrapper";
import { TextInput } from "Components/textInput";
import { HandleInputChange, RegistrationFormState } from "Components/RegistrationModal/Utils/registrationFormTypes";
import { REGISTRATION_FORM_INITIAL_STATE } from "Components/RegistrationModal/Utils/registrationFormConstants";
import { RootState } from "State/Reducers";
import { logInUser, registerUser } from "Components/RegistrationModal/Store/registrationModalThunks";
import { useAppDispatch } from "Utils/hooks";

type RegistrationModalProps = {
    isOpen: boolean;
};

export const RegistrationModal = ({ isOpen }: RegistrationModalProps) => {
    const dispatch = useAppDispatch();

    // -- STATE --

    const [formState, setFormState] = useState<RegistrationFormState>(REGISTRATION_FORM_INITIAL_STATE);

    const authMode = useSelector<RootState, "login" | "registration">((state) => state.modals.modalAuthMode);

    // --- CALLBACKS ---

    const makeHandleInputChange: (key: keyof RegistrationFormState) => HandleInputChange = (key) => (value) => {
        setFormState((state) => ({ ...state, [key]: value }));
    };

    const handleSendForm = () => {
        if (authMode === "login") {
            dispatch(logInUser(formState) as any);
        } else {
            dispatch(registerUser(formState) as any);
        }
    };

    useEffect(() => {
        // Prevents the body content to shift to right, due to the scrollbar being removed.

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
        }

        if (!isOpen) {
            setFormState(REGISTRATION_FORM_INITIAL_STATE);

            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0";
        }
    }, [isOpen]);

    // -- RENDER --

    return (
        <Modal
            isOpen={isOpen}
            contentLabel="Example Modal"
            onRequestClose={() => dispatch(setRegistrationModalOpen(false))}
            style={{
                content: {
                    background: Colors.WHITE,
                    border: "none",
                    borderRadius: BORDER_RADIUS,
                    margin: "16px",
                    maxWidth: "500px",
                    overflow: "auto",
                    padding: "24px",
                    position: "relative",
                    width: "100%",
                    boxShadow: "0 0 20px 10px rgba(150, 150, 150, 0.2)",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                },
                overlay: {
                    alignItems: "center",
                    background: "rgba(050, 055, 065, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "fixed",
                    zIndex: Z_INDEX.MODAL,
                },
            }}
        >
            <Container>
                <Row styleProps={{ position: "absolute", top: 10, right: 15, justifyContent: "flex-end" }}>
                    <Button
                        buttonType="text"
                        styleProps={{ color: Colors.GREY_DARK, fontWeight: "bold", fontSize: "20px", padding: 0 }}
                        onClickHandle={() => dispatch(setRegistrationModalOpen(false))}
                    >
                        <img src={cross} style={{ width: 24, height: 24 }} alt="cross" />
                    </Button>
                </Row>

                <h3 style={{ fontFamily: "Work Sans", marginBottom: "16px" }}>
                    {authMode === "login" ? "LogIn" : "Register"}
                </h3>

                {authMode === "registration" && (
                    <Row styleProps={{ gap: spacingDistance(1) }}>
                        <InputWrapper label="First Name">
                            <TextInput
                                value={formState.firstName}
                                onValueChange={makeHandleInputChange("firstName")}
                                placeholder="Insert your first name..."
                            />
                        </InputWrapper>

                        <InputWrapper label="Last Name">
                            <TextInput
                                value={formState.lastName}
                                onValueChange={makeHandleInputChange("lastName")}
                                placeholder="Insert your last name..."
                            />
                        </InputWrapper>
                    </Row>
                )}

                <InputWrapper label="Email Adresse">
                    <TextInput
                        value={formState.email}
                        onValueChange={makeHandleInputChange("email")}
                        placeholder="Insert your email-address..."
                    />
                </InputWrapper>

                <InputWrapper label="Password">
                    <TextInput
                        value={formState.password}
                        onValueChange={makeHandleInputChange("password")}
                        placeholder="Choose a password..."
                    />
                </InputWrapper>

                <Button
                    buttonType="primary"
                    styleProps={{ marginTop: spacingDistance(2) }}
                    onClickHandle={handleSendForm}
                >
                    {authMode === "registration" ? "Register" : "Log In"}
                </Button>
            </Container>
        </Modal>
    );
};
