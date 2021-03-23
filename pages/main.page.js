class Main {

    get buildNumberDropdown() { return $('#selectBuild'); }

    get firstNumberField() { return $('#number1Field'); }
    
    get secondNumberField() { return $('#number2Field'); }

    get operationDropdown() { return $('#selectOperationDropdown'); }

    get calculateButton() { return $('#calculateButton'); }

    get answerField() { return $('#numberAnswerField'); }

    get integersOnlyCheckbox() { return $('#integerSelect'); }

    get clearButton() { return $('#clearButton'); }

    open() {
        browser.url('/BasicCalculator.html');
        return this;
    }

    chooseBuild(value) {
        this.buildNumberDropdown.waitForDisplayed();
        this.buildNumberDropdown.selectByVisibleText(value);
        return this;
    }

    setFirstNumber(number) {
        this.firstNumberField.waitForDisplayed();
        this.firstNumberField.setValue(number);
        return this;
    }

    setSecondNumber(number) {
        this.secondNumberField.waitForDisplayed();
        this.secondNumberField.setValue(number);
        return this;
    }

    chooseOperation(operation) {
        this.operationDropdown.waitForDisplayed();
        this.operationDropdown.selectByVisibleText(operation);
        return this;
    }

    clickCalculateButton() {
        this.calculateButton.waitForDisplayed();
        this.calculateButton.click();
        return this;
    }

    getAnswer() {
        this.answerField.waitForDisplayed();
        return this.answerField.getAttribute('value');
    }
}

module.exports = new Main();
