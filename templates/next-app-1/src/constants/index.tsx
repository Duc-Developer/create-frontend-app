export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
};

export const APP_CONFIGS = {
    ROOT_API: process.env.NEXT_APP_API_URL,
    ACCESS_TOKEN: 'access_token',
};