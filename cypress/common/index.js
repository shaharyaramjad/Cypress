
/**
 * This method will create a random number of the given n length
 * @param {number} n expected length of the random number
 */
Cypress.Commands.add("createRandomNumber", (n) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n - 1)))) + (Math.pow(10, n - 1));
});