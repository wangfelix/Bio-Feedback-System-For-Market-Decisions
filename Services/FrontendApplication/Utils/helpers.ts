/**
 * Removes any optional subdirectories or query parameters from the pathname.
 *
 * @return string current URL's pathname without any subdirectories or query parameters
 *
 * @example "/contribute-data/abc/def" -> "/contribute-data"
 */
export const getPageFromPathname = (pathname: string) => {
    const pathnameParts = pathname.split("/");

    return `/${pathnameParts[1]}`;
};

export const getViewportDimensions = () => {
    const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;

    return {
        viewportWidth,
        viewportHeight,
    };
};

export enum ERROR_MESSAGE {
    UNKNOW = "An Error Occured. Please check if the backend server is running, restart it or retry with an vpn connection.",
}
