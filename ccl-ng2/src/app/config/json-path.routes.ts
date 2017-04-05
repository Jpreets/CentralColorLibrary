import { API_ENDPOINTS } from '../shared/constant';

/**
 * Type for the JSON backend path configuration entry
 */
export type JsonPathConfig = {
    hosts: Array<string>;
    path: string;
    jsonPath: string;
}

/**
 * The JSON mock routes configuration
 */
export const JSON_PATH_ROUTES: JsonPathConfig[] = [
    {
        hosts: ['localhost'],
        path: API_ENDPOINTS.AUTHENTICATION_ENDPOINT,
        jsonPath: '/assets/json/login-response.json'
    }
];