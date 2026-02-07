/**
 * Checks if the given string is a valid string
 * @param {string} value - The string to be checked
 * @returns {boolean} true if the string is valid, false otherwise
 */
export function isValidString(value: string): boolean{

    if (value === undefined 
        || value === null 
        || value === "") {
        return false;
    }
    return true;
}

/**
 * Checks if the given string is a valid email address
 * @param {string} email - The email address to be checked
 * @returns {boolean} true if the email is valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
    
    if (!isValidString(email)) 
        return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}