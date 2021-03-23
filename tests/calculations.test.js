const mainPage = require('../pages/main.page');

describe('Calculations', () => {
    it('Addition of two numbers', () => {
        mainPage.open()
                .chooseBuild('Prototype')
                .setFirstNumber(8)
                .setSecondNumber(3)
                .chooseOperation('Add')
                .clickCalculateButton();
        assert.equal(8+3, mainPage.getAnswer());
    });

    it('Subtraction of two numbers', () => {
        mainPage.open()
                .chooseBuild('Prototype')
                .setFirstNumber(8)
                .setSecondNumber(3)
                .chooseOperation('Subtract')
                .clickCalculateButton();
        assert.equal(8-3, mainPage.getAnswer());
    });

    it('Multiplication of two numbers', () => {
        mainPage.open()
                .chooseBuild('Prototype')
                .setFirstNumber(8)
                .setSecondNumber(3)
                .chooseOperation('Multiply')
                .clickCalculateButton();
        assert.equal(8*3, mainPage.getAnswer());
    });

    it('Division of two numbers', () => {
        mainPage.open()
                .chooseBuild('Prototype')
                .setFirstNumber(8)
                .setSecondNumber(3)
                .chooseOperation('Divide')
                .clickCalculateButton();
        assert.equal(8/3, mainPage.getAnswer());
    });

    it('Concatenation of two numbers', () => {
        mainPage.open()
                .chooseBuild('Prototype')
                .setFirstNumber(8)
                .setSecondNumber(3)
                .chooseOperation('Concatenate')
                .clickCalculateButton();
        assert.equal(83, mainPage.getAnswer());
    });
});
