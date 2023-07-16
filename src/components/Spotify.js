const CLIENT_ID = "78be0496eccd4f789d4872bb3b0a1c6d"
const REDIRECT_URI = "http://localhost:3000/callback"
//const REDIRECT_URI = "https://rohankumar2025.github.io/WrappedGPT/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const SCOPES = ['user-top-read']


export const loginEndpoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`