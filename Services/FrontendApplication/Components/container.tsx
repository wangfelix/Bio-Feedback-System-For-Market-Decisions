import React, { HTMLAttributes, ReactNode, forwardRef } from "react";

type ContainerProps = {
    children?: ReactNode;
    styleProps?: React.CSSProperties;
    classNames?: string;
} & HTMLAttributes<HTMLDivElement>;

const defaultContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, styleProps, classNames, ...rest }: ContainerProps, ref) => (
        <div className={`column ${classNames}`} style={{ ...defaultContainerStyle, ...styleProps }} ref={ref} {...rest}>
            {children}
        </div>
    )
);
