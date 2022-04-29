const mainPage = require('../pages/main.page');
const values = require('../data/values.data.json')

describe('Calculations', () => {
    context('Results validation', () => {
        values.forEach(values => {
            it(`Addition of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.additionResult}`, async() => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(values.firstNumber);
                await mainPage.setSecondNumber(values.secondNumber);
                await mainPage.chooseOperation('Add');
                await mainPage.clickCalculateButton();
                assert.equal(values.additionResult, await mainPage.getAnswer(), `Result should be ${values.additionResult}`);
            });

            it(`Subtraction of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.subtractionResult}`, async() => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(values.firstNumber);
                await mainPage.setSecondNumber(values.secondNumber);
                await mainPage.chooseOperation('Subtract');
                await mainPage.clickCalculateButton();
                assert.equal(values.subtractionResult, await mainPage.getAnswer(), `Result should be ${values.subtractionResult}`);
            });

            it(`Multiplication of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.multiplicationResult}`, async() => {
                await mainPage.open();
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(values.firstNumber);
                await mainPage.setSecondNumber(values.secondNumber);
                await mainPage.chooseOperation('Multiply');
                await mainPage.clickCalculateButton();
                assert.equal(values.multiplicationResult, await mainPage.getAnswer(), `Result should be ${values.multiplicationResult}`);
            });

            it(`Division of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.divisionResult}`, async() => {
                await mainPage.open()
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(values.firstNumber);
                await mainPage.setSecondNumber(values.secondNumber);
                await mainPage.chooseOperation('Divide');
                await mainPage.clickCalculateButton();
                assert.equal(values.divisionResult, await mainPage.getAnswer(), `Result should be ${values.divisionResult}`);
            });

            it(`Concatenation of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.concatenationResult}`, async() => {
                await mainPage.open()
                await mainPage.chooseBuild('Prototype');
                await mainPage.setFirstNumber(values.firstNumber);
                await mainPage.setSecondNumber(values.secondNumber);
                await mainPage.chooseOperation('Concatenate');
                await mainPage.clickCalculateButton();
                assert.equal(values.concatenationResult, await mainPage.getAnswer(), `Result should be ${values.concatenationResult}`);
            });
        });
    });
});
