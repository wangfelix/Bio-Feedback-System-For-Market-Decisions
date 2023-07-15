import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getPageFromPathname, getViewportDimensions } from "Utils/helpers";

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

export const useIsLoggedIn = () => {
    return true;
};
