import React, { FocusEvent, forwardRef, SyntheticEvent } from "react";

import { Colors, percent, spacingDistance, BORDER_RADIUS } from "Utils/globalStyles";
import { makeHandleInputBlur, makeHandleInputFocus } from "Utils/events";

export interface TextInputProps extends Omit<JSX.IntrinsicElements["input"], "disabled" | "ref"> {
    isDisabled?: boolean;
    onValueChange?: (value: string) => void;
}

export const handleTextInput =
    (callback: (value: string) => void) => (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        callback(e.currentTarget.value);

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ onBlur, onChange, onFocus, onValueChange, isDisabled, ...rest }, ref) => {
        const handleChange = onValueChange ? handleTextInput(onValueChange) : onChange;

        const $cursor = isDisabled ? "not-allowed" : undefined;

        const trimValue = (event: FocusEvent<HTMLInputElement>) => {
            if (!handleChange) {
                return;
            }

            event.target.value = event.target.value.trim();

            handleChange(event);
        };

        // --- RENDER ---

        return (
            <input
                disabled={false}
                onBlur={makeHandleInputBlur(onBlur, trimValue)}
                onChange={handleChange}
                onFocus={makeHandleInputFocus(onFocus)}
                ref={ref}
                style={{
                    background: Colors.GREY_LIGHT,
                    border: "none",
                    borderRadius: BORDER_RADIUS,
                    color: Colors.BLACK,
                    cursor: $cursor,
                    height: spacingDistance(5),
                    outline: "none",
                    padding: spacingDistance(1),
                    width: percent(100),
                }}
                {...rest}
            />
        );
    }
);
