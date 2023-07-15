import React, { ReactNode } from "react";

import { Text } from "Components/text";
import { Colors, percent, spacingDistance } from "Utils/globalStyles";
import { Container } from "Components/container";
import { Row } from "Components/row";

export interface InputWrapperProps {
    isDisabled?: boolean;
    children: ReactNode;
    label?: ReactNode;
}

export const InputWrapper = ({ children, isDisabled, label }: InputWrapperProps) => (
    <Container style={{ marginBottom: spacingDistance(1), width: percent(100) }}>
        <Row styleProps={{ color: isDisabled ? Colors.GREY_LIGHT : Colors.WHITE_OFF_WHITE }}>
            {label && <Text styleProps={{ fontSize: 12, fontWeight: "400" }}>{label}</Text>}
        </Row>

        <Container styleProps={{ marginTop: label ? spacingDistance(1) : undefined }}>{children}</Container>
    </Container>
);
