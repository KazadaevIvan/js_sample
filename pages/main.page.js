class Main {

    get buildNumberDropdown() { return $('#selectBuild'); }

    get firstNumberField() { return $('#number1Field'); }
    
    get secondNumberField() { return $('#number2Field'); }

    get operationDropdown() { return $('#selectOperationDropdown'); }

    get calculateButton() { return $('#calculateButton'); }

    get answerField() { return $('#numberAnswerField'); }

    get integersOnlyCheckbox() { return $('#integerSelect'); }

    get clearButton() { return $('#clearButton'); }

    get errorMessage() { return $('#errorMsgField'); }

    async open() {
        await browser.url('/BasicCalculator.html');
    }

    async chooseBuild(value) {
        await this.buildNumberDropdown.waitForDisplayed();
        await this.buildNumberDropdown.selectByVisibleText(value);
    }

    async setFirstNumber(number) {
        await this.firstNumberField.waitForDisplayed();
        await this.firstNumberField.setValue(number);
    }

    async setSecondNumber(number) {
        await this.secondNumberField.waitForDisplayed();
        await this.secondNumberField.setValue(number);
    }

    async chooseOperation(operation) {
        await this.operationDropdown.waitForDisplayed();
        await this.operationDropdown.selectByVisibleText(operation);
    }

    async clickCalculateButton() {
        await this.calculateButton.waitForDisplayed();
        await this.calculateButton.click();
    }

    async getAnswer() {
        await this.answerField.waitForDisplayed();
        return await this.answerField.getValue();
    }

    async getErrorMessageText() {
        await this.errorMessage.waitForDisplayed();
        return await this.errorMessage.getText();
    }
}

module.exports = new Main();
