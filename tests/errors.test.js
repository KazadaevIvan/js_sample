const mainPage = require('../pages/main.page');
const errorMessages = require('../data/errorMessages.data.json');

describe('Errors', () => {
    context('Error message validation', () => {
        errorMessages.forEach(errorMessages => {
            it(`When divide ${errorMessages.firstNumber} by ${errorMessages.secondNumber} error message should appear and say ${errorMessages.errorMessage}`, async () => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(errorMessages.firstNumber);
                await mainPage.setSecondNumber(errorMessages.secondNumber);
                await mainPage.chooseOperation('Divide');
                await mainPage.clickCalculateButton();
                assert.equal(errorMessages.errorMessage, await mainPage.getErrorMessageText());
            });
        });
    });
});