export function login() {
    window.open(`${process.env.EXPRESS_SERVER_URL}/api/auth/login`, "_self");
}

export function logout() {
    window.open(`${process.env.EXPRESS_SERVER_URL}/api/auth/logout`, "_self");
}
