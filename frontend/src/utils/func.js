export const loggedIn = () => {
    const LOGGED_IN = JSON.parse(localStorage.getItem('author'))
    return LOGGED_IN;
}