import { FocusEvent } from "react";

export enum CustomEventName {
    INPUT_BLURRED = "inputBlurred",
    INPUT_FOCUSSED = "inputFocussed",
}

/**
 * Dispatch the custom inputFocussed event before passing the react focus event to the given callback.
 *
 * @param handleFocusCallback Callback that handles the focus event.
 */
export const makeHandleInputFocus =
    <T = HTMLElement>(handleFocusCallback: ((event: FocusEvent<T>) => void) | undefined = () => {}) =>
    (event: FocusEvent<T>) => {
        const inputFocussed = new CustomEvent(CustomEventName.INPUT_FOCUSSED);
        dispatchEvent(inputFocussed);
        handleFocusCallback(event);
    };

/**
 * Dispatch the custom inputFocussed event before passing the react focus event to the given callback.
 *
 * @param handleBlurCallback Callback that handles the blur event.
 * @param trimValue Trims the input value on blur.
 */
export const makeHandleInputBlur =
    <T = HTMLElement>(
        handleBlurCallback: ((event: FocusEvent<T>) => void) | undefined = () => {},
        trimValue?: (event: FocusEvent<T>) => void
    ) =>
    (event: FocusEvent<T>) => {
        const inputBlurred = new CustomEvent(CustomEventName.INPUT_BLURRED);
        dispatchEvent(inputBlurred);
        trimValue?.(event);
        handleBlurCallback(event);
    };
