export enum Colors {
    PRIMARY_ACCENT = "#30CDBA",
    PRIMARY_ACCENT_BLUE_HUE = "#353d58",
    BLUE_DARKEST = "#0c1f31",
    PRIMARY_ACCENT_HUE = "#F1FBF9",
    PRIMARY_ACCENT_HUE_DARKER = "#DDF1ED",
    GREEN_ACCENT = "#30CDBA",
    WHITE = "#FFF",
    WHITE_OFF_WHITE = "#E9E9E9",
    BLACK = "#2C2C2C",
    TRANSPARENT = "#00000000",
    GREY_DARK = "#a5a5a5",
    GREY_DARKER = "#767676",
    GREY_LIGHT = "#EEEEEE",
    GREY = "#CCCCCC",
    RED = "#ba3446",
}

export const BORDER_RADIUS = "5px";

export const MAX_PAGE_WIDTH = 2000;

export const NAVBAR_HEIGHT = "65px";

export const FOOTER_HEIGHT = "100px";

export const spacingDistance = (units: number) => `${units * 8}px`;

export const percent = (percentage: number) => `${percentage}%`;

export enum NavBarTabs {
    DASHBOARD = "Dashboard",
    HISTORY = "History",
    LIVE_FEED = "Live Feed",
    SENSORS_AND_DEVICES = "Sensors and Devices",
    ADMIN = "Admin Panel",
}

export enum Z_INDEX {
    DEMO_PAGE_MODAL = 2200,
    DEMO_PAGE = 2100,
    NAVBAR = 2000,
    MODAL = 1000,
    BUTTON = 500,
    PAGE = 0,
    CARD = 10,
}
