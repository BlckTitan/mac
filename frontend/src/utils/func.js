

export const loggedIn = () => {
    const LOGGED_IN = JSON.parse(localStorage.getItem('author'))
    if(LOGGED_IN) return LOGGED_IN;
}