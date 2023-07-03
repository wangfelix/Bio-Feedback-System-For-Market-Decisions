import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { Row } from "Components/row";
import { Container } from "Components/container";
import { Button } from "Components/Button/button";
import { BORDER_RADIUS, Colors, Z_INDEX } from "Utils/globalStyles";
import { setRegistrationModalOpen } from "State/Actions/actionCreators";
import cross from "Illustrations/crossing.png";

type RegistrationModalProps = {
    isOpen: boolean;
};

export const RegistrationModal = ({ isOpen }: RegistrationModalProps) => {
    const dispatch = useDispatch();

    // -- EFFECTS --

    useEffect(() => {
        // Prevents the body content to shift to right, due to the scrollbar being removed.

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
        }

        if (!isOpen) {
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

                <h3 style={{ fontFamily: "Work Sans", marginBottom: "16px" }}>{"LogIn / Register"}</h3>
            </Container>
        </Modal>
    );
};
