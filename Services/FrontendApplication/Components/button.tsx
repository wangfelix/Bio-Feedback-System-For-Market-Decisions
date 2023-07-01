import React from "react";

type ButtonProps = {
    text: string;
};
export const Button = ({ text }: ButtonProps) => {
    return <button>{text}</button>;
};
