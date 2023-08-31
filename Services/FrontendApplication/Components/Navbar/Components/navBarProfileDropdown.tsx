import React, { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { Row } from "Components/row";
import { Text } from "Components/text";
import { BORDER_RADIUS, Colors, percent, Z_INDEX } from "Utils/globalStyles";
import DownArrow from "Illustrations/downArrow.png";
import ProfilePicture from "Illustrations/ProfilePicture.png";
import { Container } from "Components/container";
import Speechbubble from "Illustrations/exclamationmark.bubble@2x.png";
import Settings from "Illustrations/gearshape@2x.png";
import ProfilPictureIcon from "Illustrations/person@2x.png";
import Logout from "Illustrations/rectangle.portrait.and.arrow.right@2x.png";
import { useAppDispatch, useSelector } from "Utils/hooks";
import { MeState } from "State/Reducers/meReducer";
import { logOutMe } from "State/Actions/actionCreators";
import { selectMe } from "State/globalSelectors";

export const NavBarProfileDropdown = () => {
    const dispatch = useAppDispatch();

    // -- STATE --

    const {
        data: { firstName, lastName },
    } = useSelector<MeState>(selectMe);

    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const [isTooltipHovered, setIsTooltipHovered] = useState(false);

    const [hoveredItemIndex, setHoveredItemIndex] = useState<number | undefined>(undefined);

    // -- CALLBACKS --

    const handleCloseTooltip = () => setIsTooltipOpen(false);

    const handleOpenTooltip = () => setIsTooltipOpen(true);

    // -- CONST DATA --

    const options: (
        | { onClick: () => void; color: undefined; icon: any; lineAbove: undefined; title: string }
        | { onClick: () => void; color: Colors; icon: any; lineAbove: boolean; title: string }
    )[] = [
        { icon: ProfilPictureIcon, title: "My Profile", color: undefined, lineAbove: undefined, onClick: () => {} },
        { icon: Speechbubble, title: "Feedback", color: undefined, lineAbove: undefined, onClick: () => {} },
        {
            icon: Settings,
            title: "Settings",
            color: undefined,
            lineAbove: undefined,
            onClick: () => {},
        },
        {
            icon: Logout,
            title: "Log out",
            color: Colors.PRIMARY_ACCENT,
            lineAbove: true,
            onClick: () => {
                dispatch(logOutMe());
            },
        },
    ];

    // -- RENDER --

    return (
        <Row
            styleProps={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "10px",
                justifySelf: "flex-end",
                alignItems: "center",
            }}
        >
            <ClickAwayListener onClickAway={handleCloseTooltip}>
                <div>
                    <Tooltip
                        disableHoverListener
                        open={isTooltipOpen}
                        title={
                            <>
                                <Container
                                    styleProps={{
                                        background: Colors.WHITE,
                                        borderRadius: BORDER_RADIUS,
                                        color: Colors.PRIMARY_ACCENT_BLUE_HUE,
                                        fontFamily: "Work Sans",
                                        fontSize: 16,
                                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                        position: "relative",
                                        maxHeight: 500,
                                        width: 250,
                                        gap: 5,
                                        padding: 7,
                                        zIndex: Z_INDEX.NAVBAR_DROPDOWN,
                                    }}
                                >
                                    {options.map((option, index) => (
                                        <>
                                            {option.lineAbove && <Row styleProps={{ height: 1 }} />}

                                            <Row
                                                styleProps={{
                                                    alignItems: "center",
                                                    height: 40,
                                                    background:
                                                        hoveredItemIndex === index
                                                            ? Colors.PRIMARY_ACCENT_HUE_DARKER
                                                            : Colors.TRANSPARENT,
                                                    borderRadius: BORDER_RADIUS,
                                                    padding: "0 10px",
                                                    color: option.color ?? undefined,
                                                }}
                                                onClick={option.onClick ?? undefined}
                                                onMouseEnter={() => setHoveredItemIndex(index)}
                                                onMouseLeave={() => setHoveredItemIndex(undefined)}
                                            >
                                                <img
                                                    src={option.icon}
                                                    style={{ width: 20, marginRight: 20 }}
                                                    alt={option.title}
                                                />
                                                {option.title}
                                            </Row>
                                        </>
                                    ))}
                                </Container>
                            </>
                        }
                        placement="bottom-end"
                    >
                        <div>
                            <Row
                                styleProps={{
                                    height: percent(100),
                                    cursor: "pointer",
                                    borderRadius: BORDER_RADIUS,
                                    alignItems: "center",
                                    background: isTooltipOpen
                                        ? "rgba(104,178,255,0.25)"
                                        : isTooltipHovered
                                        ? "rgba(104,178,255,0.1)"
                                        : Colors.TRANSPARENT,
                                    transition: "background 0.3s",
                                    padding: "5px 20px",
                                }}
                                onMouseEnter={() => setIsTooltipHovered(true)}
                                onMouseLeave={() => setIsTooltipHovered(false)}
                                onClick={handleOpenTooltip}
                            >
                                <Text
                                    textType="text"
                                    styleProps={{ color: Colors.WHITE_OFF_WHITE, fontFamily: "Work Sans" }}
                                >
                                    {`${firstName} ${lastName}`}
                                </Text>

                                <img src={DownArrow} style={{ height: "24px", margin: "0 10px" }} alt="down arrow" />

                                <img
                                    src={ProfilePicture}
                                    style={{ height: "40px", alignSelf: "center" }}
                                    alt="profile picture"
                                />
                            </Row>
                        </div>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </Row>
    );
};
