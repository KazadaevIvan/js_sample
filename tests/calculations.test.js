const mainPage = require('../pages/main.page');
const values = require('../data/values.data.json')

describe('Calculations', () => {

    context('Results validation', () => {
        values.forEach(values => {
            it(`Addition of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.additionResult}`, () => {
                mainPage.open()
                        //.chooseBuild('Prototype')
                        .setFirstNumber(values.firstNumber)
                        .setSecondNumber(values.secondNumber)
                        .chooseOperation('Add')
                        .clickCalculateButton();
                assert.equal(values.additionResult, mainPage.getAnswer(), `Result should be ${values.additionResult}`);
            });

            it(`Subtraction of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.subtractionResult}`, () => {
                mainPage.open()
                        .chooseBuild('Prototype')
                        .setFirstNumber(8)
                        .setSecondNumber(3)
                        .chooseOperation('Subtract')
                        .clickCalculateButton();
                assert.equal(values.subtractionResult, mainPage.getAnswer(), `Result should be ${values.subtractionResult}`);
            });

            it(`Multiplication of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.multiplicationResult}`, () => {
                mainPage.open()
                        .chooseBuild('Prototype')
                        .setFirstNumber(8)
                        .setSecondNumber(3)
                        .chooseOperation('Multiply')
                        .clickCalculateButton();
                assert.equal(values.multiplicationResult, mainPage.getAnswer(), `Result should be ${values.multiplicationResult}`);
            });

            it(`Division of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.divisionResult}`, () => {
                mainPage.open()
                        .chooseBuild('Prototype')
                        .setFirstNumber(8)
                        .setSecondNumber(3)
                        .chooseOperation('Divide')
                        .clickCalculateButton();
                assert.equal(values.divisionResult, mainPage.getAnswer(), `Result should be ${values.divisionResult}`);
            });

            it(`Concatenation of ${values.firstNumber} and ${values.secondNumber} should be equal to ${values.concatenationResult}`, () => {
                mainPage.open()
                        .chooseBuild('Prototype')
                        .setFirstNumber(8)
                        .setSecondNumber(3)
                        .chooseOperation('Concatenate')
                        .clickCalculateButton();
                assert.equal(values.concatenationResult, mainPage.getAnswer(), `Result should be ${values.concatenationResult}`);
            });
        });
    });
});
