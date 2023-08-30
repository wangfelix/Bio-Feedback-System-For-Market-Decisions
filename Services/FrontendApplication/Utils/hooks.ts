import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";

import { getPageFromPathname, getViewportDimensions } from "Utils/helpers";
import { RootState } from "State/Reducers";

/**
 * Returns the current URL's pathname without any subdirectories or query parameters.
 *
 * @return string current URL's pathname without any subdirectories or query parameters
 *
 * @example "/contribute-data/abc/def" -> "/contribute-data"
 */
export const usePage = () => {
    const location = useLocation();

    const [page, setPage] = useState(getPageFromPathname(location.pathname));

    useEffect(() => {
        setPage(getPageFromPathname(location.pathname));
    }, [location.pathname]);

    return page;
};

export const useViewportDimensions = () => {
    const [viewportDimensions, setViewportDimensions] = useState(getViewportDimensions());

    useEffect(() => {
        const handleResize = () => {
            setViewportDimensions(getViewportDimensions());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return viewportDimensions;
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useIsLoggedIn = () => useSelector<boolean>((state) => state.me.isLoggedIn);

export const useIsAdmin = () => useSelector<boolean>((state) => state.me.data.isAdmin);

/**
 * Checks, if the user is using a mobile device.
 */
export const useIsMobile = () => {
    const { viewportWidth } = useViewportDimensions();

    return useMemo(() => viewportWidth <= 900, [viewportWidth]);
};
