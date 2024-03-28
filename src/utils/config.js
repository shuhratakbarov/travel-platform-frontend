import {FRONT_BASE_URL} from "../const/config-client";

export const BASE_URL = 'http://localhost:8080';
export const AUTH_API = '/auth';
export const HOTEL_API = '/hotel';
export const RESTAURANT_API = '/restaurant';
export const TRANSPORT_API = '/transport';



const GITHUB_CLIENT_ID = '2f78fce72599034773d8';
const GITHUB_SCOPE = 'user';

const GOOGLE_CLIENT_ID = '315048389504-r7qks3mbnkd6diqjhsvfkp5deejn654o.apps.googleusercontent.com';
const GOOGLE_RESPONSE_TYPE = 'code';
const GOOGLE_SCOPE = 'email profile';



const REDIRECT_URI = FRONT_BASE_URL;


export const OAUTH2_GITHUB = "https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID + "&redirect_uri=" + REDIRECT_URI+"&scope="+GITHUB_SCOPE; //"&state=STATE"
export const OAUTH2_GOOGLE = "https://accounts.google.com/o/oauth2/auth?client_id=" + GOOGLE_CLIENT_ID + "&redirect_uri=" + REDIRECT_URI+"&response_type="+GOOGLE_RESPONSE_TYPE+"&scope="+GOOGLE_SCOPE; //&state=STATE"
export const OAUTH2_FACEBOOK = "/login";