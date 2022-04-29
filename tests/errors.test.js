const mainPage = require('../pages/main.page');
const errorMessages = require('../data/errorMessages.data.json');

describe('Errors', () => {
    context('Error message validation', () => {
        errorMessages.forEach(errorMessages => {
            it(`When divide ${errorMessages.firstNumber} by ${errorMessages.secondNumber} error message should appear and say ${errorMessages.errorMessage}`, () => {
                mainPage.open()
                        .chooseBuild('Prototype')
                        .setFirstNumber(errorMessages.firstNumber)
                        .setSecondNumber(errorMessages.secondNumber)
                        .chooseOperation('Divide')
                        .clickCalculateButton();
                assert.equal(errorMessages.errorMessage, mainPage.getErrorMessageText());
            });
        });
    });
});